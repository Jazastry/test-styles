const form = {
  items: [
    {
      title: "Form",
      values: [
        {
          label: "checkbox",
          labelText: "I am checkbox",
          inputType: "checkbox",
        },
        { label: "radio", labelText: "Yes", inputType: "radio", name:"question" },
        { label: "radio", labelText: "No", inputType: "radio", name:"question" },

        {
          input: "input",
          inputType: "text",
          placeholder: "Text input",
        },
        {
          control: "has-icons-left has-icons-right",
          input: "input is-small is-warning",
          inputType: "email",
          items: [
            { icon: "is-small is-left", i: "fas fa-envelope" },
            { icon: "is-small is-right", i: "fas fa-check" },
          ],
        },

        {
          control: "has-icons-left has-icons-right",
          input: "input",
          inputType: "email",
          placeholder: "Email",
          items: [
            { icon: "is-small is-left", i: "fas fa-envelope" },
            { icon: "is-small is-right", i: "fas fa-check" },
          ],
        },
        {
          control: "has-icons-left has-icons-right",
          input: "input is-medium",
          inputType: "email",
          placeholder: "Email",
          items: [
            { icon: "is-small is-left", i: "fas fa-envelope" },
            { icon: "is-small is-right", i: "fas fa-check" },
          ],
        },
        {
          control: "has-icons-left has-icons-right",
          input: "input is-large is-danger",
          inputType: "email",
          placeholder: "Email",
          items: [
            { icon: "is-small is-left", i: "fas fa-envelope fa-lg" },
            {
              icon: "is-small is-right",
              i: "fas fa-exclamation-triangle fa-lg",
            },
          ],
        },
        {
          externalLabel: true,
          labelText: "Extra small input",
          control: "has-icons-left",
          input: "input is-success",
          inputType: "email",
          placeholder: "Extra small",
          items: [
            { icon: "is-small is-left", i: "fas fa-envelope fa-xs" },
          ],
        },
      ],
    },
  ],
};
module.exports = form;
