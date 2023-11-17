import container from './home';

const headStyler = document.createElement('style');
headStyler.innerHTML = `
    a {
        text-decoration: none;
        color: darkred;
        pointer-events: auto;
    }
    
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;
document.getElementsByTagName('head')[0].appendChild(headStyler);

const body = document.querySelector('#content');
document.querySelector('html').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0; overflow: hidden';
document.querySelector('body').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0';
body.style.cssText = 'height: 100%; width: 100%;'
const header = document.createElement('header');
header.style.cssText = 'font-size: 10rem; text-align: center; padding: 0; margin: 0;'
header.innerHTML = '<h1 style="padding: 0; margin: 0;">The Grand Taormina</h1><ul style="padding: 0; margin: 0; list-style: none; display: flex; gap: 10vw; justify-content: center;"><li><a>Home</a></li><li><a>Menu</a></li><li><a>Contact</a></li></ul>';
body.appendChild(header);
const adjustA = document.querySelectorAll('a');
adjustA.forEach((element, num) => {
    switch(num) {
        case 0:
            element.addEventListener('click', () => {
                body.removeChild(body.lastChild);
                body.appendChild(container());
            });
            break;
        case 1:
            element.onclick = () => {
                // body.removeChild(body.lastChild);
            };
            break;
        case 2:
            element.addEventListener('click', () => {
                console.log("in three!");
            })
    }
});


body.appendChild(container());