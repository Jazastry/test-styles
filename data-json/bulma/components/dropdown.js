const dropdown = {
  items: [
    {
      title: "Dropdown",
      values: [
        {
          class:"",
          button: "is-outlined has-text-vcentered",
          "aria-haspopup": true,
          "aria-controls": "left-aligned",
          textSpan: "Left aligned",
          icon: "is-small",
          i: "fas fa-angle-up fa-xs",
          "aria-hidden": true,
          menu:"has-min-width-100",
          content:"is-paddingless",
          items: [
            {
              type: "span",
              item: "",
              text: "Span item",
              "has-divider":true,
              divider:"m-0"
            },
            {
              type: "div",
              item: "",
              text: "Div item",
            },
            {
              type: "div",
              item: "",
              text: "Div item 2222",
            },
            {
              type: "span",
              item: "",
              text: "Span item",
            },
          ],
        },
      ],
    },
  ],
};
module.exports = dropdown;
