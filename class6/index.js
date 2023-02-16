const orders = [
    {
        customerName: 'Nicole',
        total:60,
        delivered:true
    },{
        customerName:'Monica',
        total:100,
        delivered:false
    },{
        customerName:'Matthew',
        total:56,
        delivered:true,
    },
    {
        customerName:'Dan',
        total:40,
        delivered:true
    }
]
console.log('ORIGINAL',orders)
const newA = orders.map((item)=>{
    return item.total
})
console.log('NEW',newA)

const newB = orders.map(item=>{
    return {
        ...item,
        tax:.19
    }
})
console.log('B ARRAY',newB)
console.log('Original Array',orders)

const numbers = [10,40,60,29,58]

console.log(numbers.filter(n=>n%10==0))

console.log(numbers.reduce((acc,val)=>{
    acc*=val
    return acc
},1)) //Multiply all elements in the array.

console.log(numbers.some(n=>n>400))
console.log(numbers.some(n=>n>9))

console.log(numbers.every(n=>n>9))

console.log(orders.find(l=>l.customerName=='Dan'))
console.log(orders.findIndex(l=>l.customerName=='Dan'))
console.log(numbers.includes(10))
console.log(numbers.join(','))

const moreNums = [50,70,80]
console.log(numbers.concat(moreNums))

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],10
]
console.log(matrix.flat(3))

console.log(matrix.flatMap((e)=>{
    return [e,1000]
}))