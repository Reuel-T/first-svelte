<script>
	import { count } from './stores.js';

	function increment() {
		// TODO increment the count
    count.update((currentValue) => currentValue + 1)
	}
</script>

<button on:click={increment}>
	+
</button>
