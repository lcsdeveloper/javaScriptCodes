//creating elements dinamically 
let divElement = document.createElement( 'div' );
let spanElement = document.createElement( 'span' );
let spanElement2 = document.createElement( 'span' );
let pElement = document.createElement( 'p' );
let imgElement = document.createElement( 'img' );
let inputElement = document.createElement( 'input' );

//setting an ID to the element
divElement.setAttribute( 'id', 'divElement' );
spanElement.setAttribute( 'id', 'spanElement' );
spanElement2.setAttribute( 'id', 'spanElement2' );

//setting a class to the element
divElement.setAttribute( 'class', 'box' );

//setting element's css styles via style property
divElement.style.position = 'absolute';
divElement.style.display = 'block';
divElement.style.width = '500px';
divElement.style.height = '500px';
divElement.style.margin = '50px';
divElement.style.left = 0;

divElement.style.borderStyle = 'solid';
divElement.style.borderColor = 'red';
divElement.style.borderWidth = '1px';
divElement.style.backgroundColor = '#fff';
divElement.style.color = 'black';

spanElement.style.color = 'blue';
spanElement.style.position = 'relative';

spanElement2.style.margin='20px';

//add element to the DOM by inserting it into <body> tag
document.body.appendChild( divElement );
document.body.appendChild( spanElement );
document.body.appendChild( spanElement2 );

//insert element into another element with id = 'diviElement'
document.getElementById( 'divElement' ).innerHTML = 'i am a div';

document.getElementById( 'spanElement' ).innerHTML = 'i am a span';
document.getElementById( 'spanElement2' ).innerHTML = 'i am another span';