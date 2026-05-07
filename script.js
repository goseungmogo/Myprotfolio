const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", () => {
    const formAction = contactForm.getAttribute("action") || "";
    const isPlaceholder = formAction.includes("your-form-id");

    if (isPlaceholder) {
      formStatus.textContent =
        "Formspree 폼 주소를 먼저 입력해주세요. (action=\"https://formspree.io/f/실제아이디\")";
      return;
    }

    formStatus.textContent = "전송 중입니다...";
  });
}
