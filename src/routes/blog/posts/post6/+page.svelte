<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Collision Probability: Are 128 Bits Really Safe? | Blog</title>
  <meta name="description" content="Clear math and real numbers showing why 128-bit seeded UUIDs have essentially zero chance of collision in testing and fixtures." />
  <meta property="og:title" content="Collision Probability: Are 128 Bits Really Safe?" />
  <meta property="og:description" content="Clear math and real numbers showing why 128-bit seeded UUIDs have essentially zero chance of collision in testing and fixtures." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Collision Probability</p>
  </div>

  <article class="prose">
    <h1>Collision Probability: Are 128 Bits Really Safe?</h1>
    <p class="post-meta">Published: December 8, 2025</p>

    <p>Many developers worry that truncating SHA-256 to 128 bits might cause collisions. The mathematics says otherwise. In practice, the chance of two different seeds producing the same UUID is so small it will never happen in real testing scenarios.</p>

    <h2>The Birthday Paradox Explained</h2>
    <p>The birthday paradox tells us how many items we need before a collision becomes likely. For 128 bits, you would need roughly 2 to the power of 64 items before the probability reaches fifty percent. That number is larger than all the grains of sand on Earth.</p>

    <h2>Real-World Numbers</h2>
    <p>Even if you generate one billion seeded UUIDs every second for ten years, the probability of a single collision remains far less than one in a trillion. Most test suites contain fewer than ten thousand records total.</p>

    <h2>Testing vs Production</h2>
    <p>In production systems, true randomness is important for security. In testing, collisions only matter if they break your assertions. With reasonable seed names, you control uniqueness yourself, making the math even safer.</p>

    <h2>Extra Safety Margin</h2>
    <p>Using SHA-256 instead of the weaker SHA-1 gives an enormous safety buffer. Even if a theoretical attack existed on SHA-256, you would still need astronomical computing power to find a collision in a test dataset.</p>

    <h2>FAQ</h2>
    <details>
      <summary>How many UUIDs can I safely create?</summary>
      <p>Billions per project with zero worry. Most teams never exceed a few thousand.</p>
    </details>
    <details>
      <summary>Should I worry about birthday attacks?</summary>
      <p>No. The numbers required are impossible in testing contexts.</p>
    </details>
    <details>
      <summary>Is 128 bits enough for production?</summary>
      <p>For testing yes; for production secrets use full random UUIDs.</p>
    </details>

    <p class="italic-note">You can confidently use 128-bit seeded UUIDs knowing collisions will never affect your work.</p>
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