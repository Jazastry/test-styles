const quickview = {
  signals: {
    items: [
      {
        expanderName: "AC",
        values: [
          {
            state: "is-active",
            checkboxLabel: "Active power",
            checkboxUom: "kW",
            checkboxValue: "2.9",
            checked: "checked",
          },
          {
            checkboxLabel: "Daily active",
            checkboxUom: "kWh",
            checkboxValue: "2.9",
          },
          {
            checkboxLabel: "Weekly active",
            checkboxUom: "kWh",
            checkboxValue: "432.6",
          },
          {
            checkboxLabel: "Monthly active",
            checkboxUom: "MWh",
            checkboxValue: "130.4",
          },
          {
            checkboxLabel: "Early active",
            checkboxUom: "MWh",
            checkboxValue: "14 222.7",
          },
        ],
      },
      {
        expanderName: "Weather forecast",
        values: [
          {
            checkboxLabel: "Ghi",
            checkboxUom: "W/m&#178;",
            checkboxValue: "2.9",
          },
          {
            checkboxLabel: "Air temperature",
            checkboxUom: "&#8451;",
            checkboxValue: "28.4",
          },
          {
            checkboxLabel: "Cloud opacity",
            checkboxUom: "0-1",
            checkboxValue: "60",
          },
          {
            checkboxLabel: "DNI",
            checkboxUom: "W/m&#178;",
            checkboxValue: "0",
          },
          {
            checkboxLabel: "EBH",
            checkboxUom: "W/m&#178;",
            checkboxValue: "0",
          },
          {
            checkboxLabel: "POA",
            checkboxUom: "W/m&#178;",
            checkboxValue: "0",
          },
          {
            checkboxLabel: "Relative humidity",
            checkboxUom: "rh",
            checkboxValue: "214.2",
          },
          {
            checkboxLabel: "Wind direction",
            checkboxUom: "deg",
            checkboxValue: "2.6",
          },
          {
            checkboxLabel: "Wind speed",
            checkboxUom: "m/s",
            checkboxValue: "15",
          },
          {
            checkboxLabel: "Weather",
            checkboxValue: "partly cloudy",
          },
        ],
      },
      {
        expanderName: "Weather observed",
        values: [
          {
            checkboxLabel: "Air temperatures",
            checkboxUom: "&#8451;",
            checkboxValue: "28.4",
          },
          {
            checkboxLabel: "Apparent elevation",
            checkboxUom: "deg",
            checkboxValue: "38.2",
          },
          {
            checkboxLabel: "Apparent zenith",
            checkboxUom: "deg",
            checkboxValue: "53.7",
          },
        ],
      },
    ],
  },
  parameters: {
    items: [
      {
        values: [
          {
            infoName: "Location short name",
          },
          {
            infoName: "Timezone",
            infoValue: "Europe/Amsterdam",
          },
        ],
      },
      {
        expanderName: "nominals",
        values: [
          {
            infoName: "AC Power",
            infoUom: "W",
            infoValue: "234000000",
          },
          {
            infoName: "DC Power",
            infoUom: "W",
            infoValue: "612000000",
          },
        ],
      },
      {
        expanderName: "picture url",
      },
      {
        toggable: true,
        expanderName: "panel orientation",
        values: [
          {
            items: [
              {
                infoName: "Tilt",
                infoUom: "deg",
                infoValue: "10",
              },
              {
                infoName: "Azimuth",
                infoUom: "deg",
              },
            ],
          },
          {
            items: [
              {
                infoName: "Azimuth",
                infoUom: "deg",
              },
              {
                infoName: "DC Power",
                infoUom: "W",
                infoValue: "1500",
              },
            ],
          },
          {
            stateIsToggled: true,
            items:[{}]
          },
        ],
      },
    ],
  },
};

module.exports = quickview;
