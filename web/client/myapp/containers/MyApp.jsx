/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const {Provider} = require('react-redux');
const PropTypes = require('prop-types');

const {changeBrowserProperties} = require('../../actions/browser');
const {localConfigLoaded} = require('../../actions/localConfig');
var loadMapConfig = require('../../actions/config').loadMapConfig;

const ConfigUtils = require('../../utils/ConfigUtils');
const PluginsUtils = require('../../utils/PluginsUtils');
const MapViewer = require('../../containers/MapViewer');

const assign = require('object-assign');
const url = require('url');

// const TimePicker = require('../components/TimePicker');
// const moment = require('moment');

const urlQuery = url.parse(window.location.href, true).query;

class MyApp extends React.Component {
  static propTypes = {
    appStore: PropTypes.func,
    pluginsDef: PropTypes.object,
    storeOpts: PropTypes.object,
    initialActions: PropTypes.array,
    onStoreInit: PropTypes.func
  };

  static defaultProps = {
    pluginsDef: {plugins: {}, requires: {}},
    initialActions: [],
    appStore: () => ({dispatch: () => {}}),
    onStoreInit: () => {}
  };

  state = {
    store: null
  };

  componentWillMount() {
    // use config in url query if available
    if (urlQuery.localConfig) {
      ConfigUtils.setLocalConfigurationFile(urlQuery.localConfig + '.json');
    }

    // load configuration (from localConfig.json by default)
    ConfigUtils.loadConfiguration().then((config) => {
      const opts = assign({}, this.props.storeOpts, {
        initialState: config.initialState || {defaultState: {}, mobile: {}}
      });
      this.store = this.props.appStore(this.props.pluginsDef.plugins, opts);
      this.props.onStoreInit(this.store);
      this.setState({
        store: this.store
      });

      // get configuration file url (defaults to config.json on the app folder)
      const { configUrl, legacy } = ConfigUtils.getConfigurationOptions(urlQuery, 'config', 'json');

      // dispatch an action to load the configuration from the config.json file
      this.store.dispatch(loadMapConfig(configUrl, legacy));

      // dispatch config in store
      this.store.dispatch(changeBrowserProperties(ConfigUtils.getBrowserProperties()));
      this.store.dispatch(localConfigLoaded(config));
    });

  }

  render() {
    const plugins = PluginsUtils.getPlugins(this.props.pluginsDef.plugins);
    const {pluginsDef, appStore, initialActions, appComponent, ...other} = this.props;

    // render a map viewer with the defined plugins
    return this.state.store ?
      <Provider store={this.state.store}>
        {/* <TimePicker min={moment().subtract(1, 'month')} max={moment().add(1, 'month')}
          onChange={time => console.log(time)}
         /> */}
        <MapViewer params={{mapType: "openlayers", mapId: "map"}} plugins={plugins}/>
      </Provider>
      : null;
  }
}

module.exports = MyApp;
