import {writable} from "svelte/store";
import {enemies} from './enemies_raw';

const ls_name = 'donezo_items';
const ls_donezo = localStorage.hasOwnProperty(ls_name) ? JSON.parse(localStorage.getItem(ls_name)) : [];
export const donezo = writable(ls_donezo);
donezo.subscribe(value => {
    localStorage.setItem(ls_name, Array.isArray(value) ? JSON.stringify(value) : '');
});


export const unique_biomes = [...Array.from(new Set(Object.values(enemies).map(({biomes}) => Object.keys(biomes)).flat())), 'All'];
export const enemies_by_bsc_by_biome = Object.fromEntries([...Array(6).keys()].map(i => [i, Object.fromEntries(unique_biomes.map(biome => [biome, (biome.toLowerCase() === 'all') ? Object.keys(enemies) : Object.keys(enemies).filter(enemy => enemies[enemy].biomes[biome]?.includes(i))]))]));

export const levels = {
    "Prisoners' Quarters": 0,
    "Promenade of the Condemned": 1,
    "Toxic Sewers": 1,
    "Dilapidated Arboretum": 1,
    "Corrupted Prison": 1.5,
    "Prison Depths": 1.5,
    "Ramparts": 2,
    "Morass of the Banished": 2,
    "Ossuary": 2,
    "Ancient Sewers": 2,
    //"Black Bridge": 3,
    //"Insufferable Crypt": 3,
    //"Nest": 3,
    "Stilt Village": 4,
    "Slumbering Sanctuary": 4,
    "Graveyard": 4,
    "Fractured Shrines": 4,
    "Clock Tower": 5,
    "Forgotten Sepulcher": 5,
    "Cavern": 5,
    "Undying Shores": 5,
    //"Clock Room": 6,
    //"Mauzoleum": 6,
    //"Guardian's Haven": 6,
    "High Peak Castle": 7,
    "Infested Shipwreck": 7,
    "Derelict Distillery": 7,
    "Dracula's Castle": 7,
    //"Lighthouse": 8,
    //"Throne Room": 8,
    "Astrolab": 9,
    "The Bank": 10,
    "All": 11
};