<script>
	import { count } from './stores.js';

	function decrement() {
		// TODO decrement the count
    count.update((currentValue) => currentValue - 1)
	}
</script>

<button on:click={decrement}>
	-
</button>
