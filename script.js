document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-options li a');

    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default anchor behavior

            // Remove the 'selected' class from all links
            navLinks.forEach(nav => nav.classList.remove('selected'));

            // Add 'selected' class to the clicked link
            this.classList.add('selected');
        });
    });
});
