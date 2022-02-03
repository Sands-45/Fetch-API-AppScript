
const link =
  "https://script.google.com/macros/s/AKfycbzTC7pSZeyMloKFaGG81XCv35HxDREKK7CUIvKzAZdMOBrwkOkOmRd-H6BxYtb5NTrs/exec?action=addData";
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
