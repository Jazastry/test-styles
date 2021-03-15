const formExtension = {
  items: [
    {
      title: "Form-extension",
      values: [
        {
          id: "checkboxExtension-0",
          input: "",
          inputType:"checkbox",
          labelText: "Check me",
          inputName:"Check me"

        },
        {
          id: "checkboxExtension-1",
          input: "is-white is-rtl",
          inputType:"checkbox",
          labelText: "Check me right to left",
          checked: "checked",
          inputName: "Check me right to left",
        },
        {
          id: "checkboxExtension-2",
          input: "has-background-color is-primary",
          inputType:"checkbox",
          labelText: "Check me background",
          checked: "checked",
          inputName: "Check me background color",

        },
        
        {
          id: "checkboxExtension-0-radio",
          input: "",
          inputType:"radio",
          labelText: "Option 1",
          checked: "checked",
          inputName:"option"
        },
        {
          id: "checkboxExtension-1-radio",
          input: "is-white",
          inputType:"radio",
          labelText: "Option 2",
          inputName:"option"
        },
        {
          id: "checkboxExtension-2-radio",
          input: "has-background-color is-primary is-rtl",
          inputType:"radio",
          labelText: "Yes",
          inputName:"question",
          checked:"checked"
        },
        {
          id: "checkboxExtension-3-radio",
          input: "has-background-color is-primary is-rtl",
          inputType:"radio",
          labelText: "No",
          inputName:"question"
        },

      ],
    },
  ],
};
module.exports = formExtension;
