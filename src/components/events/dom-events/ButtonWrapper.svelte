<script>
  import BigRedButton from './BigRedButton.svelte';
  

  function handleClick() {
    alert('button clicked')
  }
</script>

<BigRedButton on:click={handleClick} />
