const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  document
    .querySelector(".header")
    .classList.toggle("sticky", window.scrollY > 80);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((el) => observer.observe(el));

const darkToggle = document.querySelector(".dark-toggle");

const enableDark = () => {
  document.body.classList.add("dark");
  darkToggle.classList.replace("bx-moon", "bx-sun");
  localStorage.setItem("theme", "dark");
};

const disableDark = () => {
  document.body.classList.remove("dark");
  darkToggle.classList.replace("bx-sun", "bx-moon");
  localStorage.setItem("theme", "light");
};

if (localStorage.getItem("theme") === "dark") {
  enableDark();
}

darkToggle.addEventListener("click", () => {
  document.body.classList.contains("dark") ? disableDark() : enableDark();
});

const testimonialTrack = document.querySelector(".testimonial-track");

if (testimonialTrack) {
  let scrollAmount = 0;

  setInterval(() => {
    const cardWidth =
      testimonialTrack.querySelector(".testimonial-card")?.offsetWidth + 25;

    scrollAmount += cardWidth;

    if (
      scrollAmount >=
      testimonialTrack.scrollWidth - testimonialTrack.clientWidth
    ) {
      scrollAmount = 0;
    }

    testimonialTrack.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, 4000);
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const activeItem = document.querySelector(".faq-item.active");

    if (activeItem && activeItem !== item) {
      activeItem.classList.remove("active");
    }

    item.classList.toggle("active");
  });
});
const waForm = document.getElementById("waForm");

waForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const nomor = document.getElementById("nomor").value;
  const pesan = document.getElementById("pesan").value;

  const text = `Halo Sumber Harapan

Nama : ${nama}
No HP : ${nomor}

Pesan :
${pesan}`;

  const whatsappURL = `https://wa.me/62818114498?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
});
