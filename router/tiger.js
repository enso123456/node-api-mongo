const _ = require("lodash");
const router = require("express").Router();

let tigers = [
  { id: 1, name: "Tom", age: 14, gender: "male" },
  { id: 2, name: "Tomy", age: 23, gender: "male" }
];

exports.getAll = function() {
  return tigers;
};

exports.create = function(newTiger) {
  tigers = [...tigers, newTiger];
  return newTiger;
};

exports.getTiger = function(id) {
  const tiger = _.find(tigers, { id: id });
  if (tiger) {
    return tiger;
  }
  return {};
};

exports.removeTiger = function(id) {
  tigers = tigers.filter(tiger => tiger.id !== id);
  return tigers;
};
