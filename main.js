const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    console.log('test');
  })
});

