// Toggle Password Visibility
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Change icon
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Login Validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Define correct credentials
  const correctUsername = "admin";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    alert("✅ Login Successful! Welcome, " + username + "!");
  } else {
    alert("❌ Wrong username or password!");
  }
});
