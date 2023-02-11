window.onload = () => {
    const p = document.createElement("p");
    p.innerHTML = "new text generated."

    const div = document.getElementsByTagName("div")[1];
    div.appendChild(p);
}