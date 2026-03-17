  // CHANGE LOGIN TO LOGOUT
            function updateNavbar() {
                const loginBtn = document.getElementById("loginBtn");

                if (localStorage.getItem("isLoggedIn") === "true") {
                    loginBtn.innerText = "Logout";
                    loginBtn.removeAttribute("data-bs-toggle");
                    loginBtn.removeAttribute("data-bs-target");
                    loginBtn.onclick = logout;
                }
            }

            // LOGOUT FUNCTION
            function logout() {
                localStorage.clear();
                location.reload();
            }

            // AUTO CHECK ON PAGE LOAD
            window.onload = updateNavbar;