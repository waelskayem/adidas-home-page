const createNav = () => {

    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class ="nav"> 

        <img src="img/adidas-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search...">
                    <button class="search-btn"> search </button>

                </div>
                        <a href="#"><img src="img/user.png" alt=""> </></a>
                        <a href="#"><img src="img/cart.png" alt=""> </></a>
            </div>
        </div>
        <ul class="links-container">
                <li class="link-item"><a href="#" class="link"> Home </a></li>
                <li class="link-item"><a href="#" class="link"> Women </a></li>
                <li class="link-item"><a href="#" class="link"> Men </a></li>
                <li class="link-item"><a href="#" class="link"> Kids </a></li>
                <li class="link-item"><a href="#" class="link"> Accessories </a></li>
            </ul>

    `;
}

createNav();