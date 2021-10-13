let total = 0

const url = "https://mock-data-api.firebaseio.com/webb21/products.json"
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
        const img = document.createElement("img")
        const p = document.createElement("p")
        img.src = product.images[0].src.small
        img.alt = product.images[0].alt
        productName.innerHTML = product.name
        p.innerHTML = `${product.description} <br> Price: ${product.price} <br> Rating: ${product.rating} <br> Stock: ${product.stock}`

        div.appendChild(productName)
        div.appendChild(img)
        div.appendChild(p)
        document.body.appendChild(div)

        img.addEventListener("click", item =>{
            console.log("clicked");
            console.log(item);
            addToCart(product)
            const totalPrice = document.getElementById("total").innerHTML = `total: ${total}`
        })
    })
}
function addToCart(item) {
    total += item.price
    console.log(total);
}
