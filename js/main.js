const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*scroll home*/
sr.reveal('.home-title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.home-social', { delay: 200 });

/*scroll about*/
sr.reveal('.about-container-img', {});
sr.reveal('.about-container-content', { delay: 200 });

/*scroll skills*/
sr.reveal('.skills-subtitle', {});
sr.reveal('.skills-text', { delay: 100 });
sr.reveal('.scroll-html', { delay: 300 });
sr.reveal('.scroll-css', { delay: 400 });
sr.reveal('.scroll-javascript', { delay: 500 });
sr.reveal('.scroll-git', { delay: 600 });
sr.reveal('.skills-img', { delay: 200 });

/*scroll work*/
sr.reveal('.scroll-work-1', {});
sr.reveal('.scroll-work-2', { delay: 100 });
sr.reveal('.scroll-work-3', { delay: 200 });
sr.reveal('.scroll-work-4', { delay: 400 });
sr.reveal('.scroll-work-5', { delay: 500 });
sr.reveal('.scroll-work-6', { delay: 600 });

/*scroll contact*/
sr.reveal('.forms-nome', {});
sr.reveal('.forms-email', { delay: 200 });
sr.reveal('.contact-textarea', { delay: 200 });