export const LocationTypeChoices = async () => {
  const response = await fetch("http://localhost:8088/socioLocations");
  const locations = await response.json();
  let choicesHTML = "<h4>In what type of area do you live ?</h4>";
  for (const location of locations) {
    choicesHTML += `<input type="radio" name="location" value="${location.id}"/> ${location.label}`;
  }
  return choicesHTML;
};
