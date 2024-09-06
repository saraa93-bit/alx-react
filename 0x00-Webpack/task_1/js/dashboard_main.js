import $ from 'jquery';
import _ from 'lodash';

// Add elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Counter function
let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function in Lodash to the button click event
$('button').on('click', _.debounce(updateCounter, 500));
