function init() {
    const sections = document.querySelectorAll(".section")
    console.log(sections)
    const colors = ['#F296BD', '#FCCA59', '#99B7F5', '#267F53']

    const observer = new IntersectionObserver((entries)=> {
        console.log(entries)
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        }, { threshold: 0.7})

    })

    sections.forEach(section => observer.observe(section));
}
/* i saw this youtube video to learn it https://www.youtube.com/watch?v=Jo8ABAJtMM0 
and i read the docs for more info */
document.addEventListener('DOMContentLoaded', init)