const table = document.getElementById("table");
const url =
  "https://script.google.com/macros/s/AKfycbzTC7pSZeyMloKFaGG81XCv35HxDREKK7CUIvKzAZdMOBrwkOkOmRd-H6BxYtb5NTrs/exec";

//Fetch API Json Data
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const dataArr = data[0].jsonArray;
    for (let i = 0; i < dataArr.length; i++) {
      const tr = document.createElement("tr");
      const iD = document.createTextNode(dataArr[i].id);
      const agentName = document.createTextNode(dataArr[i].agentName);
      const Restaurant = document.createTextNode(dataArr[i].restaurant);
      const tdId = document.createElement("td");
      const tdName = document.createElement("td");
      const tdShop = document.createElement("td");
	  tdId.appendChild(iD)
	  tdName.appendChild(agentName)
	  tdShop.appendChild(Restaurant)
      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdShop);
      table.appendChild(tr);
    }
    console.log(data[0].jsonArray);
  })
  .catch((error) => {
    console.log(error);
  });
