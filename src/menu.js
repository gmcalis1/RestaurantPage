import burgerItem from './hamburger.png'
import pizzaItem from './pizza.webp'
const makeMenu = function(cnt){
    const picBurger = document.createElement('img');
    picBurger.src = burgerItem;

    const picPizza = document.createElement('img');
    picPizza.src = pizzaItem;


    cnt.appendChild(picBurger);
    cnt.appendChild(picPizza);
    
}


export default makeMenu;