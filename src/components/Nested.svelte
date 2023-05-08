<!--JS Code goes in script tags-->
<script>
  let name = "Bob";
  const src = './vite.svg';
</script>

<!--
  Styling works like traditional html/css files

  This is scoped to the component itself
-->
<style>
  p{
    color: goldenrod;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>

<h1>Hello {name}</h1>

<!--If an attribute matches an object, svelte lets you use the object directly as a shorthand-->
<img {src} alt="Vite Logo" />

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut saepe accusamus eaque nobis placeat rem adipisci. Ad aliquid architecto fuga recusandae eum repellendus debitis modi temporibus, voluptatem ratione quis quia odio? Numquam officia totam porro, odit perspiciatis quod cum libero? Omnis molestiae facilis et ducimus consectetur dolorem odit porro temporibus dolorum perferendis eveniet maxime eligendi, quas quam inventore iusto quaerat unde quisquam consequatur iste minima quod quibusdam? Quas nam consequuntur ad voluptas, ipsum doloribus esse!</p>