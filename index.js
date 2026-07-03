// ==========================
// MOBILE MENU
// ==========================

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
    });
});


// ==========================
// CONTACT FORM
// ==========================

function sendMessage(event) {
    event.preventDefault();

    const form = event.target;

    const params = {
        name: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        message: form.querySelector("textarea").value,
        title: "New Contact Message"
    };

    emailjs.send(
        "service_sdiw7t7",
        "template_cf5tg1d",
        params
    )
    .then(function () {
        document.getElementById("msg").textContent =
            "✅ Thanks! Your message has been sent.";

        form.reset();

        setTimeout(() => {
            document.getElementById("msg").textContent = "";
        }, 4000);
    })
   .catch(function (error) {
    console.log("EmailJS Error:", error);
    alert(JSON.stringify(error));
    document.getElementById("msg").textContent =
        "❌ Failed to send message.";
});
}

// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});


document.querySelectorAll(".fade-in").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});