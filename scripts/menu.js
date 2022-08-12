

// //call calSubtotal() every time click add to cart button
// let btns = document.getElementsByClassName('cart-button');
// for (let i = 0; i < btns.length; i ++){
//     let button = btns[i];
//     button.onclick = CalSubtotal;
// }

/**
 * calculate the total price for all the food(before tax)
 *  
 */
function CalTotalOrdered(){
    //get food names to array foodNames
    let foodElements = document.getElementsByClassName('card-title');
    var foodNames = [];
    for(let i = 0; i < foodElements.length; i ++){
        foodNames[i] = foodElements[i].innerHTML;
    }

    //get food price to array prices
    let priceElements = document.getElementsByClassName('price');
    var prices = [];
    for(let i = 0; i < priceElements.length; i ++){
        prices[i] = priceElements[i].textContent.slice(1);
    }

    //get quantity input elements to array quantities
    var quantities = document.getElementsByName('quantity');

    let totalOrdered = 0 ;
    let orderArray = [];

    for(let i = 0; i < foodElements.length; i++){
        let ItemQuantity = quantities[i].value
        if(ItemQuantity!= 0){
            let orderRecord = {
                name: foodNames[i],
                price: prices[i],
                quantity: ItemQuantity,
                subtotal: (prices[i] * ItemQuantity).toFixed(2)
            }
            totalOrdered = Number(totalOrdered) + Number(orderRecord.subtotal);
            orderArray.push(orderRecord);
        }
    }

    const orderDetails = JSON.stringify(orderArray);
    localStorage.setItem('orderArrayJSON',orderDetails); 

    localStorage.setItem('totalOrdered',totalOrdered.toFixed(2));

}

