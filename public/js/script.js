
//get 7 days from now

let end_date = new Date();
let start_date=new Date();
start_date.setDate(start_date.getDate() - 6);



let s=start_date.toISOString().slice(0, 10);
let e=end_date.toISOString().slice(0, 10);


//fetch data from API

async function sendApiRequest(){
  let API_KEY = "wFFfCeqnieuXJb7x9x5muphYTDcCN6AEHIXotFCY";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${s}&end_date=${e}`);
  //console.log(response);
  let data = await response.json()
  useApiData(data);

}

function useApiData(data){
  let cards=document.querySelectorAll(".jm-photoCard");
  //console.log(cards[1] > $("small.taken-date"))



  for (let i=0; i<7; i++){
    //cards[i].find('img').attr('src',data[i].url);
    cards[i].querySelector("img").src = data[6-i].url;
    cards[i].querySelector("p.card-text").innerHTML=data[6-i].explanation;
    cards[i].querySelector("h3").innerHTML=data[6-i].title;
    cards[i].querySelector("small.taken-date").innerHTML = data[6-i].date;

  }
}

sendApiRequest();
