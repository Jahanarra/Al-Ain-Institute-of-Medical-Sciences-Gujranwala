function loginUser() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const status = document.getElementById('login-status');
  if (email === "student@alain.edu.pk" && pass === "123456") {
    status.innerText = "Login successful!";
    status.style.color = "green";
  } else {
    status.innerText = "Invalid credentials.";
    status.style.color = "red";
  }
  return false;
}

function filterPrograms() {
  const input = document.getElementById("searchBox").value.toLowerCase();
  const items = document.getElementById("programList").getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    const txt = items[i].textContent.toLowerCase();
    items[i].style.display = txt.includes(input) ? "" : "none";
  }
}