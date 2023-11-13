import Icon from './FreddysBand.webp';


const makeHome = function(cnt){
    const header = document.createElement('h1');
    header.textContent = 'Welcome to Freddy Fazbear\'s Pizzeria!'

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This fine establishment has the best pizza, entertainment, and animatronics in the world!'
    const pic = document.createElement('img');
    pic.src = Icon;

    cnt.appendChild(header);
    cnt.appendChild(paragraph)
    cnt.appendChild(pic);
}

export default makeHome;