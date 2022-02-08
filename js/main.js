'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const nav = document.querySelector('nav');
  const mask = document.querySelector('.mask');

  open.addEventListener('click', ()=>{
    nav.classList.add('show');
    mask.classList.add('show');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });

  close.addEventListener('click', ()=>{
    nav.classList.remove('show');
    mask.classList.remove('show');
    open.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });
}