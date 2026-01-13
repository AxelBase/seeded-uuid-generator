<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click outside directive
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<div class="page-wrapper">
  <header class="navbar-custom">
    <nav class="nav-container">
      <div class="brand-section">
        <a href="{base}/" aria-label="Home">
          <img src="{base}/AxelLab-Logo.ico" alt="AxelLab Logo" class="navbar-brand-logo" />
        </a>

        <a class="navbar-brand-text" href="{base}/">AxelBase</a>

        <div class="bmac-wrapper" use:clickOutside on:click_outside={closeDropdown}>
          <button
            class="bmac-button d-flex align-items-center gap-2"
            on:click={toggleDropdown}
            aria-label="Support us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
            </svg>
            <span class="d-none d-md-inline">Coffee</span>
          </button>

          {#if isDropdownOpen}
            <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
              >
                <span class="amount">$3</span> coffee
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
              >
                <span class="amount">$5</span> coffees
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
              >
                <span class="amount">$10</span> coffees
              </a>

              <a
                href="https://buymeacoffee.com/axelbase"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="custom-amount"
              >
                Custom amount
              </a>

              <a
                href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                target="_blank"
                rel="noopener noreferrer"
                on:click={closeDropdown}
                class="custom-amount bitcoin-option"
              >
                Bitcoin / Crypto
              </a>
            </div>
          {/if}
        </div>
      </div>

      <ul class="nav-links d-none d-md-flex">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#howto">How to use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link-custom" href="{base}/blog">Blog</a></li>
      </ul>

      <div class="d-md-none">
        <!-- You can add mobile menu toggle here later if needed -->
      </div>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer class="footer-custom">
    <div class="container">
      <p class="mb-2">
        © {currentYear} AxelBase Crypto Price Target Calculator
      </p>
      <div class="footer-links">
        <a href="{base}/privacy">Privacy</a>
        <span>|</span>
        <a href="{base}/terms">Terms</a>
      </div>
    </div>
  </footer>
</div>

<style>
  /* ── Buy Me a Coffee overrides / adaptations ── */

  .bmac-button {
    background: linear-gradient(135deg, #FFDD00 0%, #FBB03B 100%);
    border: none;
    border-radius: var(--radius-bubbly);
    padding: 0.55rem 1.1rem;
    font-weight: 700;
    color: #222;
    box-shadow: 0 4px 15px rgba(251, 176, 59, 0.5);
    transition: var(--transition-smooth);
  }

  .bmac-button:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 8px 22px rgba(251, 176, 59, 0.65);
  }

  .bmac-dropdown {
    position: absolute;
    top: 130%;
    left: 0;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 35px rgba(0,0,0,0.22);
    min-width: 220px;
    padding: 0.5rem 0;
    z-index: 1001;
    overflow: hidden;
  }

  .bmac-dropdown a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1.3rem;
    color: var(--brand-primary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition-smooth);
  }

  .bmac-dropdown a:hover {
    background-color: #fff8e8;
    color: #c47f00;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: #e67e22;
    min-width: 50px;
    text-align: right;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--brand-primary);
    border-top: 1px solid #eee;
    justify-content: center !important;
    padding: 0.9rem 1.3rem;
  }

  .bmac-dropdown .bitcoin-option {
    color: #f7931a;
    font-weight: 700;
  }

  .bmac-dropdown .bitcoin-option:hover {
    background-color: #fff5e9;
    color: #e67e22;
  }
</style>