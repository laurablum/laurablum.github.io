const YEARS_EXPERIENCE = 7;
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-exp]").forEach((el) => {
    el.textContent = String(YEARS_EXPERIENCE);
  });
});
