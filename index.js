let header = $("header")[0];
let lastScroll = 0

$(document).scroll(function(){
    let scrollLevel = $(document).scrollTop();
    if (scrollLevel > lastScroll) {
        $(header).removeClass("visible");
    }
    else {
        $(header).addClass("visible");
    }
    lastScroll = scrollLevel;
})

let logo = document.getElementById("logo")
logo.onclick = function () {
    alert("Сейчас вас перебросит на сайт oxycloud. Нажмите скачать. После скачивания переместите файл в инжектор и запустите. Приятной игры!")
}
// function myFunction(elem) {
//     elem.style.color = "black"
//     elem.style.fontSize = "48px"
//     elem.style.fontFamily = "sans-serif, cursive"
// }
// let titles = document.querySelectorAll("h2")
// titles.forEach(element => {
//     myFunction(element)
// })

document.body.addEventListener("keydown", function (event) {
    if(event.key != "t") {
        return
    }
    if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme")
    }
    else {
        document.body.classList.add("dark-theme")
    }
})