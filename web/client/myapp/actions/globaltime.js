const MODIFY_GLOBAL_TIME = 'MODIFY_GLOBAL_TIME';
/**
 * Set a new value for the global time.
 * @memberof actions.globaltime
 * @param  {Object} value         new global time value (Date or moment.js object)
 */
function modify(value) {
    return {
        type: MODIFY_GLOBAL_TIME,
        value
    };
}

/**
 * actions for global time
 * @name global time
 * @memberof actions
 */
module.exports = {
    MODIFY_GLOBAL_TIME,
    modify
};
