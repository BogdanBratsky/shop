class Products {
    render() {
        // const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, product_name, author_name, img, price }) => {

            let priceSlice = price;
            let prodAuthNameSlice = author_name;
            let prodNameSlice = product_name;

            if (priceSlice.length > 9) {
                priceSlice = priceSlice.slice(0, 9) + "...";
            };
            
            if (prodAuthNameSlice.length >= 40) {
                prodAuthNameSlice = prodAuthNameSlice.slice(0, 30) + "...";
            };

            if (prodNameSlice.length >= 40) {
                prodNameSlice = prodNameSlice.slice(0, 40) + "...";
            };

            htmlCatalog += `
                <article class="card">
                    <div class="bookmark-button" title="Добавить в закладки">
                        <img src="images/interface/bookmark.png">
                    </div>
                    <div class="card-header">
                        <div class="card-image">
                            <img src="${img}" alt="">
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="card-product__name" title="${product_name}">${prodNameSlice}</div>
                        <div class="card-product__author_name" title="${author_name}">${prodAuthNameSlice}</div>
                        <div class="card-button__price">
                            <div class="card-price" title="${price}">${priceSlice}</div>
                            <div class="basket-bookmark">
                            <a href="">
                                <div class="card-basket__button" title="Добавить в корзину">
                                    <div class="button-image">
                                        <img src="images/interface/basket-2.png" alt="">
                                    </div>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        });

        ROOT_PRODUCTS.innerHTML = htmlCatalog;
    }
}

const productPage = new Products();
productPage.render();