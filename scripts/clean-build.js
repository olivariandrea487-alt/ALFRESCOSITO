import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distPath, 'utf-8');

  // Remove bolt.new script tags
  html = html.replace(/<script[^>]*bolt\.new[^>]*><\/script>/gi, '');

  writeFileSync(distPath, html, 'utf-8');
  console.log('✓ Badge script removed from build');
} catch (error) {
  console.error('Error cleaning build:', error);
  process.exit(1);
}
