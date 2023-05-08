<!-- 
  Svelte's reactivity is triggered by assignments, 
  using array methods like push and splice won't automatically cause updates.
-->

<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		/* Simple Hacky way of doing an update
      numbers.push(numbers.length + 1);
      numbers = numbers; 
    */

    /* another way to do the update
      numbers = [...numbers, numbers.length+1]
      You can use similar patterns to replace pop, shift, unshift and splice 
    */

    /* 
        Assignments to properties of arrays and objects — 
        e.g. obj.foo += 1 or array[i] = x 
        — work the same way as assignments to the values themselves. 
      */
    numbers[numbers.length] = numbers.length + 1;
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<p>
  A simple rule of thumb: the name of the updated variable must appear on the left hand side of the assignment. For example this...
</p>

<code>
  const foo = obj.foo;<br>
  foo.bar = 'baz';
</code>
