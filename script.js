function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ Toggle Script
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

function orderNow() {
    window.location.href = 'https://wa.me/2347013488832';
}

function showQuickView(title, description, price) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("quickViewModal").style.display = "block";
}

function closeQuickView() {
    document.getElementById("quickViewModal").style.display = "none";
}

function filterProducts() {
    const filter = document.getElementById("filterSelect").value;
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const category = card.getAttribute("data-category");
        card.style.display = (filter === "all" || filter === category) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(btn => {
        btn.addEventListener("click", () => {
            const answer = btn.nextElementSibling;
            answer.classList.toggle("open");
        });
    });
});

function handleGenderSelect() {
    const gender = document.getElementById("genderSelect").value;
    document.querySelector('.qa-step[data-step="1"]').classList.remove('active');

    // Hide all
    document.getElementById("femaleQuestion1").classList.remove("active");
    document.getElementById("femaleQuestion2").classList.remove("active");
    document.getElementById("maleQuestion1").classList.remove("active");
    document.getElementById("maleQuestion2").classList.remove("active");

    // Show next
    if (gender === "female") {
        document.getElementById("femaleQuestion1").classList.add("active");
    } else if (gender === "male") {
        document.getElementById("maleQuestion1").classList.add("active");
    }
}

function nextFemaleStep(step) {
    document.getElementById("femaleQuestion1").classList.remove("active");
    document.getElementById("femaleQuestion2").classList.add("active");
}

function showFemaleSizeResult() {
    const band = parseInt(document.getElementById("bandSize").value);
    const bust = parseInt(document.getElementById("bustSize").value);
    const diff = bust - band;
    let cup = "A";
    if (diff >= 1 && diff <= 2) cup = "A";
    else if (diff <= 3) cup = "B";
    else if (diff <= 4) cup = "C";
    else if (diff <= 5) cup = "D";
    else if (diff > 5) cup = "DD+";

    const resultText = `${band}${cup} – Comfortable Fit`;
    document.getElementById("femaleQuestion2").classList.remove("active");
    document.getElementById("sizeResult").style.display = "block";
    document.getElementById("resultText").innerText = resultText;
}

function nextMaleStep(step) {
    document.getElementById("maleQuestion1").classList.remove("active");
    document.getElementById("maleQuestion2").classList.add("active");
}

function showMaleSizeResult() {
    const waist = parseInt(document.getElementById("waistSize").value);
    const fit = document.getElementById("fitPreference").value;
    let size = "M";
    if (waist < 30) size = "S";
    else if (waist <= 34) size = "M";
    else if (waist <= 38) size = "L";
    else size = "XL";

    const resultText = `${size} – ${fit.charAt(0).toUpperCase() + fit.slice(1)} Fit`;
    document.getElementById("maleQuestion2").classList.remove("active");
    document.getElementById("sizeResult").style.display = "block";
    document.getElementById("resultText").innerText = resultText;
}


function referNow() {
    alert("Start referring and earning! Share your link with friends now.");
}

function submitContactForm(event) {
    event.preventDefault();
    alert("Thanks for reaching out! We'll get back to you shortly.");
    event.target.reset();
}

function submitNewsletter(event) {
    event.preventDefault();
    alert("🎉 You're in! Thanks for subscribing to BoldWear.");
    event.target.reset();
}
