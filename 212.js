const person = {
    name: 'Andriy Vasyliuk',
    email: 'andrii.v.vasyliuk@ukd.edu.ua',
    phone: '+380507168633',
}

const menu = {
    title: 'california',
    price: 70000,
    weight: '1kg',
    roll_number: 8,
    category: 'sushi',
    ingredients: ['rice', 'souce', 'sea fish']
}

const menu1 = {
    title: 'Dragon',
    price: 26400,
    weight: '0.3kg',
    roll_number: 8,
    category: 'sushi',
    ingredients: ['eel, cucumber, Philadelphia cream cheese']

}

const menu2 = {
    title: 'Salami',
    price: 20000,
    weight: '0.5kg',
    pizza_number: 1,
    category: 'pizza',
    ingredients: 'Tomato sauce, Mozzarella cheese , Olives'
}

const delivery = {
    title: 'Just Eat',
    person: person.email,
    delivery_price: 5000,
    from: 'вулиця Євгена Коновальця, 35, Івано-Франківськ, Івано-Франківська область',
    to: 'вулиця Незалежності, 40, Івано-Франківськ, Івано-Франківська область',
    status: 'new',
    error: null,
        
}

console.log(delivery, menu, menu1, menu2, person)
