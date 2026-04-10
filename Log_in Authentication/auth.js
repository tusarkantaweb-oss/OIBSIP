// REGISTER
function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }
  
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
  
    alert("Registered Successfully!");
    window.location.href = "index.html";
  }
  
  // LOGIN
  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (!storedUser) {
      alert("No user found. Please register.");
      return;
    }
  
    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  }
  
  // LOGOUT
  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  }
  
  // PROTECT DASHBOARD
  (function protectPage() {
    const isDashboard = window.location.pathname.includes("dashboard.html");
    const loggedIn = localStorage.getItem("loggedIn");
  
    if (isDashboard && loggedIn !== "true") {
      alert("Please login first!");
      window.location.href = "index.html";
    }
  })();