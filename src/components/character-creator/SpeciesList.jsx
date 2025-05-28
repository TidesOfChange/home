import { species } from '../../data/species';

const SpeciesList = ({ character, handleSelection }) => {
    const assignSkills = (skills) => {
        if (!skills) {
            return {};
        }
        return skills
            .split(',')
            .map((skill) => skill.trim())
            .reduce((acc, skill) => {
                acc[skill] = 0;
                return acc;
            }, {});
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">Choose Your Species</h2>
            <p>
                The species you choose contributes a lot to the identity of your
                character. It provides the general appearance and natural
                abilities of your characters and frames their experiences prior
                to your adventure.
            </p>
            <div className="grid grid-cols-1 gap-4">
                {species.map((option) => (
                    <div
                        key={option.name}
                        tabIndex="0"
                        className={`collapse collapse-arrow border-base-300 border-2 bg-base-100 shadow-sm cursor-pointer hover:border-base-300 ${
                            character.species.name === option.name
                                ? 'border-primary hover:border-primary'
                                : 'border-transparent'
                        }`}
                        onClick={() => {
                            handleSelection('species', option);
                            handleSelection('image', option.image);
                            handleSelection(
                                'speciesSkills',
                                assignSkills(option.skills)
                            );
                        }}
                    >
                        <div className="collapse-title flex gap-4">
                            {/* PC Image */}
                            <figure className="bg-base-300 min-w-[150px] h-[150px] rounded-lg hidden lg:flex justify-center overflow-hidden p-1">
                                <img
                                    className="max-h-[200px]"
                                    src={option.image}
                                    alt={option.name}
                                />
                            </figure>

                            <div>
                                {/* Mobile Image */}
                                <figure className="min-w-[150px] h-[150px] lg:hidden flex justify-center overflow-hidden p-1">
                                    <img
                                        className="max-h-[300px]"
                                        src={option.image}
                                        alt={option.name}
                                    />
                                </figure>
                                <strong>{option.name}</strong>
                                <p>{option.description}</p>
                            </div>
                        </div>
                        <div className="collapse-content text-sm">
                            <div className="divider mt-0 mb-4" />

                            <div className="grid grid-cols-1 gap-2">
                                {option.subSpecies?.length ? (
                                    <>
                                        {option.subSpecies.map((subSpecies) => (
                                            <ul key={subSpecies.name}>
                                                <li key={subSpecies.name}>
                                                    <strong>
                                                        {subSpecies.name}:
                                                    </strong>{' '}
                                                    {subSpecies.description}
                                                </li>
                                            </ul>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            <strong>Special Abilities:</strong>{' '}
                                            {option.specialAbility}
                                        </p>
                                        <p>
                                            <strong>Special Weaknesses:</strong>{' '}
                                            {option.specialWeakness}
                                        </p>
                                        <p>
                                            <strong>Skills:</strong>{' '}
                                            {option.skills}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeciesList;
