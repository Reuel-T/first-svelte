<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  //createEventDispatcher must be called when the component is first instantiated — you can't do it later inside e.g. a setTimeout callback. This links dispatch to the component instance.
	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

<button on:click={sayHello}>
	Click to say hello
</button>

<!-- 
  You can also try changing the event name to something else. 
  For instance, change dispatch('message') to dispatch('greet') in 
  Inner.svelte and change the attribute name from on:message to 
  on:greet in Outer.svelte. 
-->