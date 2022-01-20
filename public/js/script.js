
//fetch data from API
async function sendApiRequest(){
  let API_KEY = "wFFfCeqnieuXJb7x9x5muphYTDcCN6AEHIXotFCY";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response);
  let data = await response.json()
  console.log(data);
  useApiData(data);

}
function useApiData(data){
  $("#today img").attr('src',data.url);
  $("#today p.card-text").text(data.explanation);
  $("#today h3").text(data.title);
  $("#today small.taken-date").text(data.date);
}

sendApiRequest();


/*
var today = document.getElementById("today");
today.querySelector("p.card-text").innerHTML = data.explanation;
today.querySelector("img").src = data.url;
*/
