<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Seeded UUID Generator</title>
  <meta name="description" content="This tool runs 100% in your browser. We collect zero personal data, zero analytics, zero logs — your seeds and UUIDs never leave your device." />
  <meta property="og:title" content="Privacy Policy | Seeded UUID Generator" />
  <meta property="og:description" content="100% client-side. No tracking, no cookies, no data collection of any kind." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: December 8, 2025</p>

    <p>Welcome to the <strong>Seeded/Deterministic UUID Generator</strong> — a completely <strong>client-side web utility</strong> created by AxelBase. This Privacy Policy is simple and transparent because <strong>we collect absolutely no personal data whatsoever</strong>.</p>

    <h2>No Data Collection — Ever</h2>
    <p>All UUID generation happens <strong>exclusively in your browser</strong> using the Web Crypto API. When you enter a seed (e.g., user-1 or order-2025-001), the SHA-256 hashing and UUID formatting occur locally on your device. <strong>Nothing is sent to any server</strong>, including ours.</p>

    <p>We do <strong>not</strong> collect, store, log, or transmit:</p>
    <ul>
      <li>IP addresses</li>
      <li>Browser or device information</li>
      <li>Seeds you type or generate</li>
      <li>Generated UUIDs</li>
      <li>Timestamps or usage patterns</li>
    </ul>

    <h2>No Cookies, No Analytics, No Tracking</h2>
    <p>This site uses <strong>zero cookies</strong>, zero localStorage (beyond temporary form state), and zero third-party analytics tools such as Google Analytics, Plausible, or similar. There are no tracking pixels, fingerprints, or behavioral scripts of any kind.</p>

    <h2>How the Tool Actually Works</h2>
    <p>When you type a seed and click Generate, JavaScript executes entirely in your browser. The resulting UUID is displayed instantly and can be copied to your clipboard — all without ever leaving your computer. Even if you refresh the page, no record of your activity exists anywhere except your own device’s memory.</p>

    <h2>Third-Party Services</h2>
    <p>The only external resources are Bootstrap 5 CSS/JS via jsDelivr CDN (used purely for styling and toast notifications). These files are served with Subresource Integrity hashes and do not execute tracking code.</p>

    <h2>Data Security</h2>
    <p>Since no data ever reaches us, there is nothing for us to secure, sell, share, or lose. Your seeds and UUIDs remain 100% private by design.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is not directed at children under 13, and we do not knowingly collect any data from children.</p>

    <h2>Changes to This Policy</h2>
    <p>If we ever change this policy (highly unlikely), the new version will be posted here with an updated effective date.</p>

    <p class="italic-note"><strong>Your privacy is not a feature — it is the entire architecture.</strong> By using this tool you can be certain that your test data stays yours alone.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 5rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: #666; }
  .breadcrumbs a { color: #0d6efd; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .post-meta { color: #666; font-size: .9rem; margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  .prose h1 { font-size: 2.5rem; margin-bottom: .5rem; color: #0d6efd; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid #f0f0f0; padding-bottom: .5rem; color: #0d6efd; }
  .prose p, .prose ul { color: #333; }
  .prose ul { padding-left: 1.8rem; margin: 1rem 0; }
  .prose strong { color: #0d6efd; }
  .italic-note { font-style: italic; text-align: center; margin-top: 3.5rem; color: #444; font-size: 1.1rem; }
</style>