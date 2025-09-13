function init() {
    const sections = document.querySelectorAll(".section")
    const body = document.querySelector("body")
    const aboutMe = document.querySelector('#about-me')

    let color = ''

    const observer = new IntersectionObserver((entries) => {
        /* i saw this youtube video to learn it https://www.youtube.com/watch?v=Jo8ABAJtMM0 
        and i read the docs for more info */

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry)
                entry.target.classList.add('show')
                if (color !== '')
                    body.classList.remove(color)
                color = entry.target.attributes[2].value
                body.classList.add(color)
            } else {
                entry.target.classList.remove('show')
            }
        }, { threshold: 0.7 })
    })
    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", () => { // i tried to do this with the intersection observer but it wasnt working how i want it to
        // so i looked up another way to observe the scroll and i found this in the docs, and watched this video https://www.youtube.com/watch?v=V9CY0F4Wc7M        
        
        if (window.scrollY > 320) { // 300 makes it not responsive
            aboutMe.style.width = "35vw";
        } else {
            aboutMe.style.width = "100%";
        }
    });

}

document.addEventListener('DOMContentLoaded', init)