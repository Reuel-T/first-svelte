<script>
  import Nested from "./components/Nested.svelte";
  import DirectHtml from "./components/DirectHtml.svelte";
  import Interactivity from "./components/Interactivity.svelte";
  import ReactiveDeclarations from "./components/ReactiveDeclarations.svelte";
    import Arrays from "./components/Arrays.svelte";
    import PropsProv from "./components/props/PropsProv.svelte";
    import PackageInfoProv from "./components/props/PackageInfoProv.svelte";
    import Conditionals from "./components/Conditionals.svelte";
    import EachBlocks from "./components/EachBlocks.svelte";
    import KeyEach from "./components/eachkeys/KeyEach.svelte";
    import Await from "./components/Await.svelte";
</script>

<style>
  .box{
    border: 1px black solid;
    margin: 2rem;
  }
</style>

<div class="box">
  <p>This is from <code>Nested.svelte</code></p>
  <Nested/>
</div>

<div class="box">
  <p>This is from <code>App.svelte</code></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam laudantium unde accusamus praesentium repellat, voluptate iusto fugit reiciendis ipsam autem doloribus enim quam et odio. Eligendi, facere asperiores. Corporis officiis, natus recusandae animi dolorum, porro nulla deleniti, consequuntur voluptatem impedit temporibus labore enim excepturi sit eveniet nisi tempora hic. Cumque nesciunt corporis laboriosam, odio voluptas deserunt sed expedita nobis?</p>
</div>

<div class="box">
  <DirectHtml/>
</div>

<div class="box">
  <Interactivity/>
</div>

<div class="box">
  <ReactiveDeclarations/>
</div>

<div class="box">
  <Arrays/>
</div>

<div class="box">
  <PropsProv/>
</div>

<div class="box">
  <PackageInfoProv/>
</div>

<div class="box">
  <Conditionals/>
</div>

<div class="box">
  <EachBlocks/>
</div>

<div class="box">
  <KeyEach/>
</div>

<div class="box">
  <Await/>
</div>


