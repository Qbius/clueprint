<script>
    import {donezo, enemies_by_bsc_by_biome} from './info.js';
    import {enemies} from './enemies_raw';
    import {Input} from 'sveltestrap';

    export let selected_biome;
    export let bsc;

    function item_done(enemy, list) {
        return list.includes(enemy);
    }
    
    $: donezo_enemies = Object.keys(enemies).filter(enemy => Object.entries(enemies[enemy].items).every(([item, bscs]) => !bscs.includes(bsc) || item_done(item, $donezo)));
	$: relevant_enemies = (selected_biome !== 'All') ? enemies_by_bsc_by_biome[bsc][selected_biome] : Object.keys(enemies);
</script>

<div id="component">
    <div style="width: 100%; margin: 10px; display: flex; flex-direction: column; align-items: center; gap: 5px;">
		<b class="box-shadow" style="font-size: 32px; padding: 3px; padding-left: 10px; padding-right: 10px; border-radius: 6px; background-color: rgba(250, 250, 250, 0.75);">{bsc} BSC</b>
		<div style="width: 300px;">
            <Input type="range" min={0} max={5} step={1} bind:value={bsc} style="border: 0px!important;" color="danger"/>
        </div>
	</div>
    <div class="enemies-display">
        {#each relevant_enemies as enemy}
            <div class="img-wrapper {donezo_enemies.includes(enemy) ? 'enemy-donezo' : 'enemy-waiting'}" >
                <div style="position: absolute; top: 5px; left: 5px; display: flex; flex-wrap: wrap;">
                    {#each Object.entries(enemies[enemy].items) as [item, bscs]}
                        {#if bscs.includes(bsc)}
                            <div title={item} class="img-wrapper selectable {item_done(item, $donezo) ? 'item-donezo' : 'enemy-waiting'}" style="width: 30px; height: 30px;" on:click={() => {
                                let list = $donezo;
                                const index = list.indexOf(item);
                                if (index === -1) {
                                    $donezo = [...list, item];
                                }
                                else {
                                    list.splice(index, 1);
                                    $donezo = list;
                                }
                            }}>
                                <img src="/items/{item}.png" alt="" style="width: 24px; height: 24px;">
                            </div>
                        {/if}
                    {/each}
                </div>
                <img alt="" src="/enemies/{enemy}.png" style={donezo_enemies.includes(enemy) ? 'opacity: 0.2;' : ''}>
                {#if donezo_enemies.includes(enemy)}
                    <img alt="" src="/green_checkmark.png" class="img-checkmark">
                {/if}
                <span class="enemy-name">{enemy}</span>
            </div>
        {/each}
    </div>
</div>

<style>
    #component {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        width: 100%;
        max-height: 100%;
        padding: 20px;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .enemies-display {
        display: flex;
        flex-wrap: wrap;
    }

    #component::-webkit-scrollbar {
        display: none;
    }

    .img-wrapper {
        width: 185px;
        height: 185px;
        margin: 7px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.25rem;
        border: 1px solid black;
        position: relative;
    }

    .img-checkmark {
        position: absolute;
        left: 5px;
        bottom: 5px;
        z-index: 10;
        pointer-events: none;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 100%;
    }

    .enemy-name {
        position: absolute;
        right: 10px;
        bottom: 7px;
        z-index: 10;
        pointer-events: none;
        font-size: 12px;
        color: white;
        text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    }
    
    .enemy-waiting {
        background-color: rgba(255, 255, 255, 0.75);
    }

    .item-donezo {
        background-color: rgba(107, 150, 94, 0.75);
    }
    
    .enemy-donezo {
        background-color: rgba(207, 207, 207, 0.75);
    }

    .selectable:hover {
        filter: brightness(150%);
    }
</style>