const shoppingList = [
    {
        product: "apple",
        amount: 10,
        bought: true,
        price: 5,
        summ: 50,
    },
    {
        product: "cheese",
        amount: 4,
        bought: true,
        price: 10,
        summ: 40,
    },
    {
        product: "water",
        amount: 100,
        bought: false,
        price: 1,
        summ: 0,
    },{
        product: "wine",
        amount: 10,
        bought: true,
        price: 40,
        summ: 400,
    },
    {
        product: "pineaple",
        amount: 3,
        bought: false,
        price: 30,
        summ: 0,
    },
];

shoppingList.sort(function(x, y ) {
    return (x.bought === y.bought)? 0 : x? 1 : -1;
});
console.log(shoppingList);




