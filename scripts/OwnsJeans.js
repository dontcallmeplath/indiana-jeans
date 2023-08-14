export const OwnJeansChoices = () => {
  let html = `<h4>Do you own a pair of blue jeans ?</h4>`;
  html += `<input type="radio" name ="ownsJeans" value="true" /> Yes`;
  html += `<input type="radio" name ="ownsJeans" value="false" /> No`;
  return html;
};
