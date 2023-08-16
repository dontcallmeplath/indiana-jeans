export const SubmissionList = async () => {
  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  let submissionHTML = `<section id="submission-list">`;
  // Iterate the submissions and create some <section> representations
  for (const item of submissions) {
    submissionHTML += `<article id="submissions"> owns blue jeans: ${item.ownsBlueJeans} + location id: ${item.socioLocationId} </article>`;
  }
  submissionHTML += `</section>`;
  // Return the HTML string
  return submissionHTML;
};
