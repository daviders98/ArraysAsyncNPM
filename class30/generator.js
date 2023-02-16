function* iterator(array){
    for(let value of array){
        yield value
    }
}

const it = iterator(['Olive','Riley','Ashley','Lloyd'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value) //returns undefined