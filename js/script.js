// get the elements
const hBtn = document.querySelector('.h-btn');
const header = document.querySelector('header');

// when you click h-btn
hBtn.addEventListener('click', () => {
    // hBtn.preventDefault()
    header.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {

    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 20,
    centerdSliders: true,
    loop: true,
    breakpoints: {
        750: {
            slidesPerView: 4,
            spaceBetween: 60,
        }
    },
});

// fade in *when you scroll
window.addEventListener('scroll', () => {
    const item = document.querySelectorAll('.item');
    for (let i = 0; i < item.length; i++) {
        let targetTop = item[i].offsetTop;

        if (window.screenY + 300 > targetTop) {
            item[i].classList.add('show');
        }
        console.log(targetTop);
        // console.log(window.scrollY);

    }
});