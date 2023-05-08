<script>
	let count = 0;

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<!--Conditional Rendering-->
{#if count > 10}
  <p>Count is Greater than 10 ({count})</p>
  {:else if count < 5}
  <p>Count is less than 5</p>
  {:else}
  <p>Count is between 0 and 10</p>
{/if}

<!--
  A # character always indicates a block opening tag. 
  A / character always indicates a block closing tag. 
  A : character, as in {:else}, indicates a block continuation tag.
-->