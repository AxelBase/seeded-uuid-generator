<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Page Not Found | Seeded UUID Generator</title>
  <meta name="description" content="The page you are looking for does not exist. Return to the deterministic UUID generator." />
  <meta property="og:title" content="404 – Page Not Found" />
  <meta property="og:description" content="Oops! This page doesn't exist. Head back to generate reproducible UUIDs." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="container py-5 text-center">
  <div class="row justify-content-center">
    <div class="col-lg-7">
      <h1 class="display-1 fw-bold text-primary mb-4">404</h1>
      <h2 class="h3 mb-4">Oops! This seed doesn't resolve to a valid page.</h2>

      <p class="lead text-muted mb-5">
        The URL you entered doesn't exist — just like a random UUID that hasn't been seeded yet.
      </p>

      <div class="d-grid gap-3 d-md-flex justify-content-md-center mb-5">
        <a href="{base}/" class="btn btn-primary btn-lg px-5">← Back to UUID Generator</a>
        <a href="{base}/blog" class="btn btn-outline-secondary btn-lg px-5">Read the Blog</a>
      </div>

      <h3 class="h5 mb-3">Quick links</h3>
      <ul class="list-unstyled d-flex flex-wrap justify-content-center gap-4 text-muted">
        <li><a href="{base}/" class="text-decoration-none">Home</a></li>
        <li><a href="{base}/blog" class="text-decoration-none">Blog</a></li>
        <li><a href="{base}/privacy" class="text-decoration-none">Privacy Policy</a></li>
        <li><a href="{base}/terms" class="text-decoration-none">Terms</a></li>
      </ul>

      <p class="italic-note mt-5 text-muted">
        <em>No data was lost — because nothing ever leaves your browser.</em>
      </p>
    </div>
  </div>
</div>

<style>
  .display-1 {
    font-size: 8rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.05em;
  }

  @media (max-width: 768px) {
    .display-1 {
      font-size: 5rem;
    }
  }

  .italic-note {
    font-size: 1.1rem;
  }

  a {
    transition: color 0.2s;
  }

  a:hover {
    color: #0d6efd !important;
  }
</style>