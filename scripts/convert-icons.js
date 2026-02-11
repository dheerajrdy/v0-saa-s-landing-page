import sharp from 'sharp';
import { unlink, rename } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = (...p) => resolve(__dirname, '..', 'public', ...p);

// Convert JPGs to PNGs for favicon use
async function convert() {
  // Light mode 32x32
  await sharp(pub('icon-light-32x32.jpg'))
    .resize(32, 32)
    .png()
    .toFile(pub('icon-light-32x32-new.png'));
  
  // Dark mode 32x32
  await sharp(pub('icon-dark-32x32.jpg'))
    .resize(32, 32)
    .png()
    .toFile(pub('icon-dark-32x32-new.png'));
  
  // Apple icon 180x180
  await sharp(pub('apple-icon.jpg'))
    .resize(180, 180)
    .png()
    .toFile(pub('apple-icon-new.png'));

  // Remove old PNG files
  try { await unlink(pub('icon-light-32x32.png')); } catch(e) {}
  try { await unlink(pub('icon-dark-32x32.png')); } catch(e) {}
  try { await unlink(pub('apple-icon.png')); } catch(e) {}
  
  // Rename new files
  await rename(pub('icon-light-32x32-new.png'), pub('icon-light-32x32.png'));
  await rename(pub('icon-dark-32x32-new.png'), pub('icon-dark-32x32.png'));
  await rename(pub('apple-icon-new.png'), pub('apple-icon.png'));
  
  // Clean up JPGs
  await unlink(pub('icon-light-32x32.jpg'));
  await unlink(pub('icon-dark-32x32.jpg'));
  await unlink(pub('apple-icon.jpg'));

  console.log('Icons converted successfully!');
}

convert().catch(console.error);
