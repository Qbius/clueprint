<script>
	import Map from './Map.svelte';
	import Enemies from './Enemies.svelte';
	import {Input} from 'sveltestrap';

	const ls_bsc = window.localStorage.getItem('bsc');
	let bsc = ls_bsc ? Number(ls_bsc) : 0;
	$: window.localStorage.setItem('bsc', bsc);
	let selected_biome = "Prisoners' Quarters";
</script>

<main>

	<div class="content">
		<Map bind:selected={selected_biome} {bsc}/>
		<Enemies {selected_biome} bind:bsc/>
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		min-height: 100vh;
		max-height: 100vh;
		max-width: 240px;

		display: flex;
		flex-direction: column;
		align-items: center;
		
		background-image: url('/bg.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	.box-shadow {
		box-shadow:
			2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
			6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
			12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
			22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
			41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
			100px 100px 80px rgba(0, 0, 0, 0.07)
		;
	}

	.content {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}

		.content{
			flex-direction: row;
		}
	}
</style>