function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id no es válido, debe estar entre 1 y 800");
      } else {
        originalMethod();
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string): PropertyDescriptor {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Daniela";
      },
      set() {
        if ((this, eval)) {
          //console.log(this,eval)
          Object.defineProperty(this, propertyKey, {
            value: eval,
            writable: !isWritable,
            enumerable: false,
          });
        }
      },
    };

    return descriptor;
  };
}

@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly(false)
  public publicApi: string = "https://pokeapi.co/api/v2/";
  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en BF ${id}`);
  }
}
