const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = number[i];
//     console.log(number);
// }

for (const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'Walton', price: 19000},
    {id: 2, name: 'Xiaomi', price: 29000},
    {id: 3, name: 'iPhone phone', price: 39000},
    {id: 4, name: 'Lenovo', price: 49000},
    {id: 5, name: 'Dell', price: 19600},
    {id: 6, name: 'Samsung phone', price: 79000},
    {id: 7, name: 'Nokia Phone', price: 69000},
    {id: 8, name: 'Apple', price: 79000},
];

// for (const product of products){
//     console.log(product)
// }

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
    }
}
return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);