<script>
	import Map from './Map.svelte';
	import Enemies from './Enemies.svelte';
	import {enemies} from './info.js';

	let selected_biome = "Prisoners' Quarters";
</script>

<main>
	<Map bind:selected={selected_biome}/>
	<Enemies {selected_biome}/>
</main>

<style>
	main {
		width: 100%;
		height: 100%;

		display: flex;
		max-width: 240px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;

		background-image: url('/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			flex-direction: row;
		}
	}
</style>