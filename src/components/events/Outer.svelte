<!--
  Instead of lifting state like in React, 
  you can make use of the ability to forward events
-->

<!-- 
  there's now an Outer.svelte component that contains <Inner/>.
  One way we could solve the problem is adding createEventDispatcher 
  to Outer.svelte, listening for the message event, 
  and creating a handler for it:

  so Svelte gives us an equivalent shorthand — an on:message event 
  directive without a value means 'forward all message events'.
 -->

<script>
	import Inner from './Inner.svelte';
</script>

<Inner on:message/>
