const PropTypes = require('prop-types');
/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

require('./timepicker.css');
const moment = require('moment');

class TimePicker extends React.Component {
    static propTypes = {
        time: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]),
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        format: PropTypes.string,
        min: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired,
        max: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.instanceOf(moment)]).isRequired
    };

    static defaultProps = {
        time: new Date(),
        onChange: () => {},
        disabled: false,
        format: 'DD-MM-YYYY'
    };

    handleOnChange = (event) => {
        const newDate = moment(parseInt(event.target.value)).toDate();
        return this.props.onChange(newDate);
    }

    render() {
        return (
            <div className="time-picker">
                <div>{moment(this.props.time).format(this.props.format)}</div>
                <input type="range"
                    disabled={this.props.disabled}
                    min={moment(this.props.min).valueOf()}
                    max={moment(this.props.max).valueOf()}
                    value={moment(this.props.time).valueOf()}
                    onChange={this.handleOnChange}
                />
            </div>);
    }
}

module.exports = TimePicker;
