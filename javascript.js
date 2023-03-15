const btn = document.getElementById('new-quote');
btn.addEventListener('click', generate);


const quotes_arr = ['Is thinking inspirational?', 'By pulling ourselves up by out bootstraps, we self-deceive.', 'Respect the shameful, for they may be thy shepherd.', 'Once a rock star, always a rock star.', 'Stop being dismissive.', 'You can count on inspirobot.', "People who obey authority figures can't escape imprisonment.", 'Boredom is the inherent flaw in our political system.', 'With strong duties come strong prejudices.','You are very special.','Without the withholding of desperation you cannot find joy.']

const author_arr = Array(quotes_arr.length).fill('— Inspirobot')

// const author_arr = ['— Inspirobot (Jan 1 2022)', '— Inspirobot (April 30 2022)', '— Inspirobot (February 17 2022)', '— Inspirobot (November 10 2022)', '— Inspirobot (November 30 2022)', '— Inspirobot (March 12 2022)', '— Inspirobot (July 19 2022)', '— Inspirobot (June 2 2022)', '— Inspirobot (August 8 2022)', '— Inspirobot (March 29 2022)', '— Inspirobot (Jan 23 2022)']

function generate() {
  let random = Math.floor(Math.random() * quotes_arr.length);
  document.getElementById('text').setAttribute('class','text-hide');
  document.getElementById('author').setAttribute('class','text-hide');

  setTimeout(() => {
    document.getElementById('text').innerHTML = quotes_arr[random];
    document.getElementById('author').innerHTML = author_arr[random];
    document.getElementById('text').setAttribute('class','text-show');
    document.getElementById('author').setAttribute('class','text-show');
  },2500)
}
