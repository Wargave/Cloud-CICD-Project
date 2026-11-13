// 1. Переключение тёмной и светлой темы
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeToggleBtn.textContent = isLight ? "Тёмная тема" : "Светлая тема";
});

// 2. Фильтрация карточек проектов по категориям
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;
    projectCards.forEach((card) => {
      const match = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !match);
    });
  });
});

// 3. Обработка формы обратной связи без перезагрузки страницы
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("sender-name").value.trim();
  formStatus.textContent = `Спасибо, ${name}! Сообщение проверено на клиенте и готово к отправке.`;
  contactForm.reset();
});