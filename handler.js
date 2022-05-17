"use strict";

const listChargers = async (event) => {

  const chargerList = [
    {
      id: "BTV_001",
      name: "BETA HQ Office Pad 1",
      description: "Located on the right back corner of the pad towards office door",
      status: "Idle",
      location: {
        lat: 44.466527,
        lng:-73.153787
      },
      networkProtocol: 'OCPP 1.6',
      public: false
    },
    {
      id: "BTV_002",
      name: "BETA HQ Office Pad 2",
      description: "Directly to the left of the landing pad on charging side of plane",
      status: "Idle",
      location: {
        lat: 44.466527,
        lng:-73.153787
      },
      networkProtocol: 'OCPP 1.6',
      public: false
    },
    {
      id: "BTV_003",
      name: "BETA HQ Garage 1",
      description: "Test charger in garage bay, left side of door",
      status: "Idle",
      location: {
        lat: 44.466761,
        lng: -73.154948
      },
      networkProtocol: 'OCPP 2.0',
      public: false
    },
    {
      id: "BTV_003",
      name: "BETA HQ Outside 1",
      description: "Outdoor unit for small equiptment and other low power requirement vehicles",
      status: "Idle",
      location: {
        lat: 44.466761,
        lng: -73.154948
      },
      networkProtocol: 'OCPP 1.5',
      public: false
    }
  ];

  return jsonFormat(200, "List of chargers", chargerList, event);
};

const addCharger = async (event) => {

  const newCharger = {
    name: "BETA HQ Parking 1",
    description: "Outdoor unit for employees and guests to use",
    status: "Idle",
    location: {
      lat: 44.466447,
      lng: -73.155287
    },
    networkProtocol: 'OCPP 2.0',
    public: true
  }

  return jsonFormat(200, "New charger created", newCharger, event);
};

const updateCharger = async (event) => {

  const updateCharger = {
    id: "BTV_003",
    description: "Outdoor unit for VIPs only",
    public: false
  }

  return jsonFormat(200, "Existing charger updated", updateCharger, event);
};

const removeCharger = async (event) => {

  const removedCharger = {
    name: "BETA HQ Parking 1",
    description: "Outdoor unit for VIPs only",
    status: "Idle",
    location: {
      lat: 44.466447,
      lng: -73.155287
    },
    networkProtocol: 'OCPP 2.0',
    public: true
  }

  return jsonFormat(200, "Existing charger removed", removedCharger, event);
};

const jsonFormat = function(statusCode, message, body, event){

  return {
    headers: { "content-type": "application/json" },
    statusCode: statusCode,
    body: JSON.stringify(
      {
        message: message,
        input: event,
        ...body
      },
      null,
      2
    )
  };
}

module.exports = {
  listChargers, addCharger, updateCharger, removeCharger
}
