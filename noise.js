$(document).ready( function() {
  // your code here
  $('.instrument').on('click', 'button', function(event) {
    const clickNote = $(this).html();
    playNote(clickNote);
  });

  $('body').keydown((event) => {
    if (notes.includes(event.key)) {
      console.log(event.key);
      const note = event.key;
      playNote(note);
    }
  });
});

const notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const playNote = (note) => {
  let target = $(`#${note}Audio`).get(0);
  target.currentTime = 0;
  target.play();
}
