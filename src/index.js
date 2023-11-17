import container from './home';

const body = document.querySelector('#content');
document.querySelector('html').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0; overflow: hidden';
document.querySelector('body').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0';
body.style.cssText = 'height: 100%; width: 100%;'
const header = document.createElement('header');
header.style.cssText = 'font-size: 10rem; text-align: center; padding: 0; margin: 0;'
header.innerHTML = '<h1 style="padding: 0; margin: 0;">The Grand Taormina</h1><ul style="padding: 0; margin: 0; list-style: none; display: flex; gap: 10vw; justify-content: center;"><li>Home</li><li>Menu</li><li>Contact</li></ul>';
body.appendChild(header);
body.append(container());