import makeHome from './home.js'
import makeMenu from './menu.js'
import makeContact from './contact.js'

//main body div of page
const cnt = document.getElementById('content');

//header creator with 3 buttons for different pages


//creates header with buttons
const headerMaker = function(){
    const header = document.createElement('div');
    header.classList.add('header');


    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home'
    homeButton.addEventListener('click',function(){
        changePage(0);
    });
    header.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click',function(){
        changePage(1);
    })
    header.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact'
    contactButton.addEventListener('click', function(){
        changePage(2);
    })
    header.appendChild(contactButton);
    cnt.appendChild(header);
}

const changePage = function(destination){
    //keeps track of currently loaded page, 0 is home, 1 is menu, 2 is contact
    let currentPage = 0;
    if(destination == currentPage){
        return
    }
    else if(destination == 0){
        clearPage();
        headerMaker(0);
        makeHome(cnt);
        currentPage = 0;
        return;
    }
    else if(destination == 1){
        clearPage();
        headerMaker(1);
        makeMenu(cnt);
        currentPage = 1
        return;
    }
    else{
        clearPage();
        headerMaker(2);
        makeContact(cnt);
        currentPage = 2;
        return;
    }
}
const clearPage = function(){
    while(cnt.childElementCount > 0){
        cnt.removeChild(cnt.firstChild);
    }
}

headerMaker(0);
makeHome(cnt);



//things to do:
//install css loader
//finish menu and contact javascripts and link them to index