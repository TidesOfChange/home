export const backgrounds = [
    {
        name: 'Buccaneer',
        description:
            'Sea-faring adventurers who hunt, scavenge, and trade across land and sea. Agile, resourceful, and fiercely loyal to their crew, Buccaneers thrive on treasure, glory, and survival in any condition.',
        coreSkills: 'Thievery, Foraging, Swimming, Vehicles, Shooting',
        uniqueSkill: 'Sea Legs',
        uniqueExpertise: 'Iron Lung',
        equipment: `Diving Gear, Buccaneer's Tools (map, spyglass, compass and sextant, simple toolkit), Maui hook, or harpoon gun`,
    },
    {
        name: 'Cloudrunner',
        description:
            'Cloudrunners are daring criminals who navigate a chaos-filled world of rival factions, smuggling, sabotage, and high-stakes survival. Known for their adaptability, reputation, and ability to forge surprising alliances, they thrive where others fear to tread.',
        coreSkills: 'Mechanics, Vehicles, Thievery, Sneakiness, Force',
        uniqueSkill: 'Flying (Can use Cloudrunning kite to navigate airways)',
        uniqueExpertise: 'Knife’s Edge',
        equipment: 'Wooden weapons (2 harm), Cloudrunning kite, Forgery Kit',
    },
    {
        name: 'Ecotechnician',
        description:
            'Sustainable engineers that harness the potential of synergizing technology with nature. Ecotechnicians dedicate their lives to discovering and perfecting techniques to make creations that leverage the strengths of natural phenomena. ',
        coreSkills: 'Force, Foraging, Cybernetics, Mechanics, Awareness',
        uniqueSkill: 'Inventing',
        uniqueExpertise: 'Environmentalist I',
        equipment:
            'Eco-Technical Multi Tool (enhances all technological abilities, improvised weapon), Mycelium-based Neural Network (streamlines deduction and research), Hard Hat',
    },
    {
        name: 'Enchanter',
        description:
            'Enchanters find their way into magic through a mysterious and ephemeral book called The Enchanter’s Code that seems to manifest around people who are especially attuned to crystal energy.',
        coreSkills: 'Affinity, Deduction, Medicine, Awareness, Charm',
        uniqueSkill: 'Premonition',
        uniqueExpertise: 'Magic Shield I',
        equipment:
            'Defender’s Ring (stores one defensive spell, usable once per day), Long Bamboo Staff, Enchanter’s Gloves (allows 3 castings of each known spell per day instead of 2)',
    },
    {
        name: 'Engineer',
        description:
            'Problem-solvers, inventors, and builders who use their knowledge to create and maintain essential infrastructure. Whether designing defenses, crafting machinery, or adapting to environmental challenges, Engineers apply their intelligence to shape the world around them.',
        coreSkills: 'Bartering, Mechanics, Swimming, Climbing, Insight',
        uniqueSkill: 'Adaptive Ingenuity',
        uniqueExpertise: 'Craft Boost',
        equipment:
            'Toolbelt (hammer, axe, rope, pencil), Blueprint (for new inventions), Dagger',
    },
    {
        name: 'Faith Sworn',
        description:
            'Guardians of hope and belief, Faith Sworn dedicate themselves to maintaining symbols of culture and faith. Where all is lost, hope remains. These individuals cultivate that hope and use it to organize and mobilize others.',
        coreSkills: 'Leadership, Medicine, Deduction, Reaction, Force',
        uniqueSkill:
            'Devotion (add Devotion modifier to all medicine and healing checks)',
        uniqueExpertise: 'Leader’s Inspiration',
        equipment:
            'Brass knuckles (2 harm), Staff, Missionaries tools (written oath, faith symbol, healing salves, ink and journal)',
    },
    {
        name: 'Farmer',
        description:
            'Community-minded and resilient, Farmers repair, build, and cultivate to help their people thrive, combining practical skills with a deep love of nature and a calm, hands-on approach.',
        coreSkills: 'Medicine, Reaction, Sneakiness, Deduction, Foraging',
        uniqueSkill: 'Revive Plants (can revive small dead plants)',
        uniqueExpertise: 'Cybernetics',
        equipment:
            'Water canteen, Jar of white gel (base for medicinal ointment), Satchel',
    },
    {
        name: 'Hunter',
        description:
            'Vital providers for Karkorte, Hunters supply food through fishing and gathering, using their versatility and crafted weaponry to sustain their community in a world of scarce resources.',
        coreSkills: 'Shooting, Mechanics, Deception, Charm, Bartering',
        uniqueSkill: 'Trapping (can make and set traps to catch wild animals)',
        uniqueExpertise: 'Projectile Weaponry',
        equipment: 'Hammer, Fish Scale armor, Radium pole',
    },
    {
        name: 'Magi-tech Artificer',
        description:
            'Specialists trained to wield cutting-edge magitech gear, Artificers combine crystal energy and nanoprocessing technology to manipulate the molecules and atoms around them, creating weapons, defenses, and healing tools with precision and expertise.',
        coreSkills: 'Force, Foraging, Cybernetics, Mechanics, Awareness',
        uniqueSkill: 'Environmentalism',
        uniqueExpertise: 'Eco-Mage',
        equipment: 'Magi-tech 1.0',
    },
    {
        name: 'Public Servant',
        description:
            'Civically minded diplomats and leaders, Public Servants excel at connecting communities, negotiating complex decisions, and empowering others through sharp insight and persuasive leadership. Through their involvement public sphere, Public Servants have a wide net of connections, whether they be allies or opponents.',
        coreSkills: 'Deduction, Insight, Leadership, Bartering, Charm',
        uniqueSkill:
            'Civics (able to understand laws and governmental structures)',
        uniqueExpertise: 'Negotiator',
        equipment:
            'Professional Clothing, Legal History Book, Geopolitical World Map',
    },
    {
        name: 'Ranger',
        description:
            'Growing up in close-knit villages, Rangers value community above all else and devote their lives to protecting their loved ones and the lands they call home. As both explorers and warriors, Rangers skillfully survey their surroundings and assess potential dangers with keen awareness.',
        coreSkills: 'Awareness, Insight, Tracking, Deduction, Force',
        uniqueSkill:
            'Acclimatization (ability to adapt to any situation, assimilate into cultures, learn new things)',
        uniqueExpertise: 'Alert',
        equipment:
            'Night Vision Goggles, Pocket Knife (multi-tool), Sonar Mapper',
    },
    {
        name: 'Scavenger',
        description:
            'Essential to Karkorte’s survival, Scavengers are expert resource gatherers who know the land inside and out, efficiently harvesting resources and maintaining the city’s infrastructure under constant threat and keeping it from collapse.',
        coreSkills: 'Foraging, Tracking, Insight, Thievery, Sneakiness',
        uniqueSkill: 'Butchering (able to cleave through beefy objects)',
        uniqueExpertise: 'Daggerwork',
        equipment:
            'Dagger, Waterproof Backpack, Goggles (underwater increased vision)',
    },
    {
        name: 'Seed Keeper',
        description:
            'Scholars and guardians of the Seed Vault, Seed Keepers specialize in cataloging, protecting, and nurturing plant life, blending botanical knowledge with technological expertise. After the Frontier takeover, they now serve as healers in their communities, preserving both human and ecological well-being.',
        coreSkills: 'Leadership, Force, Bartering, Insight, Sneakiness',
        uniqueSkill: 'Plant Speak',
        uniqueExpertise: 'Keeper’s Insight',
        equipment:
            'Data Tablet (contains information on the Seed Vault), Seed Kit (sample of rare seed), Old Seed Vault Key',
    },
    {
        name: 'Skycaller',
        description:
            'Feared and revered alike, Skycallers are storm-wielding shamans capable of taming the rampaging tempests of the Aeolian Archipelago. Relentlessly pursued for their valuable and dangerous powers, Skycallers live on the edge and interact cautiously with those around them.',
        coreSkills: 'Reaction, Affinity, Deception, Fear, Awareness',
        uniqueSkill: 'Forecasting',
        uniqueExpertise: 'Read the Winds',
        equipment:
            'Pendant, Wooden Staff, Compass (twice a day gain advantage on an Awareness check)',
    },
    {
        name: 'Spiritual Resonator',
        description:
            'After years of meditating and listening to crystals born from the Calamity, Spiritual Resonators attuned to their resonance and unlocked the hidden energy potential stored within them to wield legendary powers that manipulate the world around them.',
        coreSkills: 'Affinity, Deduction, Medicine, Awareness, Charm',
        uniqueSkill:
            'Premonition (ability to sense future events or shifts in energy)',
        uniqueExpertise: 'Amateur Attacker',
        equipment:
            'Defender’s Ring (stores one defensive level-1 spell, castable once per day), Long Bamboo Staff, Enchanter’s Gloves (adds 1 extra Magic Point when worn)',
    },
    {
        name: 'Warrior',
        description:
            'Trained combatants skilled in survival, battle tactics, and physical endurance, Warriors dedicate their lives to mastering combat, whether defending their homeland, serving as mercenaries, or exploring the wilds.',
        coreSkills: 'Force, Shooting, Leadership, Reaction, Sneakiness',
        uniqueSkill: 'Adrenaline',
        uniqueExpertise: 'Long Range Attack',
        equipment:
            'Diamond Encrusted Sword, Bow and Diamond-tipped Arrows, Diamond Armor',
    },
];
