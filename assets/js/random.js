

function randomBackground () {

    const backgroundImages = ['/assets/images/background.webp', '/assets/images/background2.webp']

    const randomNumber = Math.floor(Math.random() * 2);

    const image = backgroundImages[randomNumber]

    const element = document.querySelector('#home');
    // const element2 = document.querySelector('.comma')
    


    // if (randomNumber == 1) {

    //     element2.style.color = 'var(--cornflower-blue)'
        
    // }

    element.style.backgroundImage = `url('${image}')`
    // element2.style.backgroundImage = `url('${image}')`



}

randomBackground()

