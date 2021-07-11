const main_container = document.getElementById("main_container");

function frontButton(){
    main_container.classList.toggle("active");
}

function rightButton(){
    main_container.classList.toggle("rightImg");
}

function backButton(){
    main_container.classList.toggle("backImg");
}

function leftButton(){
    main_container.classList.toggle("leftImg");
}

function topButton(){
    main_container.classList.toggle("topImg");
}
