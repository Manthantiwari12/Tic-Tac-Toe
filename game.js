$(".start").click(function () {
    var audio = new Audio("sounds/blue1.mp3");
    audio.play();
    setTimeout(() => {
        $(".start").hide();
        $(".hide").show();
    }, 500);

})
var tictactoe = [];
var noofbutton = document.querySelectorAll(".play").length;
for (var i = 0; i < noofbutton; i++) {
    document.querySelectorAll(".play")[i].addEventListener("click", function () {
        this.innerHTML = "X";
        if (tictactoe.length % 2 === 0) {
            tictactoe.push("x");
            this.innerHTML = "X";
            playsound();
            if (checkwin() == 1) {
                document.querySelector(".message").innerHTML = "Player 1 Won";
                $(".win").show()
                var allElements = document.querySelectorAll('*');
                var audio = new Audio("sounds/won.mp3");
                audio.play();
                // Iterate through each element and remove its event listeners
                allElements.forEach(function (element) {
                    removeAllEventListeners(element);
                });
            }
        } else {
            tictactoe.push("0")
            this.innerHTML = "0";
            playsound();
            if (checkwin() === 1) {
                document.querySelector(".message").innerHTML = "Player 2 Won";
                $(".win").show()
                var allElements = document.querySelectorAll('*');

                // Iterate through each element and remove its event listeners
                allElements.forEach(function (element) {
                    removeAllEventListeners(element);
                });
                var audio = new Audio("sounds/won.mp3");
                audio.play();
            }
        }
        console.log(tictactoe.length);
        if (tictactoe.length === 9) {
            document.querySelector(".message").innerHTML = "Draw";
            $(".win").show()
            var allElements = document.querySelectorAll('*');

            // Iterate through each element and remove its event listeners
            allElements.forEach(function (element) {
                removeAllEventListeners(element);
            });
        }

    });
}
document.querySelector(".restart").addEventListener("click", function () {
    location.reload();
});
function checkwin() {
    var win = 2
    var al = document.querySelectorAll(".a").length;
    var a = [];
    var bl = document.querySelectorAll(".b").length;
    var b = []
    var cl = document.querySelectorAll(".c").length;
    var c = [];
    var dl = document.querySelectorAll(".d").length;
    var d = []
    var el = document.querySelectorAll(".e").length;
    var e = [];
    for (var i = 0; i < al; i++) {
        a.push(document.querySelectorAll(".a")[i].textContent);
    }
    for (var i = 0; i < bl; i++) {
        b.push(document.querySelectorAll(".b")[i].textContent);
    }
    for (var i = 0; i < cl; i++) {
        c.push(document.querySelectorAll(".c")[i].textContent);
    }
    for (var i = 0; i < dl; i++) {
        d.push(document.querySelectorAll(".d")[i].textContent);
    }
    for (var i = 0; i < el; i++) {
        e.push(document.querySelectorAll(".e")[i].textContent);
    }
    if (a[0] === a[1] && a[1] === a[2]) {
        if (a[0] === 'X' || a[0] === '0') {
            win = 1;
        }
    }
    if (b[0] === b[1] && b[1] === b[2]) {
        if (b[0] === 'X' || b[0] === '0') {
            win = 1;
        }
    }
    if (c[0] === c[1] && c[1] === c[2]) {
        if (c[0] === 'X' || c[0] === '0') {
            win = 1;
        }
    }
    if (d[0] === d[1] && d[1] === d[2]) {
        if (d[0] === 'X' || d[0] === '0') {
            win = 1;
        }
    }
    if (a[0] === b[0] && b[0] === c[0]) {
        if (a[0] === 'X' || a[0] === '0') {
            win = 1;
        }
    }
    if (a[1] === b[1] && b[1] === c[1]) {
        if (a[1] === 'X' || a[1] === '0') {
            win = 1;
        }
    }
    if (a[2] === b[2] && b[2] === c[2]) {
        if (a[2] === 'X' || a[2] === '0') {
            win = 1;
        }
    }

    if (e[0] === e[1] && e[1] === e[2]) {
        if (e[0] === 'X' || e[0] === '0') {
            win = 1;
        }
    }

    console.log(a)
    console.log(b)
    console.log(c)
    return win;
}
function removeAllEventListeners(element) {
    // Clone the element to preserve its properties and children
    var newElement = element.cloneNode(true);
    // Replace the original element with the cloned one
    element.parentNode.replaceChild(newElement, element);
    return newElement;
}
function playsound() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
}