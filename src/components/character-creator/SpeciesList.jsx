const speciesOptions = [
    {
        name: 'Mutated Humans',
        image: '/home/images/karkorte/kraken.png',
        description: 'Survivors of a harsh world, adapted to radiation.',
    },
    {
        name: 'Woodland Creatures',
        image: '/home/images/karkorte/kraken.png',
        description: 'Mystical beings living in harmony with nature.',
    },
    {
        name: 'Bird Pirates',
        image: '/home/images/karkorte/kraken.png',
        description: 'Airborne adventurers who rule the skies.',
    },
    {
        name: 'Ecotopians',
        image: '/home/images/sylvangrove/tree-person.png',
        description: 'Airborne adventurers who rule the skies.',
    },
    {
        name: 'Aqualumeans',
        image: '/home/images/karkorte/kraken.png',
        description: 'Airborne adventurers who rule the skies.',
    },
    {
        name: 'Lumea Humans',
        image: '/home/images/karkorte/kraken.png',
        description: 'Airborne adventurers who rule the skies.',
    },
];

const SpeciesList = ({ character, handleSelection }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Select a Species</h2>
            <div className="grid grid-cols-2 gap-4">
                {speciesOptions.map((option) => (
                    <div
                        key={option.name}
                        className={`card card-border border-2 bg-base-100 w-96 shadow-sm cursor-pointer hover:border-base-300 ${
                            character.species === option.name
                                ? 'border-base-300'
                                : 'border-transparent'
                        }`}
                        onClick={() => {
                            handleSelection('species', option.name);
                            handleSelection('species_image', option.image);
                        }}
                    >
                        <figure>
                            <img src="" alt={option.name} />
                        </figure>
                        <div className="card-body">
                            <strong>{option.name}</strong>
                            <small>{option.description}</small>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeciesList;