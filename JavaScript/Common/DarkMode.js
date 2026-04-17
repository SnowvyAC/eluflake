const darkModeToggle = document.getElementById("dark_mode");
const body = document.body;
if (localStorage.getItem("darkMode") == "enabled") {
    body.classList.add("DarkMode");
    darkModeToggle.checked = true;
}
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("DarkMode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        body.classList.remove("DarkMode");
        localStorage.setItem("darkMode", "disabled");
    }
});