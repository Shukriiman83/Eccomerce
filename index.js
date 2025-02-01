
let productsData=[]

const data=fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    productsData=json;
    displayProducts()
});

function displayProducts(){

  const select=document.querySelector('input')
  select.addEventListener('input',function(e){
const userInput=e.target.value;
const filteredData=productsData.filter((item)=>item.title.toLowerCase().includes(userInput))
console.log(filteredData)
  })
    const container=document.getElementById('productContainer');
    productsData.map((product)=>{
        const productElement=document.createElement('div')
        productElement.classList.add('p-6', 'bg-white', 'rounded-lg', 'shadow-lg', 'max-w-xs', 'mx-auto');

      //1 img
      const imgdiv = document.createElement('div')
      imgdiv.classList.add('p-2','h-auto', 'bg-white', 'rounded-lg', 'shadow-lg')
      const img=document.createElement('img')
      img.src=product.image
      img.classList.add('w-full', 'h-40', 'object-contain', 'rounded-md', 'shadow-md')
    imgdiv.appendChild(img)
      productElement.appendChild(imgdiv)

      //2 title
      const title=document.createElement('h2')
      title.classList.add('text-xl', 'font-semibold' ,'text-gray-600', "mt-4")
      title.textContent=product.title
      productElement.appendChild(title)
//3 price
const price=document.createElement('p')
price.textContent=product.price
price.classList.add("text-lg","font-bold", "text-gray-900", "mt-2")
productElement.appendChild(price)
//4 btn
const btn=document.createElement('button')
btn.textContent='Add to cart '
btn.classList.add("bg-blue-500", "text-white", "py-2", "px-4", "rounded-md", "mt-4", "hover:bg-blue-600", "focus:outline-none", "focus:ring-2", "focus:ring-blue-300")
productElement.appendChild(btn)
container.appendChild(productElement)
    })
}

