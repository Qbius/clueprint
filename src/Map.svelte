<script>
    import {donezo, levels, enemies_by_bsc_by_biome} from './info.js';
    import {enemies} from './enemies_raw';
    import {Icon, Button} from 'sveltestrap';

    export let selected;
    export let bsc;

    function item_done(enemy, list) {
        return list.includes(enemy);
    }

    const unique_levels = Array.from(new Set(Object.values(levels))).sort((a, b) => a - b);
    const biomes_per_level = unique_levels.map(l => [l, Object.keys(levels).filter(k => levels[k] === l)]);
    $: donezo_enemies = Object.keys(enemies).filter(enemy => Object.entries(enemies[enemy].items).every(([item, bscs]) => !bscs.includes(bsc) || item_done(item, $donezo)));
    $: biomes_done = Object.fromEntries(Object.keys(levels).map(l => [l, enemies_by_bsc_by_biome[bsc][l].every(enemy => donezo_enemies.includes(enemy))]));
    $: done_by_biome = Object.fromEntries(Object.keys(levels).map(l => [l, enemies_by_bsc_by_biome[bsc][l]]).map(([l, enemies]) => [l, `${enemies.filter(e => donezo_enemies.includes(e)).length}/${enemies.length}`]))
    $: not_donezo = Object.fromEntries(Object.keys(levels).map(l => [l, enemies_by_bsc_by_biome[bsc][l].filter(e => !donezo_enemies.includes(e))]));
</script>

<div id="component">
    {#each biomes_per_level as [_level, biomes]}
        <div class="map-row">
            {#each biomes as biome}
                <div class={biomes_done[biome] ? 'button-overlay-done' : 'button-overlay'} style="margin: 3px; border-radius: 0.25rem;">
                    <Button outline={biome !== selected} color={biomes_done[biome] ? 'success' : 'dark'} on:click={() => selected = biome} style="height: 100%;">
                        <div style="display: flex; flex-direction: column;">    
                            <div style="display: flex; align-items: center; justify-content: space-between; height: 100%;">
                                <span>{biome}</span>
                                <b style="font-size: 10px; margin-top: 2px; margin-left: 7px;">{done_by_biome[biome]}</b>
                            </div>
                            {#if biome !== 'All'}
                                {#if not_donezo[biome].length > 0}
                                    <div class="enemy-icons">
                                        <div style="width: 1px; height: 10px;"/>
                                        {#each not_donezo[biome].slice(0, 12) as enemy}
                                        <img alt="" src="/enemies/{enemy}.png" style="width: 10px; height: 10px">
                                        {/each}
                                        <div style="width: 1px; height: 10px;"/>
                                        {#if not_donezo[biome].length > 12}
                                            <Icon name="three-dots"/>
                                        {/if}
                                    </div>
                                {:else}
                                    <div style="display: flex;">
                                        <div style="width: 1px; height: 10px;"/>
                                        <div style="width: 100%; display: flex; justify-content: center;">
                                            <span class="done-text">Done!</span>
                                        </div>
                                        <div style="width: 1px; height: 10px;"/>
                                    </div>
                                {/if}
                            {/if}
                        </div>
                    </Button>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    #component {
        min-width: 690px;
        max-width: 690px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 30px;
        padding-top: 30px;
        padding-bottom: 100px;
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

    .enemy-icons {
        font-size: 6px;
        display: flex;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .enemy-icons::-webkit-scrollbar {
        display: none;
    }

    .done-text {
        font-family: Press Start 2P;
        font-weight: normal;
        text-transform: uppercase;
        font-size: 6px;
    }
</style>