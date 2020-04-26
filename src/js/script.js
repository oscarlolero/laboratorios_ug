const allWaypoints = [
    new Waypoint({
        element: document.getElementById('description'),
        handler: direction => {
            if (direction === "down") {
                document.querySelector('nav').classList.add('sticky');
            } else {
                document.querySelector('nav').classList.remove('sticky');
            }
        },
        offset: '0px;'
    })
];

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});