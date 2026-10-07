const EMAIL = "bradysglynn@gmail.com";
const colors = {home: "--home", contact: "--contact", about: "--about"};

// Show the page named in the URL hash, and tint accents to match.
function show() {
  const page = colors[location.hash.slice(1)] ? location.hash.slice(1) : "home";
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("show", p.id === page));
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", a.dataset.page === page));
  document.documentElement.style.setProperty("--accent", `var(${colors[page]})`);
  scrollTo(0, 0);
}
addEventListener("hashchange", show);
show();

// Contact form: opens the visitor's email app with the message filled in.
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const from = document.getElementById("email").value.trim();
  const body = `${document.getElementById("message").value.trim()}\n\n— ${name} ${from}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Message from " + (name || "the website"))}&body=${encodeURIComponent(body)}`;
});
