/*
  For all of the functions below, assume each function takes the following `person` object as its input. While the values of the object may change, the structure of it will always be the same.

  const person = {
    names: {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas"
    },
    address: {
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306"
    },
    numbers: [
      7185550921,
      7185558611
    ]
  }
*/

/**
 * getFirstName()
 * ---------------------
 * Return the `first` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFirstName(person);
 *  //> "Rachel"
 */
function getFirstName(person) {
  let firstName = person.names.first;
  return firstName;
  
}

/**
 * getLastName()
 * ---------------------
 * Return the `last` name of the inputted person.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getLastName(person);
 *  //> "Rojas"
 */
function getLastName(person) {
  let lastName = person.names.last;
  return lastName;
}

/**
 * getAddressStreet()
 * ---------------------
 * Return the `street` of the inputted person's `address`.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getAddressStreet(person);
 *  //> "697 Pine Drive"
 */
function getAddressStreet(person) {
  let addressStreet = person.address.street;
  return addressStreet;
}

/**
 * getCountOfPhoneNumbers()
 * ---------------------
 * Return a count of how many phone `numbers` the person has.
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getCountOfPhoneNumbers(person);
 *  //> 2
 */
function getCountOfPhoneNumbers(person) {
  return person.numbers.length;
}

/**
 * getFirstPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getFirstPhoneNumber(person);
 *  //> 7185550921
 */
function getFirstPhoneNumber(person) {
  let firstPhoneNumber = person.numbers[0];
  return firstPhoneNumber;
}

/**
 * getLastPhoneNumber()
 * ---------------------
 * Return the first phone number associated with the person.
 *
 * NOTE: There will always be at least one phone number.
 *
 * @param {Object} person
 * @returns {number}
 *
 * EXAMPLE:
 *  getLastPhoneNumber(person);
 *  //> 7185558611
 */
function getLastPhoneNumber(person) {
  let lastPhoneNumber = person.numbers[person.numbers.length-1];
  return lastPhoneNumber;
}

/**
 * getFullName()
 * ---------------------
 * Combine the `first`, `middle`, and `last` names to return the full name.
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullName(person);
 *  //> "Rachel Eleanor Rojas"
 */
function getFullName(person) {
  let fullName = person.names.first + " " + person.names.middle + " " + person.names.last;
  return fullName;
}

/**
 * getCityAndState()
 * ---------------------
 * Combine the `city` and `state` of the person's `address`.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getCityAndState(person);
 *  //> "Staten Island, NY"
 */
function getCityAndState(person) {
  let cityAndState = person.address.city + ", " + person.address.state;
  return cityAndState;
}

/**
 * getFullAddress()
 * ---------------------
 * Combine all of the `address` fields to create a full address for the person.
 *
 * NOTE: Pay attention to the formatting below.
 *
 * @param {Object} person
 * @returns {string}
 *
 * EXAMPLE:
 *  getFullAddress(person);
 *  //> "697 Pine Drive 2A, Staten Island, NY, 10306"
 */
function getFullAddress(person) {
  let fullAddress = person.address.street + " " + person.address.unit + ", " + person.address.city + ", " + person.address.state + ", " + person.address.zip;
  return fullAddress;
}

/**
 * getFlatObject()
 * ---------------------
 * Create a new object where all of the keys from the `names` and `address` objects are in the same object. You may leave the `numbers` array as is.
 * @param {Object} person 
 * @returns {Object}
 * 
 * EXAMPLE:
 *  getFlatObject(person);
 *  //> {
      first: "Rachel",
      middle: "Eleanor",
      last: "Rojas",
      street: "697 Pine Drive",
      unit: "2A",
      city: "Staten Island",
      state: "NY",
      zip: "10306",
      numbers: [7185550921, 7185558611],
    };
 */
function getFlatObject(person) {
  let flatObject = {
    first: person.names.first,
    middle: person.names.middle,
    last: person.names.last,
    street: person.address.street,
    unit: person.address.unit,
    city: person.address.city,
    state: person.address.state,
    zip: person.address.zip,
    numbers: person.numbers
  }
  return flatObject;
}

// Do not change the code below.
module.exports = {
  getFirstName,
  getLastName,
  getAddressStreet,
  getCountOfPhoneNumbers,
  getFirstPhoneNumber,
  getLastPhoneNumber,
  getFullName,
  getCityAndState,
  getFullAddress,
  getFlatObject,
};
