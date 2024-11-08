/* 
POO 


Clases : Se refieren a nuestro molde o plantilla para que podamos crear ojetos. Utiliza la palabra reservada class.
Constructor: Es una función obligatoria para crear objetos (cheff) atraves de caracteristicas especificas o atributos. 
Objetos: Es lo que construimos a traves de la clase y el constructor. 
Atributo : se refieren a las caracteristicas o propiedads de mi objeto(saludar, brincar, correr).
Instanciación: se refiere a cuando ya creamos la clase, el constructor y el objeto. 
Herencia : Cuenta con la palabra reservada extends. La herencia permite re utilizar el código de la clase padre en la clase hijo.
Plolimorfismo: El comportamiento de cada objeto de la isma clase a un metodo.
Encapsulamiento: Se refiere a encerrar y/o ocultar el código. 
Abstracción: Se refiere a ser muy especifícos con los objetos (resumir).
Modularidad: Nos permite reultilizar código, hacer modificaciones, tener orden y mantener el código.

Metodos estaticos: Utiliza la palabra reservada static, nos permite ejecutar una clasesin instanciar al objeto.  
Metodos accesores: Los métodos accesores, getters y setters, son métodos especiales que permiten controlar cómo se accede y modifica el valor de una propiedad de un objeto. Un getter devuelve el valor de una propiedad, mientras que un setter lo establece.

Principios SOLID: 
Principio de responsabilidad Unica (SRP): Se refiere a que cada que asignamos una clase, objeto, etc debe ser unica.
Principio de abierto y cerrado(OCP): SE refiere a que podemos extender el codigo ya existente deser necesario.

Principio de sustitución de Liskov: Se refiere a que podemos tener cualquier tipo de objeto dentro de mi clase y no se ve afectado el comportamiento del mismo. 
Principio de segregación de interfaces(ISP) : Se refiere a tener distintas interfaces.
Principio de investigación de dependencias(DIP) : Trabaja a traves de la abstracción para que el código no dependa de detalles especifícos.

Objetos JSON:
Javascript Object Notation
SE manejan a traves de clave-valor y no tienen metodos.

*/

class Ch47 { // Clase principal o clase padre 
    constructor(nombre, apellido, email, edad){ 
        this.name = nombre;
        this.lastname = apellido;
        this.email = email;
        this.age = edad;
        this.info = `Holi soy ${this.name} ${this.lastname}, mi correo es ${this.email} y mi edad es ${this.age}`;
    }

    infoIntegrantes(){ 
        console.log(this.info);
    }
}

class Instruccion extends Ch47 {
    constructor(nombre, apellido, email, edad, escolaridad){
        super(nombre, apellido, email, edad);
        this.grado = escolaridad;
    }

    static darSesiones(){
        console.log("Hoy no tiene sesión.");
    }
}

class Mentoria extends Ch47 {
    constructor(nombre, apellido, email, edad, telefono){
        super(nombre, apellido, email, edad);
        this.tel = telefono;
    }

    static darMentoria(){
        console.log("Tienes muchos mentees.");
    }
}

class Mentees extends Mentoria {
    constructor(nombre, apellido, email, edad, mentor){
        super(nombre, apellido, email, edad);
        this.mentor = mentor;
    }

    static menteeInfo(){
        console.log("Eres un mentee.");
    }
}

class Alumnos extends Ch47 {
    constructor(nombre, apellido, email, edad){
        super(nombre, apellido, email, edad);
    }

    static alumnoInfo(){
        console.log("Eres un alumno.");
    }
}

// Creando instancias de los objetos
const inte1 = new Ch47("Xaxiry", "Gonzalez", "xaxiry@gmail.com", 27); 
const inte2 = new Instruccion("Lily", "Aguirre", "lili@gmail.com", 30, "Licenciatura");
inte2.infoIntegrantes();
Instruccion.darSesiones();

const inte3 = new Mentoria("Eva", "Morales", "eva@gmail.com", 34, "123-456-789");
inte3.infoIntegrantes();
Mentoria.darMentoria();

const inte4 = new Mentees("Rosa", "Jaimes", "rosa@gmail.com", 26, "Eva");
inte4.infoIntegrantes();
Mentees.menteeInfo();

const inte5 = new Alumnos("Mike", "Morales", "mike@gmail.com", 25);
inte5.infoIntegrantes();
Alumnos.alumnoInfo();



let  user= {    //Declarar la variable tempral para ciertas especifícas funciones
    
    nombre: "Xaxiry",   
    apellido: "Gonzalez",


get fullName(){      //Devuelve el valor de una propiedad
    return`${this.nombre} ${this.apellido}` ;
    },

set fullName(value) { //Establece el valor de una propiedad
    [this.nombre, this.apellido] = value.split(" ");

    }
};

user.fullName = "Xaxiry Gonzalez";



alert(user.fullName);
alert(user.nombre);
alert(user.apellido);