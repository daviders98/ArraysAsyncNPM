// fetch

import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi)
}

fetchData(`${API}/products`)
    .then(r=>r.json())
    .then((response)=>{
        return fetchData(`${API}/products/${response[response.length-1].id}`)
    })
    .then(r=>r.json())
    .then((product)=>{
        console.log(product)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(r=>r.json())
    .then(category=>console.log(category))
    .catch(e=>{console.error(e)})

