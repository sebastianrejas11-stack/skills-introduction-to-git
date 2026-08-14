Promise.all([
  'game.part1.txt','game.part2.txt','game.part3.txt','game.part4.txt'
].map(f=>fetch(f).then(r=>{
  if(!r.ok) throw new Error(`No se pudo cargar ${f}`);
  return r.text();
}))).then(parts=>{
  (0,eval)(parts.join(''));
}).catch(err=>{
  console.error(err);
  const el=document.getElementById('menuStatus');
  if(el) el.textContent='Error al cargar el motor del juego. Recarga la página.';
});
