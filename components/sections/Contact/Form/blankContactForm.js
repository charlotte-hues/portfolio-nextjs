const blankForm = {
    name: {
      pos: 0,
      fixed: {
        type: "text",
        placeholder: "name:",
        validation: {
          required: true,
        },
      },
      value: "",
      valid: false,
      errors: [],
      changed: false
    },
    email: {
      pos: 1,
      fixed: {
        type: "text",
        placeholder: "email:",
        validation: {
          required: true,
          email: true,
        },
      },
      value: "",
      valid: false,
      errors: [],
      changed: false
    },
    message: {
      pos: 2,
      fixed: {
        type: "text-area",
        placeholder: "message:",
        validation: {
          required: true,
          minLength: 5,
        },
      },
      value: "",
      valid: false,
      errors: [],
      changed: false
    }
  };

  export default blankForm;