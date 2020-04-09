//writing switch statements

var answer = window.prompt( ' Type YES, NO, or MAYBE, then click ok');

switch(answer){
    case "YES" :
        console.log( "you said Yes!" );
        break;

    case "MAYBE" :
        console.log( "you said Maybe!" );
        break;

    case "NO" :
        console.log( "you said No!" );
        break;

    default :
        console.log( "you rebel!");
        break;
}

// execute above code in console


//switch staements will cascade if you don't use a break

var answer = window.prompt( ' Type YES, NO, or MAYBE, then click ok');

switch(answer){
    case "YES" :
        console.log( "you said Yes!" );

    case "MAYBE" :
        console.log( "you said Maybe!" );
        break;

    case "NO" :
        console.log( "you said No!" );
        break;

    default :
        console.log( "you rebel!");
        break;
}

// execute above code in console
