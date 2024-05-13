const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtnc = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


let cart = [];


//Abrir o modal do carrinho
cartBtn.addEventListener("click", function () {
    updateCartModal();
    cartModal.style.display = "flex"
})

//fechar o modal quando clicar fora
cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function () {
    cartModal.style.display = "none"
})

menu.addEventListener("click", function (event) {
    //console.log(event.target)

    let parentButton = event.target.closest(".add-to-cart-btn")

    if (parentButton) {

        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

        //adicionar no carrinho

        addToCart(name, price)

    }
})

//Funcao para adicionar no carrinho

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name)

    if (existingItem) {
        //se o item ja existe aumenta a quantidade apenas +1
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            quantity: 1,
        })


    }

    updateCartModal();


}

//atualiza carrihnho
function updateCartModal() {

    cartItemsContainer.innerHTML = "";
    let total = 0;


    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.innerHTML = ` 
        <div>
            <div>
            <p>${item.name}</p>
            <p>${item.quantity}</p>
            <p>R$ ${item.price}</p>
            </div>

            <div>
            <button>
                Remover
            </button>
            </div>

        </div>
        `


        cartItemsContainer.appendChild(cartItemElement)


    })


}
