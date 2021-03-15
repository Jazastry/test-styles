const typography = {
  items: [
    {
      title: "Modify the font-size",
      values: [
        { name: "is-size-0", uom: "5rem", class: "is-custom" },
        { name: "is-size-1", uom: "3rem" },
        { name: "is-size-2", uom: "2.5rem" },
        { name: "is-size-3", uom: "2rem" },
        { name: "is-size-4", uom: "1.5rem" },
        { name: "is-size-5", uom: "1.25rem" },
        { name: "is-size-6", uom: "1rem" },
        {
          name: "is-size-small",
          uom: "0.875rem == <small />",
          class: "is-custom",
        },
        { name: "is-size-7", uom: "0.75rem" },
        { name: "is-size-8", uom: "0.65rem", class: "is-custom" },
        { name: "is-size-9", uom: "0.4rem", class: "is-custom" },
        { name: "is-size-10", uom: "0.3rem", class: "is-custom" },
      ],
    },
    {
      title: "Transform the text",
      values: [
        { name: "is-capitalized" },
        { name: "is-lowercase" },
        { name: "is-uppercase" },
      ],
    },
    {
      title: "Align the text",
      values: [
        { name: "has-text-centered" },
        { name: "has-text-vcentered", class: "is-custom" },
        { name: "has-text-justified" },
        { name: "has-text-left" },
        { name: "has-text-right" },
      ],
    },
  ],
};
module.exports = typography;
