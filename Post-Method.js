
const link =
  "https://script.google.com/macros/s/AKfycbwuB68-q4HaoLldyWX7cat8GAIHZIbZ-V_uV_QAh9MH8WnVAhXhh7Wvyj5egmn72m02/exec";
const postData = document.getElementById("postData");

//Fetch API Posting Data
function sheetData(e) {
  e.preventDefault();
  fetch(link, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: Math.random(10) * 10,
     email: document.getElementById("nameA").value,
      restaurant: document.getElementById("shop").value,
    }),
  });
}

postData.addEventListener("submit", sheetData);
