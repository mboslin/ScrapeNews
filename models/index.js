
//  Export an object for mongodb connection and models

"use strict";

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/newsHeadlines",
  Article: require("./Article"),
  Comment: require("./Comment"),
};
