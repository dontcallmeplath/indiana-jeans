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
export const saveSurveySubmission = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const response = await fetch(
    "http://localhost:8088/submissions",
    postOptions
  );
};
