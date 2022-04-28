import {writable} from "svelte/store";

const ls_donezo = localStorage.hasOwnProperty("donezo_enemies") ? JSON.parse(localStorage.getItem("donezo_enemies")) : [];
export const donezo = writable(ls_donezo);
donezo.subscribe(value => {
    localStorage.setItem("donezo_enemies", Array.isArray(value) ? JSON.stringify(value) : '');
});

export const enemies = {
    "Zombie": [
        "Fractured Shrines",
        "Toxic Sewers",
        "Prison Depths",
        "Promenade of the Condemned",
        "Ancient Sewers",
        "Stilt Village",
        "Slumbering Sanctuary",
        "Ossuary",
        "Corrupted Prison",
        "Prisoners' Quarters",
        "Dilapidated Arboretum",
        "Ramparts"
    ],
    "Undead Archer": [
        "High Peak Castle",
        "Clock Tower",
        "Fractured Shrines",
        "Toxic Sewers",
        "Prison Depths",
        "Prisoners' Quarters",
        "Ramparts"
    ],
    "Shieldbearer": [
        "Ramparts",
        "Derelict Distillery",
        "Prisoners' Quarters",
        "Ancient Sewers"
    ],
    "Grenadier": [
        "Fractured Shrines",
        "Toxic Sewers",
        "Promenade of the Condemned",
        "Undying Shores",
        "Slumbering Sanctuary",
        "Ossuary",
        "Prisoners' Quarters",
        "Corrupted Prison",
    ],
    "Bombardier": [
        "High Peak Castle",
        "Clock Tower",
        "Infested Shipwreck"
    ],
    "Bat": [
        "Promenade of the Condemned",
        "Graveyard",
        "Undying Shores",
        "Dilapidated Arboretum"
    ],
    "Kamikaze": [
        "Derelict Distillery",
        "Toxic Sewers",
        "Prison Depths",
        "Promenade of the Condemned",
        "Infested Shipwreck",
        "Stilt Village",
        "Ancient Sewers",
        "Slumbering Sanctuary",
        "Forgotten Sepulcher",
        "Graveyard"
    ],
    "Runner": [
        "Promenade of the Condemned",
        "Undying Shores"
    ],
    "Inquisitor": [
        "Fractured Shrines",
        "Forgotten Sepulcher",
        "Slumbering Sanctuary",
        "Ossuary",
        "Ramparts",
        "Graveyard"
    ],
    "Protector": [
        "Promenade of the Condemned",
        "Slumbering Sanctuary",
        "Corrupted Prison"
    ],
    "Hammer": [
        "Prison Depths"
    ],
    "Sweeper": [
        "Ramparts"
    ],
    "Buzzcutter": [
        "Ramparts",
        "Undying Shores"
    ],
    "Festering Zombie": [
        "Stilt Village",
        "Undying Shores",
        "Ancient Sewers"
    ],
    "Swarm Zombie": [
        "Graveyard"
    ],
    "Disgusting Worm": [
        "Undying Shores",
        "Toxic Sewers",
        "Ancient Sewers"
    ],
    "Weaver Worm": [
        "Stilt Village",
        "Morass of the Banished"
    ],
    "Scorpion": [
        "Toxic Sewers"
    ],
    "Impaler": [
        "Dilapidated Arboretum",
        "Ancient Sewers"
    ],
    "Sewer's Tentacle": [
        "Ancient Sewers"
    ],
    "Catcher": [
        "Undying Shores",
        "Graveyard"
    ],
    "Cleaver": [
        "Forgotten Sepulcher",
        "Morass of the Banished"
    ],
    "Pirate Captain": [
        "Stilt Village"
    ],
    "Knife Thrower": [
        "High Peak Castle",
        "Prison Depths",
        "Undying Shores",
        "Forgotten Sepulcher",
        "Prisoners' Quarters"
    ],
    "Slasher": [
        "Fractured Shrines",
        "Prison Depths",
        "Undying Shores",
        "Morass of the Banished",
        "Ossuary"
    ],
    "Lacerator": [
        "Prison Depths",
        "Derelict Distillery",
        "Graveyard"
    ],
    "Shocker": [
        "Fractured Shrines",
        "Forgotten Sepulcher",
        "Ossuary",
        "Corrupted Prison"
    ],
    "Thorny": [
        "Ossuary",
        "Dilapidated Arboretum"
    ],
    "Spawner": [
        "Derelict Distillery",
        "Undying Shores",
        "Ossuary"
    ],
    "Masker": [
        "Prison Depths",
        "Graveyard",
        "Slumbering Sanctuary"
    ],
    "Caster": [
        "Slumbering Sanctuary"
    ],
    "Golem": [
        "Slumbering Sanctuary"
    ],
    "Dark Tracker": [
        "Clock Tower",
        "Forgotten Sepulcher",
        "Morass of the Banished"
    ],
    "Cannibal": [
        "Clock Tower"
    ],
    "Automaton": [
        "Clock Tower"
    ],
    "Lancer": [
        "High Peak Castle"
    ],
    "Guardian Knight": [
        "High Peak Castle"
    ],
    "Royal Guard": [
        "High Peak Castle"
    ],
    "Slammer": [
        "Cavern",
        "Corrupted Prison"
    ],
    "Demon": [
        "Cavern"
    ],
    "Arbiter": [
        "Cavern"
    ],
    "Ground Shaker": [
        "Cavern"
    ],
    "Skeleton": [
        "Cavern"
    ],
    "Rancid Rat": [
        "Derelict Distillery",
        "Toxic Sewers",
        "Infested Shipwreck",
        "Undying Shores",
        "Corrupted Prison",
        "Prisoners' Quarters",
        "Graveyard"
    ],
    "Toxic Miasma": [
        "Undying Shores",
        "Corrupted Prison"
    ],
    "Weirded Warrior": [
        "Stilt Village"
    ],
    "Corpulent Zombie": [
        "Forgotten Sepulcher"
    ],
    "Dancer": [
        "Slumbering Sanctuary"
    ],
    "Infected Worker": [
        "Derelict Distillery"
    ],
    "Living Barrel": [
        "Derelict Distillery"
    ],
    "Demolisher": [
        "Ramparts",
        "Derelict Distillery",
        "Stilt Village"
    ],
    "Yeeter": [
        "Dilapidated Arboretum"
    ],
    "Jerkshroom": [
        "Dilapidated Arboretum",
        "Undying Shores"
    ],
    "Banished": [
        "Morass of the Banished"
    ],
    "Blowgunner": [
        "Undying Shores",
        "Morass of the Banished"
    ],
    "Giant Tick": [
        "Morass of the Banished"
    ],
    "Myopic Crow": [
        "Fractured Shrines"
    ],
    "Stone Warden": [
        "Fractured Shrines"
    ],
    "Cold Blooded Guardian": [
        "Undying Shores",
        "Fractured Shrines"
    ],
    "Apostate": [
        "Undying Shores"
    ],
    "Failed Homunculus": [
        "Undying Shores"
    ],
    "Clumsy Swordsman": [
        "Undying Shores"
    ],
    "Dastardly Archer": [
        "Undying Shores"
    ],
    "Compulsive Gravedigger": [
        "Undying Shores"
    ],
    "Mutineer": [
        "Infested Shipwreck"
    ],
    "Armored Shrimp": [
        "Infested Shipwreck"
    ],
    "Agitated Pickpocket": [
        "The Bank"
    ],
    "Gold Gorger": [
        "The Bank"
    ],
    "Golden Kamikaze": [
        "The Bank"
    ],
    "Mimic": [
        "The Bank"
    ]
};

let cache = {};
export function enemies_by_biome(biome) {
    if (!(biome in cache))
        cache[biome] = (biome.toLowerCase() === 'all') ? Object.keys(enemies) : Object.keys(enemies).filter(enemy => enemies[enemy].includes(biome));
    return cache[biome];
}

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
    //"Lighthouse": 8,
    //"Throne Room": 8,
    "The Bank": 10,
    "All": 11
};