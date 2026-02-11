import sharp from 'sharp';
import { unlink } from 'fs/promises';

// Convert JPGs to PNGs for favicon use
async function convert() {
  // Light mode 32x32
  await sharp('public/icon-light-32x32.jpg')
    .resize(32, 32)
    .png()
    .toFile('public/icon-light-32x32-new.png');
  
  // Dark mode 32x32
  await sharp('public/icon-dark-32x32.jpg')
    .resize(32, 32)
    .png()
    .toFile('public/icon-dark-32x32-new.png');
  
  // Apple icon 180x180
  await sharp('public/apple-icon.jpg')
    .resize(180, 180)
    .png()
    .toFile('public/apple-icon-new.png');

  // Remove old PNG files
  try { await unlink('public/icon-light-32x32.png'); } catch(e) {}
  try { await unlink('public/icon-dark-32x32.png'); } catch(e) {}
  try { await unlink('public/apple-icon.png'); } catch(e) {}
  
  // Rename new files
  const { rename } = await import('fs/promises');
  await rename('public/icon-light-32x32-new.png', 'public/icon-light-32x32.png');
  await rename('public/icon-dark-32x32-new.png', 'public/icon-dark-32x32.png');
  await rename('public/apple-icon-new.png', 'public/apple-icon.png');
  
  // Clean up JPGs
  await unlink('public/icon-light-32x32.jpg');
  await unlink('public/icon-dark-32x32.jpg');
  await unlink('public/apple-icon.jpg');

  console.log('Icons converted successfully!');
}

convert().catch(console.error);
