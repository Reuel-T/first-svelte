<script>
	import { count } from './stores.js';
	import { time } from './stores.js';
	import { elapsed } from './stores.js';
	import {count as newCount} from './stores-new.js';
	import { name, greeting } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);

	let count_value;

  //we subscribe the count_value to the value stored in the count store
	//this is the simple way, without using an auto subscribe
	/* count.subscribe((value) => {
		count_value = value;
	}); */
</script>

<h1>The count is {$count}</h1>
<h1>The time is {formatter.format($time)}</h1>

<h1>The New Count is {$newCount}</h1>

<button on:click={newCount.increment}>+</button>
<button on:click={newCount.decrement}>-</button>
<button on:click={newCount.reset}>reset</button>

<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<!--
	<Incrementer />
	<Decrementer />
	<Resetter />
-->

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => {$name += "!"}}>
	Add exclamation mark!
</button>