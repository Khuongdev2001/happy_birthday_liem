let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}
let observer = new IntersectionObserver(callback, options);

function callback(obsers) {
    obsers.forEach(obser => {
        if (!obser.isIntersecting) {
            return;
        }
        setTimeout(()=>{
            const url = obser.target.getAttribute("data-src");
            obser.target.src=url;
            obser.target.removeAttribute("data-src");
            observer.unobserve(obser.target);
        },1000);
    })
}


const items = document.querySelectorAll(".lazy");
items.forEach(item => {
    observer.observe(item);
})