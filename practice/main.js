document.addEventListener("DOMContentLoaded", function () {
    const addParagraph = document.getElementById("clickme");
    const loadParagraph = document.getElementById("paragraphLoader");
    const firstname = document.getElementById("firstname");
    const pwd = document.getElementById("pwd");
    const text = ["STUFF HERE NOW", "Hello WoRlD!", "now you see me..."];
    const color = ["red", "green", "blue"];
    const myForm = document.getElementsByTagName("form")[0];
    const body = document.getElementsByTagName("body")[0];
    const nb = document.getElementById("newbutton");

    nb.onclick = () => {console.log("ran 1")};
    nb.onclick = () => {console.log("ran 2")};




    body.addEventListener("keydown", function(event) {
        console.log(event);
        console.log(event.key);
        let keystring = event.key;
        console.log(keystring);
    });


    myForm.addEventListener("click", function(event) {
        //event.preventDefault();
        if(loadParagraph.firstChild != null){
            loadParagraph.removeChild(loadParagraph.firstChild)
        }
    });


    addParagraph.addEventListener("click", function () {
        //console.log("made it here....")
        let textChoice = Math.floor(Math.random() * (text.length - 0))
        //console.log(textChoice)
        let newP = document.createElement("p");
        newP.innerHTML = text[textChoice];
        newP.style.backgroundColor = color[textChoice];
        newP.style.color = "white";
        loadParagraph.appendChild(newP);
    });

    pwd.addEventListener("input", function() {
        let newP = document.createElement("p");
        newP.innerHTML = "MY STRING";
        loadParagraph.appendChild(newP);
    });

    firstname.addEventListener("input", function() {
        if(loadParagraph.lastChild != null){
            loadParagraph.removeChild(loadParagraph.lastChild);
        }
    });
});