document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! We'll get back to you soon.`);
  // Here you would typically send the form data to a server
  document.getElementById("contactForm").reset();
});

// All other form scripts have been moved to their respective JS files.