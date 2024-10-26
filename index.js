fetch('https://dummyjson.com/products/category/smartphones')
    .then(res => res.json())
    .then(data => {
        var productsContainer = document.getElementById('products');
        data.products.forEach(product => {
            var productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <img src="${product.images[0]}"style="width: 100px;">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            `;
            productsContainer.appendChild(productDiv);
        });
    })
 