@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #0a0a0a;
  color: #eee;
  scroll-behavior: smooth;
  overflow-x: hidden;
  position: relative;
}

/* Header Navigation */
header {
  position: fixed;
  width: 100%;
  background: #111;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.8);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  padding: 15px 20px;
}

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

/* Hero Section with Video Background */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  overflow: hidden;
}

.hero-section video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
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

/* Social Links Icons */
.social-links a {
  font-size: 2.5rem;
  color: #eee;
  margin: 0 15px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #0f0;
}

/* Section Styling */
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
