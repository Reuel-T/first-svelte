<script>
    import PackageInfo from "./PackageInfo.svelte";
	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 3,
		website: 'https://svelte.dev'
	};
</script>

<!--since the properties of pkg correspond to the component's expected props, we can 'spread' them onto the component instead:-->
<PackageInfo {...pkg}
/>

<!-- <PackageInfo
	name={pkg.name}
	speed={pkg.speed}
	website={pkg.website}
/> -->