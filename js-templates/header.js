const header = `
    <div class="container">
        <nav class="header-nav">
            <div class="logo-search-block">
                <div class="header-logo">
                    <div href="" class="header-logo__text"><a href="">BOOKS</a></div>
                </div>
                <form action="">
                    <div class="search-form">
                        <input class="search-form__txt" type="text" placeholder="Поиск" title="Искать">
                        <button class="search-form__btn"><img src="images/interface/search.png" alt="" title="Найти"></button>
                    </div>
                </form>
            </div>
            <div class="header__user-navigation">
                <a href="">
                    <div class="header-basket" title="Корзина">
                        <img src="images/interface/basket.png" alt="">
                    </div>
                </a>
                <a href="">
                    <div class="header__login" title="Войти">
                        <!-- <span>Войти</span> -->
                        <img src="images/interface/user4.png" alt="">
                    </div>
                </a>
            </div>
        </nav>
    </div>
`;

const headerBlock = document.querySelector('.header');
headerBlock.innerHTML = header;