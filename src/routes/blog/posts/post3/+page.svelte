<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Replace crypto.randomUUID() With Seeded IDs in Tests | Blog</title>
  <meta name="description" content="Practical guide to eliminate flaky tests by replacing random UUIDs with deterministic seeded ones in Jest, Vitest, Playwright and more." />
  <meta property="og:title" content="Replace crypto.randomUUID() With Seeded IDs in Tests" />
  <meta property="og:description" content="Practical guide to eliminate flaky tests by replacing random UUIDs with deterministic seeded ones in Jest, Vitest, Playwright and more." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Replacing crypto.randomUUID() in Tests</p>
  </div>

  <article class="prose">
    <h1>Replacing crypto.randomUUID() With Deterministic Seeds in Tests</h1>
    <p class="post-meta">Published: December 8, 2025</p>

    <p>One of the most common sources of flaky tests is the use of crypto.randomUUID() or similar random generators when creating records. The test passes locally, but the snapshot or database assertion fails in CI because a different identifier was generated.</p>

    <p>The fix is surprisingly simple: generate the UUID from a stable seed instead of relying on randomness.</p>

    <h2>Pattern You Can Apply Today</h2>
    <p>Instead of calling crypto.randomUUID() directly, create a tiny helper that accepts a meaningful string. For a user you might use user-1, user-2, admin, guest, and so on. The helper hashes that string and returns the same UUID every time.</p>

    <h2>Where to Apply It</h2>
    <p>Apply the pattern in factories, fixtures, page objects, component stories, and anywhere an ID is needed during testing. Common places include:</p>

    <p>Database seed files, Jest or Vitest setup files, Playwright page objects, API response stubs, Storybook stories, and snapshot tests.</p>

    <h2>Benefits You’ll Notice Immediately</h2>
    <p>Tests become idempotent, snapshots stop changing, database constraints never break because a foreign key changed, CI runs are green more often, and onboarding new developers is faster because they can run the exact same data locally.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Do I have to change all tests at once?</summary>
      <p>No. Start with the most flaky ones and gradually replace as you touch the code.</p>
    </details>
    <details>
      <summary>Will this slow down my test suite?</summary>
      <p>No. SHA-256 in the browser is microseconds fast.</p>
    </details>
    <details>
      <summary>Can I keep random UUIDs in some places?</summary>
      <p>Yes. Use seeded only where stability matters; keep true randomness for security tests.</p>
    </details>

    <p class="italic-note">Making your identifiers deterministic is one of the highest-return refactors you can perform on a test suite.</p>
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