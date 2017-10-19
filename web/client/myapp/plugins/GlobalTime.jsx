/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {modify} = require('../actions/globaltime');

const {connect} = require('react-redux');
const moment = require('moment');


/**
  * Global Time Plugin. Allows modifying the "time" parameter for all layers
  * simultaneously.
  * @class  TimePicker
  * @memberof plugins
  * @static
  * @example
  * {name: "TimePicker"}
  *
  */
module.exports = {
    GlobalTimePlugin: connect(
        (state) => ({
            time: state.globaltime.value,
            min: moment(state.globaltime.min, state.globaltime.format),
            max: moment(state.globaltime.max, state.globaltime.format),
            format: state.globaltime.format
        }),
        {
            onChange: modify
        }
    )(require('../components/TimePicker')),
    reducers: {
        globaltime: require('../reducers/globaltime')
    }
};
