//fetch API Using async and await
const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
getData()
  .then((data) => {
    console.log(data[0]);
  })
  .catch((error) => {
    console.log("Data not Found", error);
  });

  //Fetch API Posting Data
function sheetData(e) {
  e.preventDefault();
  fetch(link).then((response)=>{
	  return response.json()
  }).then((data)=>{
	  const dataArr = data[0].jsonArray;
	   for (let i = 0; i < dataArr.length; i++) {
		const idArr = []; 
		idArr.push(dataArr[i].id)
		console.log(idArr)
		fetch(link, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: idArr[idArr.length -1] +1,
        agentName: document.getElementById("nameA").value,
        restaurant: document.getElementById("shop").value,
      }),
    });
	   }
  })
}
