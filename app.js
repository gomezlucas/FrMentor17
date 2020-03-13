eventListerners();

function eventListerners() {

    let ui = new UI()
    //navbar button
    document.querySelector('.nav__hamburguer').addEventListener('click', function () {
        ui.navbarClick()
    })
}

function UI() { };
//UI methods
UI.prototype.navbarClick = function () {
    console.log('entro')

    let value = document.querySelector('.nav__hamburguer')
    let navbar = document.querySelector('.nav__list')
    let container = document.querySelector('.container')

    if (value.classList.contains("change")) {
        console.log('contiene')
        value.classList.remove("change");
        navbar.classList.remove("nav__list--show");
        container.classList.remove("container-mobile")
    } else {
        value.classList.add("change");
        navbar.classList.add("nav__list--show");
        container.classList.add("container-mobile");
    }
}