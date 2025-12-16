import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distPath, 'utf-8');

  html = html.replace(/<script[^>]*bolt\.new[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*badge[^>]*><\/script>/gi, '');
  html = html.replace(/<link[^>]*bolt\.new[^>]*>/gi, '');

  writeFileSync(distPath, html, 'utf-8');
  console.log('✓ Build cleaned and protected');
} catch (error) {
  console.error('Error cleaning build:', error);
  process.exit(1);
}
