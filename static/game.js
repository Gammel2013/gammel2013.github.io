// JavaScript for the game logic

let points = 0;
let generator1 = 0;
let generator1production = 1;
let generator1price = 10;

let msPerTick = 66;

// Function to update points on the page
function updatePoints() {
  $('#points').text(points.toFixed(2));
}

function updateGeneratorLabels() {
  $('#button_pointGen1_amount').text('(' + generator1 + ')');
}

// Function to handle button click event
function pointClick() {
  points += 1; // Increase points by 1 on each click
}

function buyGenerator1() {
  if (points >= generator1price) {
    points -= generator1price;
    generator1price *= 1.2;
    generator1 += 1;
  }
  updateGeneratorLabels();
}

function handleTabClick() {
  var targetTabId = $(this).data('target');

  // Hide all tabs
  $('.tab').hide();

  // Show the target tab
  $('#' + targetTabId).show();
}

function gameLoop() {
  if (points >= generator1price) {
    $('#button_pointGen1').addClass('buyableGenerator');
    $('#button_pointGen1').removeClass('notBuyableGenerator');
  } else {
    $('#button_pointGen1').removeClass('buyableGenerator');
    $('#button_pointGen1').addClass('notBuyableGenerator');
  }

  points += generator1 * generator1production * msPerTick / 1000;
  updatePoints(); // Update points on the page
}

$( document ).ready(function() {
  $('.tab').not(':first').hide();

  // Event listener for button click
  $('#button_click').on('click', pointClick);
  $('#button_click_amount').hide();

  $('#button_pointGen1').on('click', buyGenerator1)

  // Handle tab click
  $('.tab-link').on('click', handleTabClick);

  setInterval(gameLoop, msPerTick);
});
// localStorage.setItem("save",JSON.stringify(g));