let body = document.querySelector("body")
let topy = document.querySelector(".top")
const btn = document.querySelector(".menu");
const menu = document.querySelector(".smenu");
const valueInPixelsX = window.innerWidth;
const valueInPixelsY = window.innerHeight * 0.17;
const vh = window.innerHeight / 100;
const topValue = 4.5 * vh - 25; 
let lastscroll = 0;

function scrollControl(){
window.addEventListener('scroll', function() {

    // console.log('Scroll Y:', window.scrollY);
    if(window.scrollY > lastscroll){
        topy.style.height = `9vh`
        btn.style.transition = '1s'
        btn.style.top = `${topValue}px`;
        setTimeout(() => {
            btn.style.transition = '';
        }, 1000);
        // valueInPixelsY = window.innerHeight * 0.09 aby zmieniał kolor te po zmniejszeniu
    }
    

    lastscroll = window.scrollY
});
}

function show() {
    menu.classList.toggle("active");
    // body.style.transition = "1s"
    // body.style.marginRight = `${valueInPixelsX}px`
    body.style.cursor = "none"
    btn.textContent = "close"
    btn.style.width = "100px"
    // for (let i = valueInPixelsX - valueInPixelsX * 5 / 100; i <= x; i++) {
    //     btn.style.left
    // }
    // btn.style.zIndex = "1100"// jezeli właćzys to jeszcze będziesz w stanie wycofać menu

    document.addEventListener('mousemove', updateCursorPosition);
    function updateCursorPosition(event) {
        let x = event.clientX - 50;
        let y = event.clientY - 25;
    
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
    
        // btn.style.width = '50px' 
    
        if(y > valueInPixelsY){
            btn.style.borderColor = "#fff"
            btn.style.color = "#fff"
        } else {
            btn.style.borderColor = "#000"
            btn.style.color = "#000"
        }
    }
}
scrollControl()
btn.addEventListener("click", show);
//aby zmienić wszystko z powrotem trzbea pobrać poprzedni stan rzeczy bedzie szybciej
//naucz się onscroll animacjii
//po najechaniu na tekst zrób podkreślenie czarną kreską albo ramka zmieniająca szerokośc jeszcze bordera lub odwó®cenie tekstu w rotatex z pobranie napisu jako tablicy i dla kadej literki po 1 s odstępu
//shaking effect kreski na koniec zlatują się do sukces i za zaczyna się z forem dotwarzanie przycisków typu menu i spamienie nimi z róznych miejsc funkcja rand w left ale top 0 i deszz w dół nimi z matrixem sth
//zmniejsz troche wideo by faktycznie działało po opublikowaniu