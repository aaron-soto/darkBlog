let colorBtn = document.querySelectorAll(".color");

tippy(colorBtn, {
    content: "Copy",
    inertia: true
});

const instance = tippy(colorBtn, {
    content: "Copied!",
    trigger: "click",
    onShow(instance) {
        setTimeout(() => {
            instance.hide();
        }, 2000);
    }
});

let clipboard = new ClipboardJS(".color");

clipboard.on("success", function (e) {
    const instance = tippy(colorBtn);
});


function myFunction() {
    var checkBox = document.querySelector(".switch-input");

    if (checkBox.checked == true) {
        document.documentElement.setAttribute('color-mode', 'light');
        localStorage.setItem('color-mode', 'light')
    } else if (checkBox.checked != true) {
        document.documentElement.setAttribute('color-mode', 'dark');
        localStorage.setItem('color-mode', 'dark')
    }
}