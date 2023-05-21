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
  import DomEvent from "./components/DomEvent.svelte";
  import DomEventModifier from "./components/DomEventModifier.svelte";
  import Wrapper from "./components/events/Wrapper.svelte";
    import ButtonWrapper from "./components/events/dom-events/ButtonWrapper.svelte";
    import Binding from "./components/binding/Binding.svelte";
    import OnMount from "./components/lifecycle/OnMount.svelte";
    import BeforeUpdate from "./components/lifecycle/BeforeUpdate.svelte";
    import Tick from "./components/lifecycle/Tick.svelte";
    import StoresWrapper from "./components/stores/StoresWrapper.svelte";
</script>

<style>
  .box{
    border: 1px black solid;
    margin: 2rem;
  }
</style>

<StoresWrapper/>
