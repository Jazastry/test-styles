const card = {
  items: [
    {
      cardTitle: "Site name",
      imageSrc: "/images/wheather/sun.svg",
      altImage: "Weather icon",
      values: [
        {
          items: [
            {
              name: "Irradiance",
              i: "icon-solar-irradiance",
              value: "2000",
              uom: "W/m&#178",
            },
            {
              name: "Power",
              chart: "gauge",
              value: 100,
              min: 100,
              max: 200,
              uom: "MW",
            },
          ],
        },
        {
          items: [
            {
              name: "Actual vs Budget",
              chart: "bar",
              value: 500,
              min: 500,
              max: 1000,
              uom: "&percnt;",
            },
            {
              name: "EPI",
              chart: "epi",
              value: 200,
              min: 500,
              max: 1000,
              uom: "&percnt;",
              color: "has-background-success",
            },
          ],
        },
      ],
    },
  ],
};
module.exports = card;
