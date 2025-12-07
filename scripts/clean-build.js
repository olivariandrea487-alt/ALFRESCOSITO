import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist', 'index.html');

try {
  let html = readFileSync(distPath, 'utf-8');

  html = html.replace(/<script[^>]*bolt\.new[^>]*><\/script>/gi, '');
  html = html.replace(/<script[^>]*badge[^>]*><\/script>/gi, '');
  html = html.replace(/<link[^>]*bolt\.new[^>]*>/gi, '');

  const protectionScript = `
<script>
(function(){
document.addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('keydown',e=>{
if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&['KeyI','KeyJ','KeyC'].includes(e.code))||(e.metaKey&&e.altKey&&['KeyI','KeyJ','KeyC'].includes(e.code))){
e.preventDefault();
}});
document.addEventListener('selectstart',e=>e.preventDefault());
document.addEventListener('copy',e=>e.preventDefault());
})();
</script>`;

  html = html.replace('</head>', `${protectionScript}</head>`);

  writeFileSync(distPath, html, 'utf-8');
  console.log('✓ Build cleaned and protected');
} catch (error) {
  console.error('Error cleaning build:', error);
  process.exit(1);
}
