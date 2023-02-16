import fetch from 'node-fetch'
const API = `https://api.escuelajs.co/api/v1`

function postData(urlApi,data){
    const response = fetch(urlApi,{
        method:'post',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const data = {
    title:'New product',
    price:99999,
    description:'Product description example',
    categoryId:1,
    images:['https://placeimg.com/640/480/any']
}

postData(`${API}/products`,data)
.then(r=>r.json())
.then(data=>console.log(data))