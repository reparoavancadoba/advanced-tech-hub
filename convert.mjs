import sharp from 'sharp';
sharp('public/images/fachada.jpg')
  .webp({ quality: 80 })
  .toFile('public/images/fachada.webp')
  .then(() => console.log('Convertido para webp'))
  .catch(console.error);
