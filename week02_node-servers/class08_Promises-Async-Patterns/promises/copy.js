FUNCTION MYASYNCFN() {

    VAR CALLBACK = NULL;

    SETTIMEOUT( () => {
        // WE NEED A CALLBACK BY THE TIME
        // SETTIMEOUT CALLBACK HAPPENS
        IF ( CALLBACK ) CALLBACK();
    }, 1000);


    // INSTEAD, RETURN AN OBJECT THAT HAS
    // FUNCTION THAT SETS THE CALLBACK
    RETURN {
        THEN( CB ){
            CALLBACK = CB;
        }
    };

}

MYASYNCFN().THEN(() => {
    CONSOLE.LOG( 'ALL DONE!' );
});