const url = "https://mock-data-api.firebaseio.com/webb21/products.json"
let total = 0
filterByRating()

function filterByRating(){
    const plist = document.getElementById("filteredList")
    plist.innerHTML = ""

    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.filter(product=>{
            if (product.rating>document.getElementById("rating").value) {
                const div = document.createElement("div")
                const productName = document.createElement("p")
                const productImage = document.createElement("img")
                const productInto = document.createElement("p")
                const buyButton = document.createElement("button")
            
                productImage.src = product.images[0].src.small
                productImage.alt = product.images[0].alt
                productName.innerHTML = product.name
                productInto.innerHTML = `${product.description} <br> Price: ${product.price} <br> Rating: ${product.rating} <br> Stock: ${product.stock}`
                buyButton.innerText = "köp"
                
                div.appendChild(productName)
                div.appendChild(productImage)
                div.appendChild(productInto)
                div.appendChild(buyButton)
                plist.appendChild(div)

                // productImage.addEventListener("click", item =>{
                //     totalPrice(product.price)
                //     document.getElementById("total").innerHTML = `total: ${total}`
                // })
        
                buyButton.addEventListener("click", ()=>{
                    totalPrice(product.price)
                    addToCart(product.name, product.price)
                })
            }
        })
    })
}

function totalPrice(price){
    console.log("Clicked");
    total += price
    document.getElementById("total").innerHTML= `total: ${total}`
}

function addToCart(name, price) {
    const parent = document.getElementById("cart")
    const child = document.createElement("p")
    child.innerHTML = `${name}: ${price}`
    parent.appendChild(child)   
}