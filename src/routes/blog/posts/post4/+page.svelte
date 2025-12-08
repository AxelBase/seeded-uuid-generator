<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Generating Stable Primary Keys for Database Fixtures | Blog</title>
  <meta name="description" content="Learn how to create database fixtures with deterministic UUIDs so primary keys and foreign keys stay identical across development, CI, and staging." />
  <meta property="og:title" content="Generating Stable Primary Keys for Database Fixtures" />
  <meta property="og:description" content="Learn how to create database fixtures with deterministic UUIDs so primary keys and foreign keys stay identical across development, CI, and staging." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Generating Stable Primary Keys for Database Fixtures</p>
  </div>

  <article class="prose">
    <h1>Generating Stable Primary Keys for Database Fixtures</h1>
    <p class="post-meta">Published: December 8, 2025</p>

    <p>Database fixtures are the foundation of reliable integration tests. Whether you use Prisma, TypeORM, Sequelize, or plain SQL scripts, one problem appears again and again: random primary keys break foreign-key relationships across environments.</p>

    <p>A user created locally might have one UUID, while the same user in CI has a completely different one. Suddenly your orders table points to a non-existent user, and the entire test suite fails. The solution is to make every primary key deterministic by deriving it from a meaningful seed.</p>

    <h2>How It Works in Practice</h2>
    <p>Start by choosing clear seed names for each record. A user becomes user-alice, user-bob, or customer-001. An order becomes order-2025-001. When the fixture runs, the seeded generator turns each name into a fixed UUID. The same fixture file now produces identical data everywhere.</p>

    <h2>Keeping Relationships Intact</h2>
    <p>Because every record uses a stable seed, foreign keys automatically match. An order seeded as order-2025-001 will always reference the exact same user UUID as user-alice, no matter where the test runs. This eliminates broken references and makes database snapshots truly portable.</p>

    <h2>Real Benefits You Will See</h2>
    <p>Development databases stay in sync with the team. CI pipelines finish faster because fewer tests fail due to missing references. Staging environments mirror production data structure more accurately. Review apps and preview databases become trustworthy because every record has the same identifier.</p>

    <h2>Migration and Seeding Tools</h2>
    <p>All popular tools support this pattern. Prisma seed files, TypeORM data sources, Knex migrations, and even raw SQL scripts can call the same seeded generator. Once set up, you never think about random IDs again.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Do I need to change my schema?</summary>
      <p>No. UUID columns work exactly the same; only the way you insert data changes.</p>
    </details>
    <details>
      <summary>Can I mix seeded and random IDs?</summary>
      <p>Yes. Use seeded IDs for fixture records and random ones for dynamic data during tests.</p>
    </details>
    <details>
      <summary>What about performance?</summary>
      <p>Generating a seeded UUID takes microseconds and has zero impact on test speed.</p>
    </details>

    <p class="italic-note">Stable primary keys turn database fixtures from a source of frustration into a reliable testing asset.</p>
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