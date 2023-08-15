import { setOwnsBlueJeans } from "./TransientState.js";

export const OwnJeansChoices = () => {
  document.addEventListener("change", handleOwnershipChange);

  let html = `<h4>Do you own a pair of blue jeans ?</h4>`;
  html += `<input type="radio" name ="ownsJeans" value="true" /> Yes`;
  html += `<input type="radio" name ="ownsJeans" value="false" /> No`;
  return html;
};

const handleOwnershipChange = (changeEvent) => {
  if (changeEvent.target.name === "ownsJeans") {
    const convertedToBool = JSON.parse(changeEvent.target.value);
    setOwnsBlueJeans(convertedToBool);
  }
};
