const isLoggedIn = localStorage.getItem("isLoggedIn");
const role = localStorage.getItem("role");
if (isLoggedIn !== "true" || role !== "admin") {
    window.location.href = "home.html";
}
