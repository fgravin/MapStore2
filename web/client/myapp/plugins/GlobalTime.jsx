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
const assign = require('object-assign');

let GlobalTimePlugin = connect((state) => ({
        time: state.globaltime.value,
        min: state.globaltime.min,
        max: state.globaltime.max,
        format: state.globaltime.format
    }),
    {
        onChange: modify
    })(require('../components/TimePicker'))

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
    GlobalTimePlugin: assign(GlobalTimePlugin, {
        DrawerMenu: {
            name: 'globaltime',
            position: 0,
            glyph: "time",
            buttonConfig: {
                buttonClassName: "square-button no-border",
                tooltip: "toc.layers"
            },
            priority: 1
        }
    }),
    reducers: {
        globaltime: require('../reducers/globaltime')
    }
};
