import { OwnJeansChoices } from "./OwnsJeans.js";
import { SaveSubmission } from "./SaveSubmissions.js";
import { LocationTypeChoices } from "./UrbanDweller.js";
import { SubmissionList } from "./Submissions.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = OwnJeansChoices();
  const locationsHTML = await LocationTypeChoices();
  const buttonHTML = await SaveSubmission();
  const responseHTML = await SubmissionList();
  container.innerHTML = `${jeanOwnershipHTML} ${locationsHTML} <br>${buttonHTML} ${responseHTML}`;
};

document.addEventListener("newSubmissionCreated", render);

render();
