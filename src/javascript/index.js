
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElemnet = document.querySelectorAll('.hidden');

hiddenElemnet.forEach((el) => observer.observe(el));






const show_header = document.querySelector('#show_header');
const header = document.querySelector('#header');
const hied_header = document.querySelector('#hied_header');
show_header.onclick = () => {
    header.style.width = '100%';
    header.style.padding = '0 max(2vw, 2em)';
    header.style.paddingTop = 'max(0.5vw, 0.5em)';
    document.body.style.overflow = 'hidden'
};
hied_header.onclick = () => {
    header.style.removeProperty('width');
    header.style.removeProperty('padding');
    header.style.removeProperty('paddingTop');
    document.body.style.removeProperty('overflow');
};







let link = document.querySelector('.link');
let saerhDisblie = document.querySelector('.saerh-disblie');


link.onclick = () => {
    saerhDisblie.style = "opacity: 1;transition: all 0.6s ease 0s;display: block;"

    if (saerhDisblie !== "block") {
        link.onclick = () => {
            saerhDisblie.style.display = "none";
        };
    };
};