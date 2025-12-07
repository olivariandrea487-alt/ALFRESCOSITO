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
const _0x1a2b=['contextmenu','keydown','selectstart','copy','cut','dragstart','F12','KeyU','KeyI','KeyJ','KeyC','ctrlKey','metaKey','shiftKey','altKey','preventDefault'];
const _0x3c4d=function(_0x5e6f,_0x7g8h){_0x5e6f=_0x5e6f-0;let _0x9i0j=_0x1a2b[_0x5e6f];return _0x9i0j;};
const block=e=>{e[_0x3c4d('0xf')]();return false;};
document.addEventListener(_0x3c4d('0x0'),block);
document.addEventListener(_0x3c4d('0x1'),e=>{
if(e.key===_0x3c4d('0x6')||(e[_0x3c4d('0xb')]&&e[_0x3c4d('0xd')]&&[_0x3c4d('0x8'),_0x3c4d('0x9'),_0x3c4d('0xa')].includes(e.code))||(e[_0x3c4d('0xb')]&&e.code===_0x3c4d('0x7'))||(e[_0x3c4d('0xc')]&&e[_0x3c4d('0xe')]&&[_0x3c4d('0x8'),_0x3c4d('0x9'),_0x3c4d('0xa')].includes(e.code))||(e[_0x3c4d('0xc')]&&e.code===_0x3c4d('0x7'))){
block(e);
}});
document.addEventListener(_0x3c4d('0x2'),block);
document.addEventListener(_0x3c4d('0x3'),block);
document.addEventListener(_0x3c4d('0x4'),block);
document.addEventListener(_0x3c4d('0x5'),block);
setInterval(()=>{
const devtools=/./;
devtools.toString=()=>{document.body.innerHTML='';};
console.log('%c',devtools);
},1000);
})();
</script>`;

  html = html.replace('</head>', `${protectionScript}</head>`);

  writeFileSync(distPath, html, 'utf-8');
  console.log('✓ Build cleaned and protected');
} catch (error) {
  console.error('Error cleaning build:', error);
  process.exit(1);
}
