document.getElementById("button-sign").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (username === "admin" && pass === "admin123") {
    // alert("login successful");
    window.location.href = "main.html";
  } else {
    alert("UserName and Password Not Match");
  }
});