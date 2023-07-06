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

console.log('basket length is', basket.length)

function listItems(){
for (let i=0; i < basket.length; i++){
    console.log('Items in basket are:', basket[i])
}
}

console.log('Items in basket are:', listItems());

// function empty(basket){
//     for (let i=0; i < 20; i++){
//         if (basket[i] >= 0){
//     console.log(basket.pop(item), 'Has been removed.')}
//     else {console.log('basket already empty')} 
//     }}

// empty()
// console.log('Items in basket are:', basket)



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
