import pkg from 'file-saver';
const { saveAs } = pkg;
import PdfExportButton from './PdfExportButton';

const FinalizeCharacter = ({ character, handleInputChange }) => {
    const exportToJSON = () => {
        const jsonData = JSON.stringify([character], null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        saveAs(blob, 'character.json');
    };

    const getJoinedSkills = () => {
        const joinedSkills = {
            ...character.speciesSkills,
        };

        for (const [key, value] of Object.entries(character.backgroundSkills)) {
            if (joinedSkills[key] === undefined || value > joinedSkills[key]) {
                joinedSkills[key] = value; // take the higher value
            }
        }

        return joinedSkills;
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold">Finishing Touches</h2>
            <p>
                Take some time to flesh out your character. Describe how they
                look, how they act, their personality, motivations, and anything
                else you can think of! Once satisfied, finalize your character
                by clicking <strong>Finish</strong> or <strong>Export</strong>{' '}
                it for later.
            </p>
            <div className="card bg-base-100 shadow-sm mb-4">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-sm">
                            Name:
                        </legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Write your name here."
                            onChange={(e) =>
                                handleInputChange('name', e.target.value)
                            }
                        />
                    </fieldset>

                    <div className="grid grid-cols-2 gap-4">
                        <p>
                            <strong>Species:</strong> {character.species.name}{' '}
                            {character.subSpecies &&
                                `(${character.subSpecies.name})`}
                        </p>
                        <p>
                            <strong>Background:</strong>{' '}
                            {character.background.name}
                        </p>
                    </div>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-sm">
                            Description:
                        </legend>
                        <textarea
                            className="textarea h-24 w-full"
                            placeholder="Write your description here."
                            onChange={(e) =>
                                handleInputChange('description', e.target.value)
                            }
                        ></textarea>
                        <div className="label">(Optional)</div>
                    </fieldset>

                    <div className="divider my-0" />

                    <strong>Attributes:</strong>
                    <table className="table">
                        <tbody>
                            {Object.entries(character.stats).map(
                                ([statName, value]) => (
                                    <tr key={statName}>
                                        <th>{statName}</th>
                                        <td>{value}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>

                    <div className="divider my-0" />

                    <strong>Skills:</strong>
                    <table className="table">
                        <tbody>
                            {Object.entries(getJoinedSkills()).map(
                                ([statName, value]) => (
                                    <tr key={statName}>
                                        <th>{statName}</th>
                                        <td>{value}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="divider mt-0" />

                <div className="flex flex-col lg:flex-row justify-center gap-4 px-4 pb-4">
                    <div>
                        <p className="mb-2">Save for Future Sessions:</p>
                        <button onClick={exportToJSON} className="btn btn-soft">
                            Export Character as JSON
                        </button>
                    </div>
                    <div>
                        <p className="mb-2">Printing & Sharing:</p>
                        <PdfExportButton character={character} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalizeCharacter;
