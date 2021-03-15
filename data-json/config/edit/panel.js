panel = {
  items: [
    {
      class: "parent",
      color: "success",
      headingText: "758 Master relations",
      level: [
        {
          number: "0 is-active",
          name: "DS Smith Almelo",
          type: "Plant",
        },
        {
          number: "1",
          name: "IO1",
          type: "Inverter",
        },
        {
          number: "2",
          name: "9090_string1",
          type: "String",
          last: true,
        },
        {
          number: "2",
          name: "9090_string2",
          type: "String",
          last: true,
        },
        {
          number: "2",
          name: "9090_string3",
          type: "String",
          last: true,
        },
      ],
    },
    {
      expandId: "js--expand-master-edit",
      class: "relation",
      color: "success",
      headingText: "1 Master relation",
      level: [
        {
          number: "0",
          name: "Bink",
          type: "Plant",
          last: true,
        },
      ],
    },
    {
      expandId: "js--expand-servant-edit",
      class: "relation",
      color: "danger",
      headingText: "4 Servant relations",
      level: [
        {
          number: "0",
          name: "Weather",
          type: "Weather",
        },
        {
          number: "1",
          name: "Irradiance",
          type: "Signal",
          last: true,
        },
        {
          number: "",
          name: "Tracker ABC",
          type: "Tracker",
          last: true,
        },
        {
          number: "",
          name: "API-connector",
          type: "connector",
          last: true,
        },
        {
          number: "",
          name: "Dust sensor",
          type: "Sensor",
          last: true,
        },
      ],
    },
  ],
};

module.exports = panel;
