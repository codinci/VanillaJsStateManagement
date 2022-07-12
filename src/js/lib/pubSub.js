export default class PubSub {
    constructor() {
        this.events = {};
    }

    /**
     * Function either creates a new instance of an event
     * or pushes in a callback into the existing collection
     *
     * @param {string} event
     * @param {function} callback
     * @returns {number} A count of callbacks for this event
    */
    subscribe(event, callback) {
        let self = this;

        if(!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }

        return self.events[event].push(callback);
    }

    /**
     * Function that loops through each event if it has
     * callbacks and calls it
     *
     *
     * @param {string} event
     * @param {object} [data={}]
     * @returns {array} The callbacks for this event, or an empty array if no event exists
     */
    publish(event, data = {}) {
        let self = this;

        if(!self.events.hasOwnProperty(event)) {
            return [];
        }

        return self.events[event].map(callback => callback(data));
    }
}