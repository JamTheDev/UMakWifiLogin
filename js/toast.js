let toastParentEl;
let toastContEl;

window.onload = () => {
    toastParentEl = document.querySelector(".toast"); 
    toastContEl = document.querySelector(".toast-container");

    toastContEl.style.display = "none";

    toast("The new UMak Website is here!", "As we forge new stories, UMak is ready to shape the future as we launch our new and improved UMak website! Visit and explore the virtual home of the University of Makati Herons.", 5, () => {
        window.open("https://umak.edu.ph");
    });
    
}
/**
 *
 *  Generates a toast
 */
function toast(title, subtitle, duration, callback = null) {
    function main() {
        let clone = toastContEl.cloneNode(true);
        clone.style.display = "flex";
        clone.querySelector(".toast-title").textContent = title;
        clone.querySelector(".toast-subtitle").textContent = subtitle;
        toastParentEl.appendChild(clone);

        const timeout = setTimeout(() => {
            clone.classList.remove("toast-container");
            clone.classList.add("toast-container-destroy");

            setTimeout(() => {
                toastParentEl.removeChild(clone);
            }, 1000);   
        }, duration * 1000);

        clone.onclick = () => {
            if (callback && typeof callback == "function") callback();
            clearTimeout(timeout);
            clone.classList.remove("toast-container");
            clone.classList.add("toast-container-destroy");

            setTimeout(() => {
                toastParentEl.removeChild(clone);
            }, 1000);   
        }

    }

    main();
}


