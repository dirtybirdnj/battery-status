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

const index = async (event) => {
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

module.exports = {
  hello,
  index
}
