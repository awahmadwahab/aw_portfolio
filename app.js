document.addEventListener("DOMContentLoaded", function()
{
  var typed = new Typed('#typed', {
    strings: ["Photographer", "FrontEnd Developer", "Graphic Designer", "Content Creator", "AW  X  VISION"],
    typeSpeed: 50,
    startDelay: 500,
    backDelay: 800,
    backSpeed: 40,
    loop: true,
  });


  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav_list');
  const navLinks = document.querySelectorAll('#nav_list a');

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



