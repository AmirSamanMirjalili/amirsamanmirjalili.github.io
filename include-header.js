document.addEventListener('DOMContentLoaded', function() {
    const headerContent = `
    <div class="container">
        <div class="header-content">
            <div class="header-text">
                <h1>Amir Saman Mirjalili</h1>
                <nav>
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
            <div id="personal-image" class="personal-image"></div>
        </div>
    </div>
    `;

    document.querySelector('header').innerHTML = headerContent;

    // Load the image separately with caching
    const img = new Image();
    img.onload = function() {
        document.getElementById('personal-image').style.backgroundImage = `url(${img.src})`;
    };
    img.src = 'media/personal.JPG';

    // Set cache control headers
    const meta = document.createElement('meta');
    meta.httpEquiv = "Cache-Control";
    meta.content = "public, max-age=31536000"; // Cache for one year
    document.head.appendChild(meta);
});