const nav = document.querySelector('nav')
const header = document.getElementById('header')
const logo = document.getElementById('logo')

const navObserver = new IntersectionObserver((entries, observer) => {
    const entry = entries[0]

    if(!entry.isIntersecting) {
        nav.classList.add('on-scroll')
        logo.src = "./assets/images/logo.png"

        for (const element of document.getElementsByClassName('link')) {
            element.style.color = 'var(--bootstrap-bg-black)';
        }
    }

    else {
        nav.classList.remove('on-scroll')
        logo.src = "./assets/images/logo-reversed.png"
    }

}, {rootMargin: "-100px 0px"})

navObserver.observe(header)