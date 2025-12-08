export async function generateDeterministicUUID(seed) {
  if (typeof seed !== 'string') {
    seed = String(seed);
  }
  const encoder = new TextEncoder();
  const data = encoder.encode(seed);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const bytes = new Uint8Array(hash).slice(0, 16);

  // Set UUID version 5
  bytes[6] = (bytes[6] & 0x0f) | 0x50;
  // Set RFC 4122 variant
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return [
    hex.substring(0, 8),
    hex.substring(8, 12),
    hex.substring(12, 16),
    hex.substring(16, 20),
    hex.substring(20, 32)
  ].join('-');
}