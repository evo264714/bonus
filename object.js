const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Movie Cinema',
    isSingle: true,
    friends: ['Tamim', 'Rubel', 'Tinku'],
    movies: [{name:'num1', year: 2012},{name: 'num2', year: 2015}],
    act: function (){
        console.log('Actor');
    },
    car: {
        brand: 'tesla',
        price: 500000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }
}

// console.log(student);
console.log(nayok.act);
nayok.act();