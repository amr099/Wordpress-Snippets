document.addEventListener("DOMContentLoaded", function () {
  
  const loader = document.createElement("div");
  loader.className = "site-loader";
  loader.innerHTML = `<div class="loader-spinner"></div>`;
  document.body.appendChild(loader);

  window.addEventListener("load", function () {
    loader.classList.add("loaded");
    setTimeout(() => loader.remove(), 600);
  });
});

/* CSS */
.site-loader {
  position: fixed;
  inset: 0;
  background: #0d0d0d; 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}

.site-loader.loaded {
  opacity: 0;
  visibility: hidden;
}

.loader-spinner {
  width: 55px;
  height: 55px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-top-color: #820fb2; 
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

