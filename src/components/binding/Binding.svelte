<script>
  import {marked} from 'marked';

  let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;

	let name = 'world';
  let a = 1;
	let b = 2;
  let yes = false;

  let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

  //Because we haven't set an initial value of selected, the binding will set it to the default value (the first in the list) automatically. Be careful though — until the binding is initialised, selected remains undefined, so we can't blindly reference e.g. selected.id in the template.
	let selected;

	let answer = '';

	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
  let scoops = 1;
  //checkbox inputs in the same group form an array of selected values.
  let flavours = [];

  const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<!--Two way binding the value of the input-->

<input bind:value={name}/>

<h1>Hello {name}!</h1>

<!--Multiple inputs can be bound to a single variable-->
<label>
	<input type="number" bind:value={a} min="0" max="10" />
	<input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
	<input type="number" bind:value={b} min="0" max="10" />
	<input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>

<label>
  <input type="checkbox" bind:checked={yes} />
  Yes! Send me regular email spam
</label>

{#if yes}
  <p>
    Thank you. We will bombard your inbox and sell
    your personal details.
  </p>
{:else}
  <p>
    You must opt in to continue. If you're not
    paying, you're the product.
  </p>
{/if}
<button disabled={!yes}>Subscribe</button>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <select
    bind:value={selected}
    on:change={() => (answer = '')}
  >
    <!--svelte can bind objects themselves-->
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button disabled={!answer} type="submit">
    Submit
  </button>
</form>

<p>
  selected question {selected
    ? selected.id
    : '[waiting...]'}
</p>

<h2>Size</h2>

{#each [1, 2, 3] as number}
  <label>
    <input
      type="radio"
      name="scoops"
      value={number}
      bind:group={scoops}
    />

    {number} {number === 1 ? 'scoop' : 'scoops'}
  </label>
{/each}

<h2>Flavours</h2>
<!--
  {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
  <label>
    <input
    type="checkbox"
    name="flavours"
    value={flavour}
    bind:group={flavours}
    />
    
    {flavour}
  </label>
  {/each}
-->

<select multiple bind:value={flavours}>
  {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
    <option>{flavour}</option>
  {/each}
</select>

{#if flavours.length === 0}
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
    of {formatter.format(flavours)}
  </p>
{/if}

<div class="grid">
	input
	<textarea bind:value></textarea>

	output
	<div>{@html marked(value)}</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}
</style>
