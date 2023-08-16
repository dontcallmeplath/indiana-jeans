import { OwnJeansChoices } from "./OwnsJeans.js";
import { SaveSubmission } from "./SaveSubmissions.js";
import { LocationTypeChoices } from "./UrbanDweller.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = OwnJeansChoices();
  const locationsHTML = await LocationTypeChoices();
  const buttonHTML = await SaveSubmission();
  container.innerHTML = `${jeanOwnershipHTML} ${locationsHTML} <br>${buttonHTML}`;
};
render();
