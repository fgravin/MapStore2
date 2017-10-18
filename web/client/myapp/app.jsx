/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');

const startApp = () => {
  const ConfigUtils = require('../utils/ConfigUtils');
  const MyApp = require('./containers/MyApp');

  // get the app config from the appConfig.js file
  const {pluginsDef, initialState, storeOpts, appEpics = {}} = require('./appConfig');

  // this is the redux store that will be used
  const appStore = require('../stores/StandardStore').bind(null, initialState, {
    maptype: require('../reducers/maptype'),
    maps: require('../reducers/maps')
  }, appEpics);

  // initial action: not much
  const initialActions = [];

  const appConfig = {
    storeOpts,
    appEpics,
    appStore,
    pluginsDef,
    initialActions
  };

  ReactDOM.render(
    <MyApp {...appConfig}/>,
    document.getElementById('container')
  );
};

// go!
startApp();
