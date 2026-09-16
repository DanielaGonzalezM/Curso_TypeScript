export {};

namespace Validations {
 export const validateText = (text: string): boolean => {
    if (text.length > 3) {
      return true;
    } else {
      return false;
    }
  };
}

console.log(Validations.validateText(""));