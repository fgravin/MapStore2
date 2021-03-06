/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const {isEmpty} = require('lodash');
const assign = require('object-assign');
const {createPagedUniqueAutompleteStream} = require('../autocomplete');
const AutocompleteEditor = require('../../components/data/featuregrid/editors/AutocompleteEditor');
const rxjsConfig = require('recompose/rxjsObservableConfig').default;
const {setObservableConfig, mapPropsStreamWithConfig} = require('recompose');
setObservableConfig(rxjsConfig);
const mapPropsStream = mapPropsStreamWithConfig(rxjsConfig);
const props = {
    attribute: "STATE_NAME",
    performFetch: false,
    typeName: "topp:states",
    maxFeatures: 5,
    currentPage: 1,
    value: "",
    url: "base/web/client/test-resources/wps/pageUniqueResponse.json",
    delayDebounce: 0
};
describe('\nautocomplete Observables', () => {
    beforeEach((done) => {
        document.body.innerHTML = '<div id="container"></div>';
        setTimeout(done);
    });

    afterEach((done) => {
        ReactDOM.unmountComponentAtNode(document.getElementById("container"));
        document.body.innerHTML = '';
        setTimeout(done);
    });

    it('test with fake stream, performFetch=false', (done) => {
        const ReactItem = mapPropsStream(props$ =>
            createPagedUniqueAutompleteStream(props$).map(p => {
                if (!isEmpty(p) && p.fetchedData !== undefined) {
                    expect(p.fetchedData.values.length).toBe(0);
                    expect(p.fetchedData.size).toBe(0);
                    expect(p.busy).toBe(false);
                    done();
                }
            })
        )(AutocompleteEditor);
        const item = ReactDOM.render(<ReactItem {...assign({}, props)}/>, document.getElementById("container"));
        expect(item).toExist();
    });

    it('test with fake stream, performFetch=true', (done) => {
        const ReactItem = mapPropsStream(props$ =>
            createPagedUniqueAutompleteStream(props$).map(p => {
                if (!isEmpty(p) && p.fetchedData !== undefined ) {
                    expect(p.fetchedData.values.length).toBe(2);
                    expect(p.fetchedData.values[0]).toBe("value1");
                    expect(p.fetchedData.size).toBe(2);
                    expect(p.busy).toBe(false);
                    done();
                }
            })
        )(AutocompleteEditor);
        const item = ReactDOM.render(<ReactItem {...assign({}, props, {performFetch: true})}/>, document.getElementById("container"));
        expect(item).toExist();
    });

    it('test a failure case intercepted into catch statement ', (done) => {
        const ReactItem = mapPropsStream(props$ =>
            createPagedUniqueAutompleteStream(props$).map(p => {
                if (!isEmpty(p) && p.fetchedData !== undefined ) {
                    expect(p.fetchedData.values.length).toBe(0);
                    expect(p.fetchedData.size).toBe(0);
                    expect(p.busy).toBe(false);
                    done();
                }
            })
        )(AutocompleteEditor);
        const item = ReactDOM.render(<ReactItem {...assign({}, props, {performFetch: true, url: "wrong"})}/>, document.getElementById("container"));
        expect(item).toExist();
    });
});
