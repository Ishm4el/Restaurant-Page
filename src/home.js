import italianK from './italian.jpg';
function buildHome() {
    const container = document.createElement('div');
    container.style.cssText = 'width: 100%; height: 100%; overflow: hidden; position: relative; display: inline-block;'
    const myImage = new Image();
    myImage.src = italianK;
    myImage.style.cssText = 'width: 100%; overflow: hidden; object-fit: scale; position: absolute; top: 0; bottom: 0; z-index: -1; ';

    container.appendChild(myImage);

    const headline = document.createElement('p');
    headline.style.cssText = 'font-size: 3rem; text-align: center; background-color: white; padding: 2vh 2vw';
    
    const spanTop = document.createElement('h1');
    const spanBot = document.createElement('span');
    spanTop.innerText = "The Grand Taormina\n";
    spanBot.innerText = 'Welcome to our wonderful resteraunt homepage!\nOur business has been runngin for over 100 years, and we have been making beloved food for as long as we can remember';
    headline.append(spanTop, spanBot);
    // headline.appendChild(spanTop);
    // headline.appendChild(spanBot);
    container.appendChild(headline);

    return container;
}


export default buildHome;