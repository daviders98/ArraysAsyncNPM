//mutable methods
const products = [
    {
        title:'Pizza',
        price:20
    },{
        title:'Taco',
        price:24
    },{
        title:'Salad',
        price:28
    }
]

products.push({
    title:'Hamburger',
    price:40
})
console.log(products)

products.unshift({
    title:'Apple',
    price:10
})
console.log(products)
products.pop()
console.log(products)
products.shift()
console.log(products)
console.log(products.splice(0,1))

const names = ['Zoy','Chris','Walter','Terrance']
console.log(names.sort())
console.log(names.sort((a,b)=>{
    return a.length-b.length
}))

const array = [{age:1},{age:2}]
const r = array.map(item=>{
    item.name = 'New name'
    return item
})
console.log(array)