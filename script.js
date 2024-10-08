let body = document.querySelector("body")
let topy = document.querySelector(".top")
let title = document.querySelector(".title")
const btn = document.querySelector(".menu");
const menu = document.querySelector(".smenu");
let lines = document.querySelector(".lines")
let secondPage = document.querySelector(".plan")
const widthPx = window.innerWidth;
let heightPx = window.innerHeight * 0.17;
const vh = window.innerHeight / 100;
const topValue = 4.5 * vh - 25; 
let lastscroll = 0;
let z = 0;
let isCircle = true;
let endCircle = true;
let isRoll = false;
let over = true;

title.addEventListener('mouseover', function(){
    if(over){
    body.style.overflow = "hidden"
    title.style.animation = "reel 5s"
    title.style.zIndex = "2000"
    let titles = []
    for (let i = 0; i < 10; i++) {
        titles[i] = title.cloneNode(true)
        titles[i].style.animation = "reels 6s"
        titles[i].style.float = "left"
        topy.appendChild(titles[i])
    }

    setTimeout(() => {
        //czyszczenie po
        body.style.overflow = "auto"
        title.style.animation = ""
        title.xIndex = ""

        titles.forEach(element => {
            element.remove();
        });
    }, 5000);
        over = false
    }
});
function scrollControl(){
window.addEventListener('scroll', function() {

    // console.log('Scroll Y:', window.scrollY);
    if(window.scrollY > lastscroll){
        isRoll = true
        topy.style.height = `9vh`
        btn.style.transition = '1s'
        btn.style.top = `${topValue}px`;
        title.style.top = `${4.5 * vh - 9}px`
        setTimeout(() => {
            btn.style.transition = '';
        }, 1000);
        // menuChange(heightPx = window.innerHeight * 0.09)
        heightPx = window.innerHeight * 0.09 //aby zmieniał kolor te po zmniejszeniu
    }//wielkie napist sekcji Timer
    //option

    if(window.scrollY > 50 && isCircle){
    lines.style.width = `${window.scrollY / 10}%`
    z += 0.008;
    lines.style.opacity = z;
    }
    if(window.scrollY >= 600 && endCircle){
        isCircle = false;
        endCircle = false;
        window.scrollTo(0, document.body.scrollHeight)
        secondPage.style.opacity = '1'
        lines.style.transition = "1s"
        lines.style.bottom = '0vh'
        lines.style.left = 'calc(50% - 25px)'
        lines.style.width = '50px'
        lines.style.height = '50px'
        setTimeout(() => {
        lines.style.borderRadius = '50%'
        }, 1000);
        lines.style.opacity = '1'
        lines.style.animation = 'circle 4s'
        setTimeout(() => {
            lines.style.animation = ""

            let option = lines.cloneNode(true)
            let option1 = lines.cloneNode(true)
            let option2 = lines.cloneNode(true)

            secondPage.appendChild(option)
            secondPage.appendChild(option1)
            secondPage.appendChild(option2)
            secondPage.removeChild(lines)

            option.style.animation = 'creation 4s'
            option1.style.animation = 'creation1 4s'
            option2.style.animation = 'creation2 4s'

            setTimeout(() => {
                option.style = ""
                option1.style = ""
                option2.style = ""
                option.className = 'option'
                option1.className = 'option'
                option2.className = 'option'
                secondPage.style.opacity = '0.85' //opacity tego przycisku
                option.innerHTML = '<p>est. 2024™ •</p>'
                option1.textContent = 'CELESTE ✨'
                option2.innerHTML = '¶F<a style="color:#c991e5;">I</a><a style="color:#91d1e5;">F</a><a style="color:#9198e5;">I</a> WALKER •';
                option1.addEventListener('mouseover', function(){
                    let stars = [];
                    for (let i = 0; i < 50; i++) {
                        let star = document.createElement('div');
                        star.classList.add('star');
                        star.textContent = '✨';
                        
                        let randomX = Math.random() * window.innerWidth;
                        let randomY = Math.random() * window.innerHeight;
                
                        star.style.left = `${randomX}px`;
                        star.style.top = `${randomY}px`;
                        star.style.transition =  `transform ${Math.random() * 5}s ease-in, opacity 5s ease-in`

                        document.body.appendChild(star);
                        stars.push(star);
                
                        setTimeout(() => {
                            star.style.transform = `translateY(${window.innerHeight - randomY}px) rotate(${Math.random() * 720 - 360}deg)`;
                            star.style.opacity = '0';
                        }, 200);
                    }
                
                    
                    setTimeout(() => {
                        stars.forEach(star => {
                            star.remove();
                        });
                    }, 5000);
                });
            }, 4000);

        }, 4000);
    }

    lastscroll = window.scrollY

});
}
// kulkapo zleceniu się duplikuje w miejscu i odlatuje do odpowiednich środków aby zamienić się później w odpowiednie klasy
function updateCursorPosition(event) {
    let x = event.clientX - 50;
    let y = event.clientY - 25;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    if(y > heightPx){
        btn.style.borderColor = "#fff"
        btn.style.color = "#fff"
    } else {
        btn.style.borderColor = "#000"
        btn.style.color = "#000"
    }
    // btn.style.width = '50px' 
}
function show() {
    menu.classList.toggle("active")
    if(menu.classList.contains("active")){
        body.style.transition = "1s"
        body.style.marginRight = `100%`
        // topy.style.right = '100%'
        topy.style.right = '0'
        body.style.overflow = "hidden"
        body.style.cursor = "default"
        btn.className = "nmenu"
        // btn.style.pointerEvents = 'none' brak hover klikniec i wszystkiego
        //poco wsyzstko pisac od nowa jak mozna zapisa stary stan za pomocą zmieniania klas np
        btn.textContent = "close"
        menu.innerHTML = '<div class="moption">TIMER</div><div class="moption1">OPTIONS</div>'
        
        document.addEventListener('mousemove', updateCursorPosition);
        // for (let i = widthPx - widthPx * 5 / 100; i <= x; i++) {
        //     btn.style.left
        // }
        // btn.style.zIndex = "1100"// jezeli właćzys to jeszcze będziesz w stanie wycofać menu
    }else{
        body.style.transition = "1s"
        body.style.marginRight = `0`
        topy.style.right = '0'
        body.style.overflow = "auto"
        btn.className = "menu" // Zmieniamy klasę z powrotem na "menu"
        btn.textContent = "menu"
        btn.removeAttribute("style");
        if(isRoll){
        btn.style.transition = '1s'
        btn.style.top = `${topValue}px`;
        setTimeout(() => {
            btn.style.transition = '';
        }, 1000);
        }
        document.removeEventListener('mousemove', updateCursorPosition);
    }
}
scrollControl()
btn.addEventListener("click", show);
