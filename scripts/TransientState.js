// SET UP THE TRANSIENT STATE DATA STRUCTURE AND PROVIDE INITIAL VALUES
const transientState = {
  ownsBlueJeans: false,
  socioLocationId: 0,
};
// FUNCTIONS TO MODIFY EACH PROPERTY OF TRANSIENT STATE
export const setOwnsBlueJeans = (chosenOwnership) => {
  transientState.ownsBlueJeans = chosenOwnership;
  console.log(transientState);
};

export const setSocioLocationId = (chosenLocation) => {
  transientState.socioLocationId = chosenLocation;
  console.log(transientState);
};
// FUNCTION TO CONVERT TRANSIENT STATE TO PERMANENT STATE
