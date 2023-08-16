'use strict'

const currentPageURL = window.location.href;
const pathname = window.location.pathname;

const navigationLinks = document.querySelectorAll('.hamburger-navigation a');

navigationLinks.forEach((link) => {
if (link.href === currentPageURL) {
link.classList.add('current');
console.log(link)
}

if (pathname === '/html/works/dimos.html') {
    const workLink = document.querySelector("a[href='/html/works.html']");
    if (workLink) {
      workLink.classList.add('current');
    }
}
if (pathname === '/html/works/butterfly.html') {
    const workLink = document.querySelector("a[href='/html/works.html']");
    if (workLink) {
      workLink.classList.add('current');
    }
}
});
