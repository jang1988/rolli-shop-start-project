// Div внутри корзины в которой мы добавляем товары
const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (event) {
  // Проверяе что клик был совершен по корзине
  if (event.target.hasAttribute("data-cart")) {
    // Находим карточку товара по которой былклик
    const card = event.target.closest(".card");

    // Собираем данные с этого товара и записываем их в единый обьект productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    // Собранные данные поставим в шаблон для товара в корзине
    const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
                            <div class="cart-item__top">
                              <div class="cart-item__img">
                                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                              </div>
                              <div class="cart-item__desc">
                                <div class="cart-item__title">${productInfo.title}</div>
                                <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

                                <!-- cart-item__details -->
                                <div class="cart-item__details">

                                  <div class="items items--small counter-wrapper">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                    <div class="items__control" data-action="plus">+</div>
                                  </div>

                                  <div class="price">
                                    <div class="price__currency">${productInfo.price}</div>
                                  </div>

                                </div>
                                <!-- // cart-item__details -->

                              </div>
                            </div>
                          </div>`;

    // Отобразим товар в корзине
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
  }
});