const url = "https://mock-data-api.firebaseio.com/webb21/products.json"
let total = 0

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    renderdata (data)
})

function renderdata(products) {
 
    products.forEach(product => {
        const div = document.createElement("div")
        const productName = document.createElement("p")
        const productImage = document.createElement("img")
        const productPrice = document.createElement("p")
        const productRating = document.createElement("p")
        const productStock = document.createElement("p")
        const productDescription = document.createElement("p")
        const buyButton = document.createElement("button")

        productImage.src = product.images[0].src.small
        productImage.alt = product.images[0].alt
        productName.innerHTML = product.name
        productDescription.innerHTML = product.description
        productPrice.innerHTML = `Price: ${product.price} `
        productRating.innerHTML = `Rating: ${product.rating}`
        productStock.innerHTML = `Stock: ${product.stock}`
        buyButton.innerText = "köp"
        
        div.appendChild(productName)
        div.appendChild(productImage)
        div.appendChild(productDescription)
        div.appendChild(productPrice)
        div.appendChild(productRating)
        div.appendChild(productStock)
        div.appendChild(buyButton)
        document.body.appendChild(div)

        buyButton.addEventListener("click", ()=>{
            totalPrice(product.price)
            addToCart(product.name, product.price)
        })
    })
}


function totalPrice(price){
    console.log("clicked");
    total += price
    document.getElementById("total").innerHTML= `total: ${total}`
}

function addToCart(name, price) {
    const parent = document.getElementById("cart")
    const child = document.createElement("p")
    child.innerHTML = `${name}: ${price}`
    parent.appendChild(child)   
}