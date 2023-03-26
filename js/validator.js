window.onload = () => {
    let form = document.querySelector(".fields");
    let formInputs = document.querySelectorAll(".fields > .text-field");
    form.addEventListener("submit", (event) => {
        console.log(formInputs);
        let errorCount = 0;
        formInputs.forEach((e) => {

            function removeErr(el) {
                console.log(el);
                if (el.target.value.trim() != "" && el.target.classList.contains("error-input")) {
                    el.target.classList.remove("error-input");
                    return;
                }

                if (el.target.value.trim() == "") {
                    el.target.classList.add("error-input");
                }
                    
            }

            e.removeEventListener("input", removeErr);
            e.addEventListener("input", removeErr);
            
            if (!e.validity.valid || e.value.trim() == "") {
                toast("EMPTY FIELD", "Please fill out the empty field", 2);
                e.classList.add("error-input");
                event.preventDefault();
            }

            

        });

    });
}
