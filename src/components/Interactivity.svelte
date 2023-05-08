<script>
  let count = 0;
  
  function increment(){
    count++;
  }
</script>

<!--Assigning button click to function-->
<button type="button" on:click={increment}>
  Clicked {count}
  <!--Conditional rendering works like React-->
  {count === 1 ? 'time' : 'times'}
</button>

<!--NO USE STATE!?-->