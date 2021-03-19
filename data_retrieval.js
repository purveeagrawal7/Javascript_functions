let fruits = [
    {
        name: "apple",
        color: "Red",
        pricePerKg: "100",
    },
    {
        name: "Mango",
        color: "Yellow",
        pricePerKg: "120",
    },
    {
        name: "Gauva",
        color: "Green",
        pricePerKg: "60",
    },
    {
        name: "Pineapple",
        color: "yellow",
        pricePerKg: "90",
    },
];
function convertToRequiredFormat(fruits) {
    let newObj = {};
    fruits.forEach((fruit) => {
        newObj[fruit.name] = fruit;
    });
    console.log(newObj);
    return newObj;
}
function getColorAndPrice(fruitName) {
    let temp = convertToRequiredFormat(fruits);
    return (`The colour of ${fruitName} is ${temp[fruitName].color} and the price per Kg is ${temp[fruitName].pricePerKg}`);
}

getColorAndPrice("apple");
