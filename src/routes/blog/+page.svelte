<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Why You Need Deterministic UUIDs in Testing',
      description: 'Discover why random UUIDs make tests flaky and how seeded generation creates perfectly repeatable test data.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Inside the Seeded Generator: SHA-256 to UUIDv5 Conversion',
      description: 'A deep dive into the exact algorithm that turns any string seed into a standards-compliant, deterministic UUID.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Replacing crypto.randomUUID() in Your Test Suite',
      description: 'Step-by-step guide to swap flaky random IDs with stable seeded ones without changing a single assertion.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Generating Stable Primary Keys for Database Fixtures',
      description: 'How to use the same seed across development, CI, and staging databases so foreign-key relationships never break.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Real-World Examples: Jest, Vitest, Cypress & Prisma',
      description: 'Copy-paste ready code snippets showing seeded UUID usage in the most popular testing and ORM tools.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Collision Probability: Are 128 Bits Really Safe?',
      description: 'Mathematical proof and practical numbers showing why SHA-256-truncated UUIDs are more than sufficient for testing.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Advanced Seeding Patterns and Namespaces',
      description: 'Best practices for structuring seeds (user-42, order-2025-07, invoice-EU-001) while keeping output deterministic.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Seeded UUID Generator</title>
  <meta name="description" content="In-depth articles about deterministic UUIDs, testing best practices, and reproducible identifiers." />
</svelte:head>

<div class="container fade-in blog-index py-5">
  <header class="blog-header text-center mb-5">
    <h1>Blog: Seeded UUID Insights</h1>
    <p class="subtitle">
      Technical deep-dives, testing patterns, and real-world usage of deterministic UUID generation.
      Everything you need to make your tests and fixtures 100 % reproducible.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card text-decoration-none h-100 shadow-sm border-0">
        <div class="card-body d-flex flex-column">
          <h2 class="post-title h5 fw-bold">{post.title}</h2>
          <p class="post-description text-muted flex-grow-1 small">{post.description}</p>
          <span class="read-more mt-auto">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }
  .subtitle {
    max-width: 720px;
    margin: 0 auto;
    font-size: 1.15rem;
    color: #555;
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
  .post-card {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  }
  .post-title {
    color: #0d6efd;
  }
  .read-more {
    color: #0d6efd;
    font-weight: 600;
  }
  .post-card:hover .read-more {
    transform: translateX(6px);
  }
</style>