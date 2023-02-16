//Promises
const promise = new Promise((resolve,reject)=>{
    resolve('Response')
})

const cows = 15

const countCows = new Promise((resolve,reject)=>{
    if(cows>10){
        resolve(`We have ${cows} cows.`)
    }else{
        reject("There's not enough cows")
    }
})

countCows.then((result)=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally(()=>{
    console.log('Finally')
})