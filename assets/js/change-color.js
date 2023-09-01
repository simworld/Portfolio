function changeColor(element) {
    const isMobile = 'ontouchstart' in window;
    if (!isMobile) {
        const className = element.classList[3];

        const secondClass = document.querySelector('.nav-item.two.home.animation-initial');
        const thirdClass = document.querySelector('.nav-item.three.home.animation-initial');

        console.log(className);
        if (className == 'animation-initial') {
            element.style.color = 'var(--snow)';
            secondClass.style.color = 'var(--orange)';
            thirdClass.style.color = 'var(--orange)';
        }
    }
}

// function changeColor(element) {
//     const className = element.classList[3];

//     const secondClass = document.querySelector('.nav-item.two.home')
//     const thridClass = document.querySelector('.nav-item.three.home')


//     console.log(className)
//     if (className == 'animation-initial') {

//             element.style.color = 'var(--snow)';
    
//             secondClass.style.color = 'var(--orange)';
//             thridClass.style.color = 'var(--orange)';



//         // if (element.style.color == 'var(--snow)') {
//         //     element.style.color = 'var(--orange)';
//         // } else {
//         //     element.style.color = 'var(--snow)';
//         // }
//     }

//     // if ( className == 'animation') {
//     //     const anchorElement = document.querySelector("a");
//     //     anchorElement.style.color = 'var(--snow)';
        
//     // }
// }


// function restoreColor(element) {
//     // const anchorElement = document.querySelector("a"); 
//     const className = element.classList[3];

//     element.style.color = ''; // Restore the default text color
//     if ( className == 'animation') {
//         const anchorElement = document.querySelector("a");
//         anchorElement.style.color = '';    
//     }
// }

function restoreColor(element) {
    const secondClass = document.querySelector('.nav-item.two')
    const thridClass = document.querySelector('.nav-item.three')
    // const className = element.classList[3];
    element.style.color = ''; // Restore the default text color
    secondClass.style.color = '';
    thridClass.style.color = '';

    // if (className === 'animation') {
    //     const anchorElement = element.querySelector("a");
    //     if (anchorElement) {
    //         anchorElement.style.color = '';
    //     }
    // }
}
