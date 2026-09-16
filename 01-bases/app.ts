// Crear interfaces
interface Automovil {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Automovil): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil2: Automovil = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir: boolean;
  comer: boolean;
  llorar: boolean;
}
const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface Poblacion {
  (ciudadanos: string[]): number;
}
const ciudadGotica: Poblacion = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string,
  ) {}
  imprimirBio() {}
}
