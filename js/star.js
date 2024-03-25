/* function stars() {
    let p1Div = document.querySelector('.p1');
    if (!p1Div) return; // If there's no div with class 'p1', exit the function

    let e = document.createElement('div');
    e.setAttribute('class', 'star');
    p1Div.appendChild(e);
    e.style.left = Math.random() * p1Div.offsetWidth + 'px'; // Adjust left position relative to p1Div

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + 'px';
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function () {
        p1Div.removeChild(e);
    }, 5000);
}

setInterval(function () {
    stars()
}, 100);
 */