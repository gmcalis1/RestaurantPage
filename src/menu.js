import burgerPicture from './hamburger.png'
import pizzaPicture from './pizza.webp'
const makeMenu = function(cnt){
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerDiv')

    const header = document.createElement('h1');
    header.textContent = 'Tasty food that will kill your cravings!';

    headerDiv.appendChild(header);

    const foodContent = document.createElement('div');

    const burgerItem = document.createElement('div');
    const burgerDescription = document.createElement('p');
    burgerDescription.textContent = 'Freshly grilled patties with any toppings you want! $4.99'
    burgerItem.appendChild(burgerDescription)

    const picBurger = document.createElement('img');
    picBurger.src = burgerPicture;
    burgerItem.appendChild(picBurger);

    foodContent.appendChild(burgerItem)


    const pizzaItem = document.createElement('div');
    const pizzaDescription = document.createElement('p');
    pizzaDescription.textContent = 'Chewy crust, stringy cheese, and any toppings you want! $5.99'
    pizzaItem.appendChild(pizzaDescription);

    const picPizza = document.createElement('img');
    picPizza.src = pizzaPicture;
    pizzaItem.appendChild(picPizza);

    foodContent.appendChild(pizzaItem);

    cnt.appendChild(headerDiv);
    cnt.appendChild(foodContent);
}


export default makeMenu;