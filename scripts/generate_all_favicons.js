const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let currentOffset = headerSize;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(buf.length, 8); // size
    entry.writeUInt32LE(currentOffset, 12); // offset
    entries.push(entry);
    currentOffset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function generate() {
  console.log('Generating luxury brand icons...');

  // Base 512x512 Master Badge
  // Deep charcoal background (#1A1716) with subtle rose gold border (#C99583)
  const circleSvg = Buffer.from(
    `<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="roseBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E2B8A8" />
          <stop offset="50%" stop-color="#C99583" />
          <stop offset="100%" stop-color="#78564C" />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="248" fill="#181514" stroke="url(#roseBorder)" stroke-width="14" />
    </svg>`
  );

  // Logo inner sized to fit generously inside the circle
  const logoInner = await sharp('public/logo.png')
    .trim()
    .resize(420, 420, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const masterBadge = await sharp(circleSvg)
    .composite([{ input: logoInner, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save 512x512
  fs.writeFileSync('public/icon-512.png', masterBadge);
  fs.writeFileSync('public/icon.png', masterBadge);
  fs.writeFileSync('app/icon.png', masterBadge);

  // 192x192
  const buf192 = await sharp(masterBadge).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192.png', buf192);

  // 180x180 Apple touch icon
  const buf180 = await sharp(masterBadge).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-icon.png', buf180);
  fs.writeFileSync('app/apple-icon.png', buf180);

  // Favicon sizes (16, 32, 48, 256)
  const buf16 = await sharp(masterBadge).resize(16, 16).png().toBuffer();
  const buf32 = await sharp(masterBadge).resize(32, 32).png().toBuffer();
  const buf48 = await sharp(masterBadge).resize(48, 48).png().toBuffer();
  const buf256 = await sharp(masterBadge).resize(256, 256).png().toBuffer();

  const icoBuffer = createIco([buf16, buf32, buf48, buf256], [16, 32, 48, 256]);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  console.log('Successfully generated:');
  console.log(' - app/favicon.ico (multi-res ICO: 16, 32, 48, 256)');
  console.log(' - public/favicon.ico');
  console.log(' - app/icon.png (512x512)');
  console.log(' - public/icon.png');
  console.log(' - app/apple-icon.png (180x180)');
  console.log(' - public/apple-icon.png');
  console.log(' - public/icon-192.png');
  console.log(' - public/icon-512.png');
}

generate().catch(console.error);
