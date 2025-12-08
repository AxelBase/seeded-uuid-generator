<script lang="ts">
  import { base } from '$app/paths';
  import { generateDeterministicUUID } from '$lib/uuid-utils';

  let seed = '';
  let uuid = '';

  async function generate() {
    if (!seed.trim()) {
      uuid = '';
      return;
    }
    uuid = await generateDeterministicUUID(seed);
  }

  function copyToClipboard() {
    if (!uuid) return;
    navigator.clipboard.writeText(uuid).then(() => {
      const toastEl = document.getElementById('copyToast');
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    });
  }

  function reset() {
    seed = '';
    uuid = '';
  }
</script>

<svelte:head>
  <title>Seeded Deterministic UUID Generator – Reproducible IDs for Testing & Fixtures</title>
  <meta name="description" content="Generate perfectly reproducible UUIDs from any seed string. Ideal for stable test data, database fixtures, Jest/Vitest snapshots, Prisma seeds, and eliminating flaky tests." />
  <meta property="og:title" content="Seeded Deterministic UUID Generator" />
  <meta property="og:description" content="Same seed → same UUID forever. 100% client-side, zero tracking, built for reliable testing." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="container py-5">

  <!-- Hero / Generator -->
  <section class="text-center mb-5 py-4">
    <h1 class="display-4 fw-bold mb-3">Seeded Deterministic UUID Generator</h1>
    <p class="lead text-muted mb-5">
      Enter any string below and get a <strong>100% reproducible UUID</strong> — perfect for stable tests and fixtures.
    </p>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form on:submit|preventDefault={generate} class="mb-4">
          <div class="mb-3">
            <label for="seedInput" class="form-label fw-semibold">Seed (string or number)</label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="seedInput"
              bind:value={seed}
              placeholder="e.g. user-42, order-2025-001, invoice-EU-007"
              autocomplete="off"
            />
            <div class="form-text">Same seed = identical UUID every single time, on every device.</div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg px-5">Generate UUID</button>
        </form>

        {#if uuid}
          <div class="p-4 bg-light rounded-4 border">
            <h5 class="text-secondary mb-3">Your deterministic UUID</h5>
            <code class="d-block h5 font-monospace text-break bg-white p-3 rounded border">{uuid}</code>
            <div class="mt-4 d-flex gap-3 justify-content-center">
              <button class="btn btn-success" on:click={copyToClipboard}>Copy to Clipboard</button>
              <button class="btn btn-outline-secondary" on:click={reset}>Reset</button>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </section>

  <!-- About Section (550–600 words) -->
  <section id="about" class="py-5 bg-light rounded-4">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="display-6 fw-bold mb-4">About This Tool</h2>
        <p class="lead">
          Random UUIDs are great for production security — but they are the <strong>number-one cause of flaky tests</strong>. A test that passes locally can fail in CI simply because <code>crypto.randomUUID()</code> generated a different value.
        </p>
        <p>
          This Seeded Deterministic UUID Generator solves that problem once and for all. Instead of randomness, it uses <strong>SHA-256 hashing</strong> of your chosen seed string to produce a standards-compliant UUIDv5-style identifier. The result? <strong>Same seed → same UUID forever</strong>, across every machine, browser, and year.
        </p>
        <p>
          Built entirely in the browser with zero server round-trips, zero cookies, and zero analytics, your seeds never leave your device. The algorithm truncates the SHA-256 hash to 128 bits and applies the correct version (5) and variant bits according to RFC 4122 — meaning the output is accepted by PostgreSQL, MySQL, MongoDB, Prisma, TypeORM, and every other system that understands UUIDs.
        </p>
        <p>
          Thousands of developers already use this exact pattern to make Jest/Vitest snapshots stable, keep database fixtures consistent across environments, eliminate foreign-key mismatches in CI, and make end-to-end tests with Cypress or Playwright reliable. Whether you're writing unit tests, integration tests, or seeding production-like data for staging, deterministic UUIDs turn non-determinism from a bug into a solved problem.
        </p>
        <p>
          The tool is open-source (MIT licensed), hosted on GitHub, and deliberately lightweight — no npm packages beyond SvelteKit and Bootstrap via CDN. It works offline after the first load and is designed to stay fast and simple forever.
        </p>
        <p class="mb-0">
          <strong>In short:</strong> If you ever find yourself debugging a test failure that disappears when you re-run it, you probably need deterministic UUIDs. This tool gives them to you instantly.
        </p>
      </div>
    </div>
  </section>

  <!-- How to Use Section (550–600 words) -->
  <section id="howto" class="py-5">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="display-6 fw-bold mb-4">How to Use</h2>
        <p class="lead">Four simple steps — and your tests become reproducible forever.</p>

        <ol class="list-group list-group-numbered mb-5">
          <li class="list-group-item py-3">
            <strong>Choose a meaningful seed.</strong><br>
            Use names that make sense in context: <code>user-alice</code>, <code>order-2025-007</code>, <code>invoice-EU-042</code>, <code>session-happy-path</code>. The clearer the seed, the easier debugging becomes.</li>

          <li class="list-group-item py-3">
            <strong>Generate the UUID here or in code.</strong><br>
            Paste the seed above → click Generate → copy the result. Or import the same <code>generateDeterministicUUID</code> function directly in your Node.js or browser tests (the algorithm is identical).</li>

          <li class="list-group-item py-3">
            <strong>Use the UUID everywhere you need stability.</strong><br>
            • Factory libraries (FactoryBot, Rosie)<br>
            • Prisma / TypeORM / Sequelize seed files<br>
            • Jest & Vitest setup files<br>
            • Cypress/Playwright data attributes<br>
            • Snapshot testing<br>
            • Review-app databases</li>

          <li class="list-group-item py-3">
            <strong>Save the seed, not the UUID.</strong><br>
            Store the seed string in your documentation or constants file. Anyone on your team (or future you) can regenerate the exact same UUID instantly, without copying long hex strings.</li>
        </ol>

        <div class="alert alert-info">
          <strong>Pro tip:</strong> Create a shared <code>seeds.ts</code> file in your repo with constants like<br>
          <code>export const USER_ALICE = 'user-alice';</code><br>
          <code>export const ORDER_2025_001 = 'order-2025-001';</code><br>
          Then every test uses <code>await generateDeterministicUUID(USER_ALICE)</code> — no more magic strings scattered around.
        </div>

        <p>
          Once you adopt this pattern, flaky tests caused by random IDs disappear permanently. Your CI becomes greener, code reviews faster, and onboarding painless.
        </p>
      </div>
    </div>
  </section>

  <!-- FAQ Section (550–600 words) -->
  <section id="faq" class="py-5 bg-light rounded-4">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="display-6 fw-bold mb-5">Frequently Asked Questions</h2>

        <div class="accordion" id="faqAccordion">

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
                Is this safe to use in production for secrets or authentication tokens?
              </button>
            </h2>
            <div id="q1" class="accordion-collapse collapse show">
              <div class="accordion-body">
                No. This tool is intentionally deterministic and therefore <strong>not cryptographically secure</strong>. Use it only for testing, fixtures, and stable identifiers. For sessions, JWTs, password resets, etc., continue using <code>crypto.randomUUID()</code> or equivalent.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
                Will two different seeds ever produce the same UUID?
              </button>
            </h2>
            <div id="q2" class="accordion-collapse collapse">
              <div class="accordion-body">
                The probability is astronomically low — roughly 1 in 10³⁸ even after billions of records. For any realistic test suite (thousands to low millions of records) collisions are effectively impossible.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
                Does the tool send my seeds anywhere?
              </button>
            </h2>
            <div id="q3" class="accordion-collapse collapse">
              <div class="accordion-body">
                <strong>Never.</strong> All computation happens in your browser using the Web Crypto API. No network requests, no cookies, no analytics. Your data never leaves your device.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4">
                Can I use the same function in Node.js backend tests?
              </button>
            </h2>
            <div id="q4" class="accordion-collapse collapse">
              <div class="accordion-body">
                Yes! The algorithm is pure SHA-256 → truncate → set version/variant bits. You can copy the exact same logic into Node (using <code>crypto.createHash('sha256')</code>) and get bit-for-bit identical results.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5">
                Why not just use UUIDv5 with a fixed namespace?
              </button>
            </h2>
            <div id="q5" class="accordion-collapse collapse">
              <div class="accordion-body">
                You absolutely valid approach! This tool simply removes the namespace requirement so you have one less constant to manage. The output is functionally equivalent to UUIDv5 and accepted everywhere.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- Toast -->
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="copyToast" class="toast align-items-center text-bg-success border-0" role="alert">
      <div class="d-flex">
        <div class="toast-body fw-medium">UUID copied to clipboard!</div>
<button
  type="button"
  class="btn-close btn-close-white me-2 m-auto"
  data-bs-dismiss="toast"
  aria-label="Close notification"
></button>      </div>
    </div>
  </div>

</div>