// Typing Effect for Tagline
const text = "Android Developer | Reverse Engineer | Game Modder";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.onload = type;
.logo {
  font-weight: 600;
  font-size: 1.5rem;
  color: #0f0;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  color: #eee;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav ul li a:hover,
nav ul li a.active {
  color: #0f0;
}

.menu-toggle {
  display: none;
  font-size: 2rem;
  color: #0f0;
  cursor: pointer;
}

/* Hero Section with BGMI Background */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
  background: url('https://i.ibb.co/6ZLh9mr/bgmi-wallpaper.jpg') no-repeat center center/cover;
}

.hero-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.hero-section .hero-content {
  position: relative;
  z-index: 2;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.hero-section p {
  font-size: 1.3rem;
  color: #a0a0a0;
  margin-bottom: 25px;
}

/* Social Links */
.social-links a {
  font-size: 2.5rem;
  color: #eee;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #0f0;
}

/* Sections */
section {
  max-width: 1000px;
  margin: 100px auto 50px auto;
  padding: 0 20px;
}

section h2 {
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 20px;
  color: #0f0;
}

.about-section p,
.contact-section p {
  text-align: center;
  font-size: 1.1rem;
  color: #ccc;
}

/* Services List */
.services-list {
  margin-top: 20px;
  padding-left: 20px;
  font-size: 1.1rem;
  color: #ccc;
  list-style: disc;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.project-item {
  background: #111;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 0 10px #0f0;
  transition: transform 0.3s ease;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
}

.project-item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px #0f0;
}

/* Contact Links */
.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  background: #0f0;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #0c0;
}

/* Footer */
footer {
  text-align: center;
  padding: 20px;
  color: #555;
  background: #111;
  margin-top: 50px;
}

/* Responsive Menu */
@media (max-width: 768px) {
  nav ul {
    position: fixed;
    top: 60px;
    right: -100%;
    height: 100vh;
    width: 200px;
    background: #000;
    flex-direction: column;
    padding-top: 30px;
    transition: right 0.3s ease;
  }
  nav ul.active {
    right: 0;
  }
  nav ul li {
    margin: 20px 0;
    text-align: center;
  }
  .menu-toggle {
    display: block;
  }
}
