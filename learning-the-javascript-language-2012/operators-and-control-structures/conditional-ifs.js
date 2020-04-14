// assigning a variable based on a question
var answer = window.confirm('Click OK, get True. Click Cancel, get False');
answer;
if ( answer === true ){
    console.log( "you said true!" );
}
else {
    console.log( "you said something else!");
}

// execute above code in console

//adding else if's

var answer = window.prompt( ' Type YES, NO, or MAYBE, then click ok');
answer;
if ( answer == 'YES' ){
    console.log( "you said Yes!" );
}
else if( answer == 'NO' ){
    console.log( "you said No!" );
}
else if( answer == 'MAYBE' ){
    console.log( "you said Maybe!" );
}
else {
    console.log( "you rebel!");
}

// execute above code in console


//Simple if statements are sometimes written without curly braces

if ( answer == 'YES' )    console.log( "you said Yes!" );


// terse if statements for booleans
var answer = true;
if (answer)    console.log( "true!" );

//or
if (!answer)    console.log( "false" );

// conditional or tieranary operator

answer === true ?  console.log( "true" : console.log( "false" );

//use tieranary to set a variable

var myresult = (answer === true ? "true" : "false" );

