const url = "https://mock-data-api.firebaseio.com/webb21/products.json"
let total = 0

getData()

function getData(){
    fetch(url)
    .then(response => response.json())
    .then(data => {    
        renderContent (data)
    })
}

function renderContent (data){
    const plist = document.getElementById("pList")
    plist.innerHTML = ""
    data.filter(product=>{
        if (product.rating>document.getElementById("filter").value) {
            const wrapper = document.createElement("div")
            wrapper.className = "blabla"
            wrapper.innerHTML= `
            <p>${product.name}</p>
            <img src="${product.images[0].src.small}" alt="${product.images[0].alt}"></img>
            <br>
            <p class="tooltip"> Description
                <span class="tooltiptext">${product.description}</span>
            </p>
            <p>Price: ${product.price} <br> Rating: ${product.rating} <br> Stock: ${product.stock}</p>
            `
            // const productName = document.createElement("p")
            // const productImage = document.createElement("img")
            // const productInto = document.createElement("p")
            // const productDescription = document.createElement("p")
            const buyButton = document.createElement("button")
        
            // productImage.src = product.images[0].src.small
            // productImage.alt = product.images[0].alt
            // productName.innerHTML = product.name
            // productDescription.innerHTML = product.description
            // productInto.innerHTML = `Price: ${product.price} <br> Rating: ${product.rating} <br> Stock: ${product.stock}`
            buyButton.innerText = "köp"
            
            // wrapper.appendChild(productName)
            // wrapper.appendChild(productImage)
            // wrapper.appendChild(productDescription)
            // wrapper.appendChild(productInto)
            wrapper.appendChild(buyButton)
            
            plist.appendChild(wrapper)

            // productImage.addEventListener("click", () =>{
            //     totalPrice(product.price)
            //     document.getElementById("total").innerHTML = `total: ${total}`
            // })
            
            buyButton.addEventListener("click", ()=>{
                totalPrice(product.price)
                addToCart(product.name, product.price)
            })
        }
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