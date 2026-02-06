document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const msg = document.getElementById("formMessage");
        const formData = new FormData(form);

        msg.textContent = "Odesílám zprávu...";
        msg.style.color = "#4682B4";

        fetch("send.php", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                msg.textContent = data.message;
                msg.style.color = data.success ? "green" : "red";

                if (data.success) {
                    form.reset();
                    grecaptcha.reset();
                }
            })
            .catch(() => {
                msg.textContent = "Chyba při odesílání.";
                msg.style.color = "red";
            });
    });
});
