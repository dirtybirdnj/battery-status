"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world lets get charged up",
        input: event,
      },
      null,
      2
    ),
  };
};

const listChargers = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Index list of all chargers",
        input: event,
      },
      null,
      2
    ),
  };
};

const addCharger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Index list of all chargers",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  hello,
  index
}
