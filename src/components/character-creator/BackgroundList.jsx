const backgroundOptions = [
    {
        name: 'Scavenger',
        image: '/home/images/karkorte/kraken.png',
        description: 'Survival expert and resourceful.',
    },
    {
        name: 'Hunter',
        image: '/home/images/karkorte/kraken.png',
        description: 'Sharp-eyed and precise with a bow.',
    },
    {
        name: 'Ranger',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
    {
        name: 'Enchanter',
        image: '/home/images/karkorte/kraken.png',
        description: 'Survival expert and resourceful.',
    },
    {
        name: 'Ecotechnicians',
        image: '/home/images/karkorte/kraken.png',
        description: 'Sharp-eyed and precise with a bow.',
    },
    {
        name: 'Public Servants',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
    {
        name: 'Cloudrunners',
        image: '/home/images/archipelago/cloudrunner.jpg',
        description: 'Survival expert and resourceful.',
    },
    {
        name: 'Skycallers',
        image: '/home/images/archipelago/skycaller.png',
        description: 'Sharp-eyed and precise with a bow.',
    },
    {
        name: 'Farmers',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
    {
        name: 'Seed Keepers',
        image: '/home/images/karkorte/kraken.png',
        description: 'Protector of the wilds.',
    },
];

const BackgroundList = ({ character, handleSelection }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Select a Background</h2>
            <div className="grid grid-cols-2 gap-4">
                {backgroundOptions.map((option) => (
                    <div
                        key={option.name}
                        className={`card card-border border-2 bg-base-100 w-96 shadow-sm cursor-pointer hover:border-base-300 ${
                            character.background === option.name
                                ? 'border-base-300'
                                : 'border-transparent'
                        }`}
                        onClick={() => {
                            handleSelection('background', option.name);
                        }}
                    >
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

export default BackgroundList;