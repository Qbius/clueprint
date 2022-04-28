<script>
    import {donezo, enemies, enemies_by_biome} from './info.js';

    export let selected_biome;

    function enemy_done(enemy, list) {
        console.log(enemy, list.includes(enemy));
        return list.includes(enemy);
    }
    
	$: relevant_enemies = (selected_biome !== 'All') ? enemies_by_biome(selected_biome) : Object.keys(enemies);
</script>

<div id="component">
    {#each relevant_enemies as enemy}
        <div class="img-wrapper {enemy_done(enemy, $donezo) ? 'enemy-donezo' : 'enemy-waiting'}" on:click={() => {
            let list = $donezo;
            const index = list.indexOf(enemy);
            if (index === -1) {
                $donezo = [...list, enemy];
            }
            else {
                list.splice(index, 1);
                $donezo = list;
            }
            console.log($donezo);
        }}>
            <img alt="" src="/enemies/{enemy}.png">
            {#if enemy_done(enemy, $donezo)}
                <img alt="" src="/green_checkmark.png" class="img-checkmark">
            {/if}
        </div>
    {/each}
</div>

<style>
    #component {
        display: flex;
        flex-wrap: wrap;
        overflow-y: scroll;
        max-height: 100%;
        padding: 20px;
        -ms-overflow-style: none;
        scrollbar-width: none;
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
    
    .enemy-waiting {
        background-color: rgba(240, 234, 234, 0.75);
    }
    
    .enemy-donezo {
        background-color: rgba(148, 189, 135, 0.75);
    }

    .img-wrapper:hover {
        filter: brightness(150%);
    }
</style>