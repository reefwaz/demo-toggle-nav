// Step 1: Select the element the user is going to click on to show the menu
const btn = document.querySelector('.toggle');

// Step 2: add a click event to th ebutton
btn.addEventListener('click', function(){
    // when the button is clicked, add the class name to the hidden element
    document.querySelector('nav').classList.toggle('show-nav');
});