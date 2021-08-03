let entrada = prompt("Ingrsar un dato");
//repetimos con while hasta que el usuario ingresa esc
while (entrada !="ESC"){ 
    document.write(`<p> El usuario ingresó ${entrada} </p>`);

    entrada = prompt ("Ingresar otro dato");
}

let repetir = false;

do { 
    document.write("Esto se va a ejecutar por lo menos una vez");
} while (repetir);

