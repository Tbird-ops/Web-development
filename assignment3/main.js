document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.querySelectorAll(".numberedButton");
	const p1 = document.getElementById("p1");
	const p2 = document.getElementById("p2");
	const myDiv = document.getElementsByTagName("div")[0];
	const ccat = document.getElementById("copycat");
	const clab = document.getElementById("cclabel");
    const form = document.getElementById("submitbutton");
	const in1 = document.getElementById("input1");
	const in2 = document.getElementById("input2");

	// Change header
	const origHeader = document.getElementsByTagName("h1")[0].innerHTML;
	const newHeader1 = origHeader.slice(0, origHeader.indexOf("Head"));
	const newHeader2 = origHeader.slice(origHeader.indexOf("Head")+4);
	document.getElementsByTagName("h1")[0].innerHTML = newHeader1 + newHeader2;


	let x = 1;
	buttons.forEach(button => {
    	button.addEventListener("click", function() {
        	this.style.backgroundColor = "lightblue";  // Change button color

        	if(button.getAttribute("id") === "b1"){  // Change p1 text
            	p1.innerHTML = "Pressed Button 1!";
        	}
        	else if(button.getAttribute("id") === "b2"){  // Increment number in p2
            	p2.innerHTML = `${x} (Paragraph 2)`;  
            	x += 1;
        	}
        	else if(button.getAttribute("id") === "b3"){  // change p1 color
            	p1.style.color = "red";
        	}
        	else if(button.getAttribute("id") === "b4"){  // append another paragraph with new
            	let newParagraph = document.createElement("p");
            	newParagraph.innerHTML = "new";
            	myDiv.appendChild(newParagraph);
        	}
        	else{
            	console.log("Error with buttons");
        	}
    	});
	})

	ccat.addEventListener("input", function() { 	// Copycat
    	clab.textContent = this.value.toLowerCase();
	});

	// Form Validation
    form.addEventListener("click", function(event) {
        event.preventDefault();

        if(in1.checkValidity() && in2.checkValidity()){
            document.getElementById("submitbutton").style.backgroundColor = 'lightgreen';
        }
        else {
            document.getElementById("submitbutton").style.backgroundColor = 'pink';
        }
    })

    in1.addEventListener("input", function() {
        if(this.validity.rangeOverflow === true){
            this.style.backgroundColor = "pink";
        }
        else{
            this.style.backgroundColor = 'lightgreen';
        }
    })

    in2.addEventListener("input", function() {
        if(this.checkValidity()){
            this.style.backgroundColor = "lightgreen";
        }
        else{
            this.style.backgroundColor = "pink";
        }
    })
});
