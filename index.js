
let productsData=[]

const data=fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    productsData=json;
    displayProducts()
});

function displayProducts(){
    const container=document.getElementById('productContainer');
    productsData.map((product)=>{
        const productElement=document.createElement('div')
        productElement.className='productElement';

        // ku gur datada inside the element
productElement.innerHTML=`
<img src=${product.image} alt=${product.title}

<h2 class='title'>${product.title}</h2>
<p class='price'>${product.price}</p>
<button class='addCart'>Add to cart </button>
`

container.appendChild(productElement)
    })
}

