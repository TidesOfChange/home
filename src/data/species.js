export const species = [
    {
        name: 'Atlantean',
        image: '/home/images/species/placeholder.webp',
        description:
            'Highly intelligent and creative, Atlanteans founded an energy-powered ecotopia in the ocean’s core. Their advanced technology and Lux mastery fuel rapid progress, but their self-centered nature and tech reliance strain relations with others and can weaken their standing.',
        specialAbility:
            'Atlanteans have access to frontier technology and thus begin the game with 1 extra piece of equipment. Due to their abilities, they are able to further advance their technology and improve the quality of life in Atlantis. That is, until the supply of Lux runs out.',
        specialWeakness:
            'Due to the pollution leading to the creation of Atlantis and the continued exploitation of Aqualumeans to power their ecotopia, Atlanteans are mistrusted, which carries a -1 penalty on social checks with non-human characters.',
        skills: 'Mechanics, Vehicles, Deception, Cybernetics, Bartering',
    },
    {
        name: 'Aqualumean',
        image: '/home/images/species/placeholder.webp',
        description:
            'Strong, agile humanoids with mermaid tails and gills, Aqualumeans have the ability to breathe underwater and navigate reefs and ocean currents with remarkable speed and grace. Their natural adaptations make them powerful swimmers and formidable figures beneath the waves.',
        specialAbility:
            'Aqualumeans communicate telepathically with one another, but they have come to understand and speak the human language as pollution blocks their telepathy. As a species, they are generally peaceful, and prioritize life (sea-animals, aquatic plants, etc), and only hunt necessary amounts to feed their communities.',
        specialWeakness:
            'Aqualumeans are water creatures and cannot breathe on land. When they have to move on land, Aqualumeans need a special suit that covers and protects their gills and allows them to hover over the ground (protects their tail).',
        skills: 'Foraging, Sneakiness, Swimming, Awareness, Medicine',
    },
    {
        name: 'Avenari',
        image: '/home/images/species/avenari.webp',
        description:
            'Native to the Aeolian Archipelago, Avenari are diverse bird-human hybrids shaped by centuries of coexistence ranging from nearly human to fully avian in appearance. They form tight-knit, lifelong flocks and are accepting of other species despite occasional territorial tendencies.',
        subSpecies: [
            {
                name: 'Parrot',
                description:
                    'Sporting colorful plumage, parrots are smart, proud and attention-seekers. Parrots love nothing more than showing off their knowledge or skills, making them excellent entertainers. The charming visage of the parrot’s feathers allows them to make friends in any situation, granting an extra point toward Charm or Leadership checks. However, because they are always the center, they lose a point when making a Sneakiness check.',
                specialAbility:
                    'The charming visage of the parrot’s feathers allows them to make friends in any situation. When they make a Charm or Leadership check, add an extra point.',
                specialWeakness:
                    'While their plumage is highly charming, it also makes parrots the center of attention wherever they roam. When they make a Sneakiness check, they lose a point.',
                skills: 'Bartering, Deception, Thievery, Awareness, Foraging',
            },
            {
                name: 'Pigeon',
                description:
                    'Most common among Avenari, Pigeons can be found in any environment, though they prefer to flock in large settlements. Pigeons tend to be skittish and shy, taking flight when startled or threatened. Unlike parrots, their wings are far more plain, but are twice as effective in flight. Their Hyperawareness allows Pigeons to notice slight changes in the environmen, adding an extra point for Intuition checks. Despite this, pigeons are more susceptible to loud sounds and bright flashes. Following one of these events, subtract two from and roll made and Hyper Awareness cannot be used. ',
                specialAbility:
                    'Pigeons come equipped with nondescript yet effective wings and Hyperawareness. Unlike parrots, their wings are far more plain Jane, but are twice as effective, with an air speed reaching twice their ground speed. On the other hand, Hyperawareness allows pigeons to pick up on the slightest changes in the environment. Add an extra point for checks using Intuition.',
                specialWeakness:
                    'Despite their hyperawareness, pigeons are more susceptible to loud sounds and bright flashes. Following one of these events, subtract two from and roll made and Hyper Awareness cannot be used.',
                skills: 'Bartering, Deception, Thievery, Awareness, Foraging',
            },
            {
                name: 'Pelican',
                description:
                    'Often seen on docks or at sea, Pelicans are prideful, resilient and tough Avenari. They have a large set of black and white wings, allowing them to fly as fast as they walk. Additionally, a large expandable pouch in their throat allows them to store up to 30 pounds with a reasonable volume, and items are quickly retrievable and cannot be stolen. Their health is tied to the surrounding environment, making it difficult to navigate artificial hazards, resulting in a -2 penalty when making a check using a pollutant.',
                specialAbility:
                    'Pelicans have a large set of black and white wings, allowing them to fly as fast as they walk. Additionally, a large expandable pouch in their throat allows them to store up to 30 pounds with a reasonable volume, and items are quickly retrievable and cannot be stolen. Their throat expands to accommodate whatever is being stored.',
                specialWeakness:
                    'Pelican health is directly tied to the surrounding environment, making it difficult to navigate artificial hazards. Whenever making a check using something that produces pollution, take a -2 penalty.',
                skills: 'Bartering, Deception, Thievery, Awareness, Foraging',
            },
            {
                name: 'Penguin',
                description:
                    'Most suited for traveling the high seas, Penguins are more comfortable riding the waves than the wind. Penguin Avenari are rare and slightly eccentric, but they always make a splash wherever they turn up. Penguin Avenari’s bodies are optimized for swimming, allowing them to swim twice as fast as they walk. Its Bubber Buffer trait helps absorb more damage, decreasing harm by 1. However, their flippers lack the dexterity of claws or human hands, resulting in -2 in Vehicles, Thievery, or Shooting checks.',
                specialAbility:
                    'Although they don’t have wings, Penguin Avenari characteristics optimize their body for swimming, allowing them to swim twice as fast as they walk. Unlike other birds, its traits help absorb more damage, known as a blubber buffer. Whenever you take harm, decrease the amount taken by 1',
                specialWeakness:
                    'While flippered hands are great for swimming, they lack the dexterity of claws or human hands. Whenever you make a Vehicles, Thievery, or Shooting check, subtract 2 from the total.',
                skills: 'Bartering, Deception, Thievery, Awareness, Foraging',
            },
            {
                name: 'Peacock',
                description:
                    'Trend setters and pioneers, when Peacocks turn on their charm nobody can look away. Although they’re known for being flamboyant, Peacock Avenari are very perceptive and can deftly navigate tricky situations. Their beautiful tail feathers and short wings allow them to fly half as fast as they walk. Once per day, they can spread their plummage, forcing everyone to make a Personality check. On a failure, the target becomes friendly to the peacock for the rest of the day. As their wings aren’t meant for long flight, they only fly in short bursts and must land at the end of each movement.',
                specialAbility:
                    'Peacocks have a set of beautiful tail feathers and short wings, allowing them to fly half as fast as they walk. Their tail feathers can endear even the most stoic person, and once per day, they can spread their tail feathers as an action, forcing everyone of their choice that sees them to make a Personality check. On a failure, the target becomes friendly to the peacock for the rest of the day.',
                specialWeakness:
                    'Peacock wings aren’t meant for long flight and its tail feathers are quite heavy, so Peacock Avenari can only fly in short bursts. Whenever they fly, they must land after one minute. When flying in combat, they must land at the end of each movement.',
                skills: 'Bartering, Deception, Thievery, Awareness, Foraging',
            },
            {
                name: 'Puffin',
                description:
                    'Among the most intelligent of the Avenari, Puffins tend to find themselves working with machinery and technology. While their small bodies lack force and finesse, a skilled Puffin will easily outmaneuver a stronger (but dumber) foe. Equipped with a small set of black and white wings, Puffins fly half as fast as they can walk. Their wings also allow them to swim half as fast as they walk. As seaside technicians, they are adept at tinkering with technology, adding an extra point to Vehicles, Cybernetics, or Mechanics checks. On the other hand, their small frame and hollow bones make physical feats of strength difficult, subtracting 2 from Force or Reaction checks.',
                specialAbility:
                    'Equipped with a small set of black and white wings, Puffins fly half as fast as they can walk. Their wings also work well in water, allowing them to swim half as fast as they walk. Puffins are also notorious seaside technicians, able to easily recognize and tinker with technology. Whenever you make a Vehicles, Cybernetics, or Mechanics check, add an extra point to the roll.',
                specialWeakness:
                    'Puffin Avenaris’ small frame and hollow bones make physical feats of strength difficult. Whenever you make a Force or Reaction check, subtract 2 from the roll.',
                skills: 'Bartering, Deception, Thievery, Awareness, Foraging',
            },
        ],
    },
    {
        name: 'Bulkav',
        image: '/home/images/species/bulkav.webp',
        description:
            'Bulkavs are descendants of humans who rebuilt life above a nuclear site, evolving into towering, nocturnal beings with glow-in-the-dark skin and incredible strength. At night, their bodies illuminate with a soft yellow light, similar to a firefly.',
        specialAbility:
            'Bulkavs are known for their vibrant personalities and are charming characters who make strong leaders. Their physical strength is also remarkable in lifting, pushing, and carrying objects, as well as hand-to-hand and melee combat. They also are well aware of their surroundings and are able to deduce information to figure things out. Additionally, Bulkavs have night vision, which turns off their glowing skin and makes them undetectable at night. ',
        specialWeakness:
            'Their massive size and strength come at a cost, requiring large amounts of food and water, which creates metabolic strain and makes surviving in resource-poor areas particularly challenging.',
        skills: 'Super Strength, Agricultural Knowledge, Charm, Awareness, Deduction, Force',
    },
    {
        name: 'Ecotopian',
        image: '/home/images/species/ecotopian.webp',
        description:
            'Defectors from Sylvangrove after falling under AI control, Ecotopians are humans whose biology merged with plant life through deep symbiosis with nature. Incredibly diverse, Ecotopians reflect the traits and personalities of the plants they are most closely bonded with.',
        subSpecies: [
            {
                name: 'Arborian',
                description:
                    'Towering, tree-like beings known for immense strength and durability who comprise most of the workforce within the Ecotopia. Arborians can root themselves to the ground during combat to increase their melee damage by 1 harm, but their movement is significantly restricted for a temporary period of time. Due to their form, they also have an additional attribute point from strength. Despite their strength, Arborians are highly flammable. They are very weak against fire/flame attacks and environments and take extra damage from fire related attacks.',
                specialAbility:
                    'Arborians can root themselves to the ground during combat to increase their melee damage by 1 harm, but their movement is significantly restricted for a temporary period of time. They are also an incredibly strong species whose anatomy is that of a tree. Due to their form, they also have an additional attribute point from strength.',
                specialWeakness:
                    'Despite their strength, Arborians are highly flammable. They are very weak against fire/flame attacks and environments and take extra damage from fire related attacks.',
                skills: 'Force, Fear, Foraging, Mechanics, Awareness',
            },
            {
                name: 'Mycelian',
                description:
                    'Small, delicate mushroom people gifted in illusion magic and long-range telepathy, with a vast underground tunnel network only they can access. They resemble humans with mushroom caps and unique fungal markings tied to their birthplace, thriving in caves where their magic and stealth are strongest.',
                specialAbility:
                    'Mycelians can tunnel underground and travel distances while remaining unseen. This can be used within combat or any stealth related scenario.',
                specialWeakness:
                    'Particularly weak to any sort of physical damage (bullets/arrows, melee) resulting in a -1 harm threshold.',
                skills: 'Foraging, Thievery, Sneakiness, Tracking, Insight',
            },
            {
                name: 'Florian',
                description:
                    'Delicate, flower-like beings known for their beauty, charm, and natural political skill, often rising to elite leadership roles within Ecotopia’s oligarchical society. With vibrant petals and an instinctive focus on status and appearance, they excel in diplomacy and tactical leadership while avoiding direct combat.',
                specialAbility:
                    'Florians can release a sweet flowery scent that temporarily charms anyone around them',
                specialWeakness:
                    'Due to their disdain for physicality and combat, they have -2 modifier to these skills until they are convinced otherwise.',
                skills: 'Foraging, Leadership, Charm, Medicine, Deception',
            },
        ],
    },
    {
        name: 'Humanano',
        image: '/home/images/species/humanano.webp',
        description:
            'Treated as outcasts in Karkorte, Humananos reside on the monster-infested edges of the city. Seen as expendable by the Kraken and Moby, they serve as sacrifices and survive on borrowed time. Yet some among them refuse to accept this fate, setting out in hopes of salvation for their kind.',
        subSpecies: [
            {
                name: 'Wasteland Reclaimer',
                description:
                    'The Wasteland Reclaimers see Ashenvale as a sanctuary, not a battleground. Instead of seeking to conquer the land, they have chosen to stand with the Apomonosis, defending their sacred territory from invaders. Through their skill in negotiation and their willingness to seek alliances, the Wasteland Reclaimers have earned a reputation as diplomats in a hostile world. Their ability to navigate tense situations and forge bonds with the enigmatic Apomonosis unlocks Leadership and Charm as additional skills. However, due to their diplomatic nature, they prefer a fair fight (if necessary at all) and will not engage in surprise attacks.',
                specialAbility:
                    'Through their skill in negotiation and their willingness to seek alliances, the Wasteland Reclaimers have earned a reputation as diplomats in a hostile world. ',
                specialWeakness:
                    'The Wasteland Reclaimers, due to their diplomatic nature, prefer a fair fight (if needed in the first place). They will not engage in surprise attacks.',
                skills: 'Leadership, Charm',
            },
            {
                name: 'OutKast SeeKeer',
                description:
                    'OutKast SeeKeers are those who have been exiled from Karkorte or came to Ashenvale seeking their own claim, only to be met with hostility. The Apomonosis see them as invaders, hunting them down without mercy. To survive, Outcast Seekers have become ruthless survivalists, mercenaries, or warlords, determined to carve out a piece of the wasteland for themselves—by force if necessary. From the moment they first clashed with the Apomonosis, the OutKast SeeKeers have embraced war as their only path forward. Their bodies are hardened by relentless combat, their strength sharpened by bloodshed. Having proven their dominance through sheer aggression unlocks Force and Fear as additional skills. As they prefer stabs and slashes over words and negotiations, they receive a -1 penalty in Charm and Barter checks.',
                specialAbility:
                    'From the moment they first clashed with the Apomonosis, the OutKast SeeKeers have embraced war as their only path forward. Their bodies are hardened by relentless combat, their strength sharpened by bloodshed.',
                specialWeakness:
                    'OutKast SeeKeers strike first and ask questions later. The SeeKeers prefer stabs and slashes over words and negotiations. They receive a -1 penalty in Charm and Barter.',
                skills: 'Force, Fear',
            },
        ],
    },
    {
        name: 'Kraken',
        image: '/home/images/species/kraken.webp',
        description:
            'Once human, prolonged radiation exposure caused Krakens to grow extra limbs while impairing their cognitive abilities, making them less intelligent than humans. Their diverse body structures range widely, with some sporting extra arms, others multiple legs, creating a physically imposing but mentally diminished species.',
        specialAbility:
            'Due to their decreased intelligence, these species have put most of their values within physical abilities. Within Karkorte, Krakens do most of the physical work around the city, and they have an additional attribute point in strength. Their additional limbs add harm to all melee attacks.',
        specialWeakness:
            'Krakens aren’t really that good at logistics or politics, but they know how to carry heavy loads of materials. Their most notable weakness is lower intellectual ability, mainly due to having additional limbs. Their weaker intellect contributes -1 to Knowledge.',
        skills: 'Force, Swimming, Climbing, Fear, Reaction',
    },
    {
        name: 'Moby',
        image: '/home/images/species/moby.webp',
        description:
            'Mobys were former humans a long time ago from when the world first started going underwater. The effect of the power plant explosion has caused the area around the city to become radiated. The prolonged exposure of the radiation has caused humans to develop sonar abilities.',
        specialAbility:
            'They exhibit an eye-like appendage that functions like a sonar detector. With sonar, they are able to accurately map out areas of 200 feet outwards from them. Their sonar increases awareness by 1 point, and they have an additional attribute point from intuition.',
        specialWeakness:
            'Loud noises cause their senses to overload and harm them in the process. Overstimulation from environmental influx disables them for a round.',
        skills: 'Awareness, Swimming, Leadership, Sneakiness, Deduction',
    },
    {
        name: 'Wanderer',
        image: '/home/images/species/wanderer.webp',
        description:
            'Believed to be lost after failing to reach Atlantis, humans known as Wanderers survived on the fringes of the world, living on boats like floating islands. They are a resilient lineage, tirelessly scavenging and searching for a forgotten home as they navigate the edges of civilization.',
        specialAbility:
            'Wanderers have been passing down their stories for generations, preserving what they can about the histories of the old world. They come equipped with one additional knowledge point. As they have an urge to return, they always find their way back to where they began. They have excellent directional ability and environmental expertise and gain a +2 to Tracking. Tracking specialization provides an additional advantage on any Tracking checks related to a chosen specialty.',
        specialWeakness:
            'Wanderers are very wary of nonhuman species and can be perceived as closed off. As outcasts themselves, they have grown quite skillful in resourcefulness, their greatest setback is their nature of distrust that limits the number of outsiders they allow in their community, due to the fear of being infected with mutations. ',
        skills: 'Mechanics, Vehicles, Awareness, Reaction, Tracking',
    },
    {
        name: 'Woodland Creature',
        image: '/home/images/species/woodland.webp',
        description:
            'Woodland Creatures are small, bipedal, humanoid rodents equipped with opposable thumbs and speech. Though not originally native to desert landscapes, they’ve adapted using handmade scrap-metal devices to conserve moisture and survive the harsh, sand-filled environment.',
        specialAbility:
            'Woodland creatures come equipped with agility, adding one point. They also have the unique gift of healing, in which they can partially restore any living creature or inanimate object by restoring 1 harm. However, this costs a portion of their own lifeforce, causing proportional reduction to harm.',
        specialWeakness:
            'If food or water is discovered, Woodland Creatures are compelled to immediately stop their activity and divide it among themselves. Refusing to share is considered undermining the pack and leads to conflict.',
        skills: 'Sneakiness, Foraging, Mechanics, Bastering, Awareness',
    },
];
