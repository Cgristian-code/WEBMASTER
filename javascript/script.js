//Typing animation

let i = 0, text;
text = "Entrepreneurship Learning with Academic Excelence";
function typing() {
    if (i < text.length) {
        document.getElementById('animate-typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100)
    }
};

typing();