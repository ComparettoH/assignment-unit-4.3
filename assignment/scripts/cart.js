console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

console.log('Items in basket:', basket);

function addItem(item){
    if (basket.length < 20){
        console.log(basket.push(item), 'has been added to basket')
    return true;}
    else {
        console.log('basket is currently empty')
    return false;}
}

console.log('Want to add apple', addItem( 'Apple'))
console.log('Want to add carrot', addItem( 'Carrot'))
console.log('Want to add peas', addItem( 'Peas'))

console.log('Basket items are:', basket)

function listItems(item){
 let i = 0;
    if (item++ && item == basket && item < basket.length){
        console.log('Items in basket are:', item)
    return true;}
    else (item == false || item == undefined);{
        console.log('basket appears empty')
    return false;}
}

listItems()

function empty(basket){
if (basket >= 0){
    console.log(basket.pop(basket.indexOf), 'Has been removed.')
}   
}




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
