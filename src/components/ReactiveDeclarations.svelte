<!--
  I'm not sure how to describe this in my own words yet, here's the description from the docs
  
  Svelte automatically updates the DOM when your component's state changes. 
  Often, some parts of a component's state need to be computed from other parts 
  (such as a fullname derived from a firstname and a lastname), and recomputed 
  whenever they change.

  For these, we have reactive declarations. 
-->

<script>
	let count = 0;

  //Reactive Declaration
  $:doubled = count * 2; 
  /* 
    Svelte interprets to mean 're-run this code whenever any 
    of the referenced values change 
  */

  //not limited to declaring reactive values, we can also run code 
  $: console.log(`the count is ${count}`);

  //conditionals and code blocks in {} can also be done
  $: if(count >= 10){
    console.log(`count is over 10`);
  }

	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>