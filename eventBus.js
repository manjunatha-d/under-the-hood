/**
 * In its basic form, an event bus must support:
 *
 * 1. Subscribing for an event
 * 2. Broadcasting an event
 * 3. Canceling subscription
 */

const EventBus = {
  // store all the events and their listeners
  // Object Shape: { 'event1': [listeners], 'event2': [listeners] }
  eventListeners: {},

  // Invoke all the listeners of an event
  broadcast(event) {
    for (let key in EventBus.eventListeners) {
      if (key === event) {
        // fire all the listeners for a given event
        for (listener of EventBus.eventListeners[key]) {
          listener();
        }
      }
    }
  },

  // Register an event listener
  on(event, listener) {
    // An event can have multiple listeners.
    EventBus.eventListeners[event] = EventBus.eventListeners[event] || [];

    // Append to the list of existing listeners
    EventBus.eventListeners[event] = [
      ...EventBus.eventListeners[event],
      listener,
    ];

    // return a function that lets you unregister
    return function unsubscribe() {
      console.log('\n\nUnsubscribing for the event ==>', event, '\n\n');
      EventBus.eventListeners[event] = EventBus.eventListeners[event].filter(
        exisingListener => exisingListener !== listener,
      );
    };
  },
};

// Event 1
const unsubscribeEvent1 = EventBus.on('Event1', () =>
  console.log('\bEvent 1 Handler'),
);

// Multiple handlers for the same event
EventBus.on('Event2', () => console.log('Event2 Handler'));
EventBus.on('Event2', () => console.log('Another handler for Event2'));

// Broadcast event
EventBus.broadcast('Event1');
EventBus.broadcast('Event2');

// Unsubscribe from event 1
unsubscribeEvent1();

// nothing happens when you broadcast event 1, we've already unsubscribed
EventBus.broadcast('Event1');

// Event listeners for 'Event2' still work
EventBus.broadcast('Event2');
