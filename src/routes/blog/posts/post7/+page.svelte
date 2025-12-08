<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Advanced Seeding Patterns and Namespaces | Blog</title>
  <meta name="description" content="Best practices for structuring seeds like user-42, order-EU-001, and invoice-2025 to keep your test data organized and deterministic." />
  <meta property="og:title" content="Advanced Seeding Patterns and Namespaces" />
  <meta property="og:description" content="Best practices for structuring seeds like user-42, order-EU-001, and invoice-2025 to keep your test data organized and deterministic." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Advanced Seeding Patterns</p>
  </div>

  <article class="prose">
    <h1>Advanced Seeding Patterns and Namespaces</h1>
    <p class="post-meta">Published: December 8, 2025</p>

    <p>Good seed names make your test data easy to read and maintain. Thoughtful patterns turn a simple string into a powerful organizational tool that scales with any project size.</p>

    <h2>Basic Naming Convention</h2>
    <p>Start with the entity type followed by a descriptor. Examples include user-alice, product-premium, order-2025-001, and invoice-EU-001. This instantly tells anyone what record they are looking at.</p>

    <h2>Adding Namespaces</h2>
    <p>Use prefixes for different contexts. Add eu- or us- for regions, dev- or staging- for environments, and happy-path or error-case for scenarios. The UUID stays deterministic while the seed stays readable.</p>

    <h2>Team-Wide Standards</h2>
    <p>Agree on a short style guide. Keep seeds lowercase, use hyphens, avoid spaces, and limit length. Document the convention in your README so every new developer creates consistent identifiers from day one.</p>

    <h2>Growing Without Chaos</h2>
    <p>As projects grow to hundreds of records, good seeds prevent confusion. You can quickly find the exact record you need in logs, database dumps, or failed assertions. Searching becomes trivial because the seed name appears everywhere.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Should seeds ever change?</summary>
      <p>Only if the meaning changes. Changing a seed creates a new UUID, so treat them like constants.</p>
    </details>
    <details>
      <summary>Can I include dates or numbers?</summary>
      <p>Yes. order-2025-001 or session-20251208 are perfect examples.</p>
    </details>
    <details>
      <summary>How long can a seed be?</summary>
      <p>As long as needed. SHA-256 handles any length with ease.</p>
    </details>

    <p class="italic-note">Clear seeding patterns make large test suites feel small and keep everyone on the same page.</p>
  </article>
</div>

<style>
  /* ← same full styling as in your example → */
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: #666; }
  .breadcrumbs a { color: #0d6efd; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .post-meta { color: #666; font-size: .9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; color: #0d6efd; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f0f0f0; padding-bottom: .5rem; color: #0d6efd; }
  .prose p, .prose details { color: #333; }
  .prose details { background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background: #ffffff; }
  .prose summary { cursor: pointer; font-weight: 600; color: #0d6efd; list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: "+"; margin-right: .75rem; color: #0d6efd; font-weight: bold; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: #666; }
</style>