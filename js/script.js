$(document).ready(function(){

  $(".buyproduct").click(function(){
  $(".buyproduct").text('NOT AVAILABLE YET');
  });
  function toggle(e) {
    e.classList.toggle("active");
  }

  const cards = document.querySelectorAll(".intobserver");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  }, {
    threshold: 0.5
  })

  cards.forEach(card => {
    observer.observe(card)
    });

});
