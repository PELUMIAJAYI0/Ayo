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

function referNow() {
    alert("Start referring and earning! Share your link with friends now.");
}


