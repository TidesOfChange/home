import { backgrounds } from '../../data/backgrounds';

const BackgroundList = ({ character, handleSelection }) => {
    const assignSkills = (skills) => {
        const skillsObj = skills
            .split(',')
            .map((skill) => skill.trim())
            .reduce((acc, skill) => {
                acc[skill] = 0;
                return acc;
            }, {});
        return skillsObj;
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">Determine Your Background</h2>
            <p>
                Every character has a background, which determines their
                history, attributes, and general skills. Each background
                provides your character with five basic skills and one unique
                skill exclusive to the background.
            </p>
            <div className="grid grid-cols-1 gap-4">
                {backgrounds.map((option) => (
                    <div
                        key={option.name}
                        tabIndex="0"
                        className={`collapse collapse-arrow border-base-300 border-2 bg-base-100 shadow-sm cursor-pointer hover:border-base-300 ${
                            character.background.name === option.name
                                ? 'border-primary hover:border-primary'
                                : 'border-transparent'
                        }`}
                        onClick={() => {
                            handleSelection('background', option);
                            handleSelection(
                                'backgroundSkills',
                                assignSkills(option.coreSkills)
                            );
                        }}
                    >
                        <div className="collapse-title">
                            <strong>{option.name}</strong>
                            <p>{option.description}</p>
                        </div>
                        <div className="collapse-content text-sm">
                            <div className="divider mt-0 mb-4" />
                            <div className="grid grid-cols-1 gap-2">
                                <p>
                                    <strong>Core Skills:</strong>{' '}
                                    {option.coreSkills}
                                </p>
                                <p>
                                    <strong>Unique Skill:</strong>{' '}
                                    {option.uniqueSkill}
                                </p>
                                <p>
                                    <strong>Unique Expertise:</strong>{' '}
                                    {option.uniqueExpertise}
                                </p>
                                <p>
                                    <strong>Equipment:</strong>{' '}
                                    {option.equipment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundList;
