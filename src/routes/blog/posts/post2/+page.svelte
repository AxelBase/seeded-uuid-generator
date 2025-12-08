<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How the Seeded Generator Works – SHA-256 to UUIDv5 | Blog</title>
  <meta name="description" content="A clear technical breakdown of how a any string seed is turned into a standards-compliant, deterministic UUID using SHA-256 hashing." />
  <meta property="og:title" content="How the Seeded Generator Works – SHA-256 to UUIDv5" />
  <meta property="og:description" content="A clear technical breakdown of how any string seed is turned into a standards-compliant, deterministic UUID using SHA-256 hashing." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How the Seeded Generator Works</p>
  </div>

  <article class="prose">
    <h1>How the Seeded Generator Works – From Seed to UUIDv5</h1>
    <p class="post-meta">Published: December 8, 2025</p>

    <p>At first glance, generating a deterministic UUID from a string might seem magical. In reality it follows a precise, standards-based process that anyone can verify and reproduce.</p>

    <p>The tool takes your seed—whether it is user-42, invoice-2025-001, or any free text—and passes it through the battle-tested SHA-256 cryptographic hash function built into every modern browser. This produces a 256-bit value that is unique to that exact input.</p>

    <h2>From Hash to UUID</h2>
    <p>Only the first 128 bits of the hash are needed for a UUID. These 16 bytes are then adjusted in two specific positions to comply with RFC 4122:</p>

    <p>First, the version field is set to 5, indicating a name-based UUID using SHA-1 (even though we use stronger SHA-256, the version number remains 5 for compatibility). Second, the variant field is set to the RFC 4122 variant, ensuring every other UUID library recognizes the result as valid.</p>

    <h2>Why SHA-256 Instead of SHA-1</h2>
    <p>The original UUIDv5 specification uses SHA-1, but SHA-1 is now considered cryptographically weak. By using SHA-256 and simply truncating, we gain far greater collision resistance while keeping perfect compatibility with existing UUID parsers and databases.</p>

    <h2>Determinism Guaranteed</h2>
    <p>Because SHA-256 is a pure mathematical function with no hidden state or randomness, the same input string will always produce the exact same 256-bit hash on every device and in every browser forever. Truncating and applying the version/variant bits is also deterministic. The final UUID is therefore 100% reproducible.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Is this real UUIDv5?</summary>
      <p>Functionally identical. Only difference is stronger hash algorithm; all parsers accept it as valid version 5.</p>
    </details>
    <details>
      <summary>Can I feed the output directly into PostgreSQL UUID type?</summary>
      <p>Yes. PostgreSQL, MySQL, MongoDB, and every major database accept it without issue.</p>
    </details>
    <details>
      <summary>What if two different seeds produce the same UUID?</summary>
      <p>With 128-bit output the probability is lower than one in ten billion for reasonable data volumes.</p>
    </details>

    <p class="italic-note">Understanding the pipeline removes any mystery—you now have full confidence that your seeded UUIDs are stable, standards-compliant, and safe.</p>
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