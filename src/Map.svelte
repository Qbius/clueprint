<script>
    import {donezo, levels, enemies_by_biome} from './info.js';
    import {Button} from 'sveltestrap';

    export let selected;

    function enemy_done(enemy, list) {
        return list.includes(enemy);
    }

    const unique_levels = Array.from(new Set(Object.values(levels))).sort((a, b) => a - b);
    const biomes_per_level = unique_levels.map(l => [l, Object.keys(levels).filter(k => levels[k] === l)]);

    $: biomes_done = Object.fromEntries(Object.keys(levels).map(l => [l, enemies_by_biome(l).every(enemy => enemy_done(enemy, $donezo))]));
    $: console.log(biomes_done);
</script>

<div id="component">
    {#each biomes_per_level as [_level, biomes]}
        <div class="map-row">
            {#each biomes as biome}
                <div class={biomes_done[biome] ? 'button-overlay-done' : 'button-overlay'} style="margin: 3px; border-radius: 0.25rem;">
                    <Button outline={biome !== selected} color={biomes_done[biome] ? 'success' : 'dark'} on:click={() => selected = biome}>{biome}</Button>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    #component {
        min-width: 650px;
        max-width: 650px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 10px;
        padding-top: 190px;
        padding-bottom: 190px;
        border-radius: 12px;
        background-color: rgba(103, 126, 145, 0.75);
        align-self: center;
    }

    .map-row {
        display: flex;
        justify-content: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .button-overlay {
        background-color: rgb(255, 255, 255);
    }

    .button-overlay-done {
        background-color: rgb(196, 224, 188);
    }
</style>