// Adventures in jQuery...

// start rollin'
function rollIt () {
    // Switch the header text
    var $header = $('p.header')
    $header.text('Never Gonna...')

    // Hide all the list items
    var $listItems = $('li')
    $listItems.hide()

    // Switch all the text (while still hidden)
    var $listItem =  $('li.one').text('Give you up')
    var $listItem =  $('li.two').text('Let you down')
    var $listItem =  $('li.three').text('Run around')
    var $listItem =  $('li.four').text('And hurt you')

    // Animate the items back in, at 1.5 second intervals
    $listItems.each(function (index) {
        $(this).delay(1500 * index).fadeIn(1500);
    });

    // Make a footer element to hold the img/link
    $('ul').after('<p class="footer"></p>');
    var $footer = $('p.footer');
    $footer.hide()

    // Replace the empty element w/ a rickroll link / image of RA
    // Wrapped this in a timeout to make sure it shows up after the lyrics
    setTimeout(function(){
        $footer.html('<a href="https://www.youtube.com/watch?v=oHg5SJYRHA0"><img src="./images/ra.jpg"></a>')
        $footer.show()
    },6000);

    // Hide the add new item link to prevent stacking additional Astleys
    $('a.addButton').hide()
}

//$(function(){
    $('ul').before('<p class="header">Shopping List:</p>');
    var $addButton = $('ul').after('<a href="#" class="addButton"><img src="./images/go.png"</a>');
    $('a.addButton').on('click', rollIt);
    

//});
