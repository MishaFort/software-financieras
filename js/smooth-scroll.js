const smoothScroll = document.querySelectorAll('.smooth-scroll');

smoothScroll.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  });
});
