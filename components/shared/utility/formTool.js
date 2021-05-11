export const updateObject = (state, updatedObject) => {
    return {
      ...state,
      ...updatedObject
    };
  };
  
export const checkValidity = (value, rules) => {
  if (!rules) return;
  let isValid = false;
  let errors = [];

  if (rules.required) {
    isValid = value.trim() !== "";
    !isValid && errors.push("required field");
  }

  if (rules.minLength) {
    isValid = value.length > rules.minLength
    !isValid && errors.push("not enough characters");
  }

  if (rules.email) {
      isValid = value.includes("@" && ".");
      !isValid && errors.push("requires valid email address");
    }
  return [isValid, errors];
};