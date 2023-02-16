//async await
const asyncFunction = ()=>{
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(()=>{
            resolve('Solved async response')
        },2000) : reject(new Error('Error in async fn'))
    })
}

const anotherFunction = async()=>{
    const getResponse = await asyncFunction()
    console.log(getResponse)
    console.log('After response')
}

console.log('Before async')
anotherFunction()
console.log('After async')

//generator
function* gen(){
    yield 1
    yield 2
    yield 3
}

const g = gen()
console.log(g.next().value)
console.log(g.next().value)