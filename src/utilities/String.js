/*
 * Copyright 2017-present, DoorTwoDoor, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * String module.
 *
 * @module String
 */

import ShortID from 'shortid';

/**
  * Capitalises the first character of a string.
  * 
  * @memberof String
  * @public
  */
function capitalise(string) {
  /*
   * Destructures the first character and the rest of the characters from the
   * string.
   */
  const [ first, ...rest ] = string;

  return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
}

/**
 * Generates a non-sequential, short and unique ID.
 * 
 * @memberof String
 * @public
 */
function generateID() {
  return ShortID.generate();
}

export {
  capitalise,
  generateID,
};
