const panel = {
  items: [
    {
      title: "Panel",
      values: [
        {
          class: "",
          heading: "",
          items: [
            {
              child: "button",
              block: "is-active",
              button: "has-background-primary is-borderless",
              text: "Panel-block with button element",
            },
            {
              child: "panel-icon",
              panelIcon: "is-small",
              text: "Panel-block with panel-icon element and 'i' partial",
            },
            {
              type: "label",
              child: "label",
              inputType: "checkbox",
              block: "2 is-hoverable--light",
              icon: "fas fa-eye-slash",
              text: "Panel block of type label",
            },
            {
              child: "control",
              control: "has-icons-left",
              input: "input",
              inputType: "text",
              placeholder: "Panel-block of type control with input type text",
              icon: "is-left",
              icon: "fas fa-eye",
              "aria-hidden": "true",
            },
          ],
        },
      ],
    },
  ],
};
module.exports = panel;
