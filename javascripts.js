function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    let hamburger = document.querySelector(".hamburger");

    sidebar.classList.toggle("active");

    
    if (sidebar.classList.contains("active")) {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}
