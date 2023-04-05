let productsBlock = document.querySelector('#product');

let htmlCatalog = '';

CATALOG.forEach(({id, product_name, author_name, img, price}) => {

    let prodNameSlice = product_name;
    let authNameSlice = author_name;
    let priceSlice = price;

    if (prodNameSlice.length > 40) prodNameSlice = prodNameSlice.slice(0, 35) + '...';
    if (authNameSlice.length > 40) authNameSlice = authNameSlice.slice(0, 38) + '...';
    if (priceSlice.length > 8) priceSlice = priceSlice.slice(0, 7) + '...₽';

    htmlCatalog = htmlCatalog + `
            <article class="card" data-id="${id}">
                <div class="card-header">
                    <div class="card-image">
                        <img src="${img}" alt="" class="card-picture">
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-product__name" title="${product_name}">${prodNameSlice}</div>
                    <div class="card-product__author-name" title="${author_name}">${authNameSlice}</div>
                    <div class="card-button__price">
                        <div class="card-price" title="${price}">${priceSlice}</div>
                        <div class="card__bookmark-basket">
                            <div class="bookmark-button" title="Добавить в отложенное">
                                <img src="images/interface/bookmark-l.png">
                            </div>
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
})

productsBlock.innerHTML = htmlCatalog;

const cardBlock = document.querySelector('.main-cards_container');

cardBlock.addEventListener('click', (event) => {
    const closestElement = event.target.closest('.card');
    console.log(closestElement.getAttribute('data-id'));
});
