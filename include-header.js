document.addEventListener('DOMContentLoaded', function() {
    const headerContent = `
    <div class="container">
        <div class="header-content">
            <div class="header-text">
                <h1>Amir Saman Mirjalili</h1>
            </div>
            <div class="nav-container">
                <button class="dropdown-btn">Menu</button>
                <nav class="dropdown-content">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="education.html">Education</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="publications.html">Publications</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    `;

    document.querySelector('header').innerHTML = headerContent;

    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle menu on button click
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            dropdownContent.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    });

    // Prevent menu from closing when clicking inside it
    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
