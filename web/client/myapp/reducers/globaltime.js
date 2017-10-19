/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

var {MODIFY_GLOBAL_TIME} = require('../actions/globaltime');
const moment = require('moment');
const assign = require('object-assign');


/**
 * stores the global time value, used by layers as a parameter
 * @memberof reducers
 * @param  {Object} state the initial state
 * @param  {} action  the action gets `MODIFY_GLOBAL_TIME`
 * @return {Object} the new state
 * @example
 * {
 *  mapType: "leaflet"
 * }
 */
function globaltime(state = {}, action) {
    switch (action.type) {
        case MODIFY_GLOBAL_TIME:  return assign(state,
            {value: moment(action.value)});
        default: return state;
    }
}

module.exports = globaltime;
