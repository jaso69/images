import { navigate } from 'astro:transitions/client'
console.log('object')
const widget = document.querySelector('#upload_widget');

widget.addEventListener('clduploadwidget:success', (e) => {
  const public_id = e.detail.info.public_id;
  navigate(`/photo?id=${public_id}`);
  });