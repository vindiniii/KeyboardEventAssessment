let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//get initial secret key
let randomNumber = Math.floor(Math.random() * 26);
let secretLetter = alpha[randomNumber];

const body = document.querySelector("body");

document.body.addEventListener('keyup', function(event) {
   //if secret key is pressed
    if(secretLetter == event.key) {
        const h3 = document.createElement("h3");
        h3.textContent = "SECRET KEY PRESSED: " + event.key;
        body.appendChild(h3);

        //pick new secret key
        randomNumber = Math.floor(Math.random() * 26);
        secretLetter = alpha[randomNumber];
    }

})

