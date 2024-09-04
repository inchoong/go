/*
given an array of divs, find their max height, then make them equal
*/
function resize(divs, cols) {
    var heights = [];

    // force height to auto
    for( var i = 0; i < divs.length; i++ ) {
        divs[i].style.height = "auto";
    }

    // compile list of heights
    for( var i = 0; i < divs.length; i++ ) {
        var h = divs[i].offsetHeight;
        heights.push( h );
    }

    // tallest is original tallest, not after resizing
    var tallest = Math.max.apply(null, heights);

    for( var i = 0; i < divs.length; i++ ) {

        // back to one column, need to restore OH
        if( cols < 2 ) {
            divs[i].style.height = "auto";
        } else {
            divs[i].style.height = tallest + "px";
        }
    }
}

/*
loop through a selector of divs and chunk it based on
columns (3 or 2)
*/
function enhance(selector, cols) {
    var col = 0;

    var divs = document.getElementsByClassName(selector);
    var temp = [];
    for( var i = 0; i < divs.length; i++ ) {
        col++;
        temp.push(divs[i]);
        if( col >= cols ) {
            resize( temp, cols );
            temp = [];
            col = 0;
        }
    }
    if( col > 0 ) resize( temp, cols );
}

/*
number of columns, reflects CSS media queries
*/
function getCols() {
    var w = document.body.offsetWidth;
    if( w < 600 ) return( 1 );
    if( w < 900 ) return( 2 );
    return( 3 );
}

/*
trigger an enchancing resize when needed
*/
function do_update() {
    //enhance( "title", getCols() );
    enhance( "item_body", getCols() );
}

window.addEventListener('resize', do_update);
window.addEventListener('load', do_update);
