import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

function updateCounter() {
  let count = 0;
  return function () {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };
}

$(document).ready(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  $('body').prepend('<div id="logo"></div>');

  const debouncedClick = _.debounce(updateCounter(), 500);
  $('button').on('click', debouncedClick);
});
