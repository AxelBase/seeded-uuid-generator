<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | Seeded UUID Generator</title>
  <meta name="description" content="Terms of use for the free, open-source, client-side Seeded/Deterministic UUID Generator." />
  <meta property="og:title" content="Terms & Conditions | Seeded UUID Generator" />
  <meta property="og:description" content="Free to use, no warranty, no liability — simple and clear terms." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last updated: December 8, 2025</p>

    <p>By accessing or using the <strong>Seeded/Deterministic UUID Generator</strong> (the "Tool"), you agree to these Terms & Conditions.</p>

    <h2>1. Nature of the Tool</h2>
    <p>This is a <strong>free, open-source</strong> web utility that runs 100% in your browser. No account, login, or payment is required. The source code is publicly available on GitHub under the MIT License.</p>

    <h2>2. Permitted Use</h2>
    <p>You may use the Tool for any lawful purpose, including personal, educational, and commercial projects. Generating UUIDs for testing, fixtures, development, or production use is fully permitted.</p>

    <h2>3. Prohibited Use</h2>
    <p>You may not:</p>
    <ul>
      <li>Use the Tool to generate harmful, illegal, or malicious content</li>
      <li>Attempt to overload, attack, or disrupt the service</li>
      <li>Remove or alter copyright notices or licensing information</li>
      <li>Claim the Tool as your own work</li>
    </ul>

    <h2>4. No Warranty</h2>
    <p>The Tool is provided <strong>"as is"</strong> without any warranties, express or implied. We do not guarantee that the generated UUIDs are unique in every possible scenario, though collision probability is astronomically low. Use in production systems is at your own risk.</p>

    <h2>5. Limitation of Liability</h2>
    <p>In no event shall AxelBase or its creators be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Tool — even if advised of the possibility of such damages.</p>

    <h2>6. Intellectual Property</h2>
    <p>The source code is licensed under the <strong>MIT License</strong>. You are free to fork, modify, and redistribute it following the license terms. The name "AxelBase" and the tool’s branding remain property of its author.</p>

    <h2>7. Changes to Terms</h2>
    <p>We may update these terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by the laws of the Republic of Cyprus.</p>

    <p class="italic-note"><strong>Thank you for using the Seeded UUID Generator.</strong> Keep building reliable, reproducible tests!</p>
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