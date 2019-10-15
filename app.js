var x = 5;

document.addEventListener(
  'input',
  function(e) {
    if (e.target.value === 'easy') {
      console.log('działa');
    } else if (e.target.value === 'medium') {
      var x = 1;
      console.log(x);
    } else if (e.target.value === 'hard') {
      var x = 2;
      console.log(x);
    }
  },
  false
);
