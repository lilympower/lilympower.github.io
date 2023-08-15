// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById('submit-button');

function contact(event){
    event.preventDefault();
    let mainContainer = document.getElementById("contact-page");
    mainContainer.innerHTML = "";
    let thankYou = document.createElement("p");
    thankYou.innerText = "Thank you for your message";
    thankYou.classList.add("replacement-p");
    mainContainer.appendChild(thankYou);
}

submitButton.addEventListener("click", contact);