document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".header-button-inner-wrap, #mobile-toggle");
  const body = document.body;
  const themeKey = "theme";

  const html = `
    <div class="theme-switch">
      <input type="checkbox" class="checkbox" id="checkbox">
      <label for="checkbox" class="checkbox-label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <span class="ball"></span>
      </label>
    </div>
  `;

  // Append for desktop (first target)
  if (targets[0]) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html.trim();
    targets[0].insertAdjacentElement("afterend", wrapper.firstElementChild);
  }

  // Append for mobile (second target)
  if (targets[1]) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html.trim();
    targets[1].insertAdjacentElement("afterend", wrapper.firstElementChild);
  }

  const checkboxes = document.querySelectorAll("#checkbox");
  if (!checkboxes.length) return;

  // Load saved theme
  const savedTheme = localStorage.getItem(themeKey);
  const isDark = savedTheme !== "light";

  body.classList.toggle("dark", isDark);
  body.classList.toggle("light", !isDark);
  checkboxes.forEach(chk => (chk.checked = isDark));
  if (!savedTheme) localStorage.setItem(themeKey, "dark");

  // Sync all switches together
  checkboxes.forEach(chk => {
    chk.addEventListener("change", () => {
      const darkMode = chk.checked;
      body.classList.toggle("dark", darkMode);
      body.classList.toggle("light", !darkMode);
      localStorage.setItem(themeKey, darkMode ? "dark" : "light");

      // Update all checkboxes at once
      checkboxes.forEach(c => (c.checked = darkMode));
    });
  });
});
