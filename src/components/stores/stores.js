//stores are like svelte's context api

/* 
  A store is simply an object with a subscribe method 
  that allows interested parties to be notified whenever 
  the store value changes. In StoresWrapper.svelte, count is a store, 
  and we're setting count_value in the count.subscribe callback.

  Open stores.js to see the definition of count. 
  It's a writable store, which means it has set and update 
  methods in addition to subscribe.
*/

import { writable } from 'svelte/store';

import { readable } from 'svelte/store';

import { derived } from 'svelte/store';


export const count = writable(0);

//initial value
//start function that takes a set callback. It is called when the store gets its first subscriber
//stop function is run when the last subscriber unsubscribes
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});


const start = new Date();

export const elapsed = derived(
  time,
  // @ts-ignore
  ($time) => Math.round(($time-start)/1000)
  );
  
  //You can create a store whose value is based on the value of one or more 
  //other stores with derived.Building on our previous example, 
  //we can create a store that derives the time the page has been open
  
export const name = writable('world');

export const greeting = derived(name, ($name) => `Hello ${$name}`);