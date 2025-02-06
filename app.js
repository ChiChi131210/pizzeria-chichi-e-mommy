document.addEventListener('DOMContentLoaded', () => {
    // Menù e carrello
    const foodMenu = document.getElementById('foodMenu');
    const drinksMenu = document.getElementById('drinksMenu');
    const snacksMenu = document.getElementById('snacksMenu');
    const cartContainer = document.getElementById('cartContainer');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    let cart = [];

    // Pulsanti dei menù
    const foodBtn = document.getElementById('foodBtn');
    const drinksBtn = document.getElementById('drinksBtn');
    const snacksBtn = document.getElementById('snacksBtn');
    const cartBtn = document.getElementById('cartBtn');
    const clearCartBtn = document.getElementById('clearCart');
    
    // Funzione per nascondere tutti i menù
    const hideAllMenus = () => {
        foodMenu.style.display = 'none';
        drinksMenu.style.display = 'none';
        snacksMenu.style.display = 'none';
        cartContainer.style.display = 'none';
    };

    // Mostra il menù cibo
    foodBtn.addEventListener('click', () => {
        hideAllMenus();
        foodMenu.style.display = 'block';
    });

    // Mostra il menù bibite
    drinksBtn.addEventListener('click', () => {
        hideAllMenus();
        drinksMenu.style.display = 'block';
    });

    // Mostra il menù sfizi
    snacksBtn.addEventListener('click', () => {
        hideAllMenus();
        snacksMenu.style.display = 'block';
    });

    // Mostra il carrello
    cartBtn.addEventListener('click', () => {
        hideAllMenus();
        cartContainer.style.display = 'block';
        displayCart();
    });

    // Aggiungi un item al carrello
    const addToCart = (item, price) => {
        cart.push({ item, price });
        displayCart();
    };

    // Rimuovi un item dal carrello
    const removeFromCart = (index) => {
        cart.splice(index, 1);
        displayCart();
    };

    // Mostra il carrello
    const displayCart = () => {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((cartItem, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${cartItem.item} - €${cartItem.price.toFixed(2)} <button onclick="removeFromCart(${index})">Rimuovi</button>`;
            cartItems.appendChild(li);
            total += cartItem.price;
        });

        cartTotal.textContent = total.toFixed(2);
    };

    // Svuota il carrello
    clearCartBtn.addEventListener('click', () => {
        cart = [];
        displayCart();
    });

    // Aggiungi gli articoli dei menù
    document.querySelectorAll('.menuItem').forEach(item => {
        item.addEventListener('click', () => {
            const price = parseFloat(item.getAttribute('data-price'));
            const name = item.getAttribute('data-item');
            addToCart(name, price);
        });
    });

    // Inizialmente mostra il menù cibo
    foodMenu.style.display = 'block';
});
