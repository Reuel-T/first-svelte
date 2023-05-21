<!-- 
  Every component has a lifecycle that starts when it is created, 
  and ends when it is destroyed. There are a handful of functions 
  that allow you to run code at key moments during that lifecycle. 
  The one you'll use most frequently is onMount, which runs after 
  the component is first rendered to the DOM.
 -->

<script>
	import { paint } from './gradient';
  import { onMount } from 'svelte';

  onMount(() => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    let frame = requestAnimationFrame(function loop(t){
      frame =  requestAnimationFrame(loop);
      paint(context, t);
    })

    return () => {
      cancelAnimationFrame(frame);
    }
  })

  /* 
    But there's one problem — the loop will continue even after the component 
    has been destroyed. To fix that, we need to return a cleanup function from 
    onMount: 
  */


</script>

<canvas
	width={32}
	height={32}
/>

<style>
	canvas {
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
</style>
