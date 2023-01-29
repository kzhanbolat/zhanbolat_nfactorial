//letiables

const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("search");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");


let newsDataArr = [];

const API_KEY = "e9623202d0894b278f43630e368ac1da";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload(function() {
    newsType.innerHTML = "<h4>Headlines</h4>";
    fetchheadlines();
})


// generelBtn.addEventListener("click", function(){
//     fetchGeneralNews();
// });

generalBtn.addEventListener("click",function(){
    
    fetchGeneralNews();
});

businessBtn.addEventListener("click", function(){
    fetchBuisnessNews();
});
sportsBtn.addEventListener("click", function(){
    fetchSportNews();
});
technologyBtn.addEventListener("click", function(){
    fetchtechnologyNews();
});
entertainmentBtn.addEventListener("click", function(){
    fetchentertainmentNews();
});
newsQuery.addEventListener("click", function(){
    fetchQueryNews();
});

const fetchGeneralNews = async () => {
    const responce = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(responce.status >= 200 && responce.status < 300) {
        const myJson= await responce.json();
        newsDataArr = myJson.articles;
    } else {
        // error
        console.log(responce.status, responce.statusText);
    }
    displayNews();
};

const fetchSportNews = async () => {
    const responce = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(responce.status >= 200 && responce.status < 300) {
        const myJson= await responce.json();
        newsDataArr = myJson.articles;
    } else {
        // error
        console.log(responce.status, responce.statusText);
    }
    displayNews();
};

const fetchBuisnessNews = async () => {
    const responce = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(responce.status >= 200 && responce.status < 300) {
        const myJson= await responce.json();
        newsDataArr = myJson.articles;
    } else {
        // error
        console.log(responce.status, responce.statusText);
    }
    displayNews();
};

const fetchtechnologyNews = async () => {
    const responce = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(responce.status >= 200 && responce.status < 300) {
        const myJson= await responce.json();
        newsDataArr = myJson.articles;
    } else {
        // error
        console.log(responce.status, responce.statusText);
    }
    displayNews();
};

const fetchentertainmentNews = async () => {
    const responce = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(responce.status >= 200 && responce.status < 300) {
        const myJson= await responce.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
        
    } else {
        console.log(responce.status, responce.statusText);
        // error
    }
    displayNews();
};

const fetchQueryNews = async ()=> {
    if (newsQuery.value == null) 
        return;

    const responce = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if (responce.status >= 200 && responce.status < 300) {
        const myJson= await responce.json();
        newsDataArr = myJson.articles;
    } else {
        //error
        console.log(responce.status, responce.statusText);
    }
    displayNews();
};


function displayNews() {

    newsdetails.innerHTML = "";

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {
    
        let date = news.publishedAt.split("T");

        let col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";
        let card = document.createElement('div');
        card.className = "p-2";

        let image = document.createElement('img');
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        let cardBody = document.createElement('div');

        let newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        let discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        let link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blanck");
        link.href = news.url;
        link.innerHTML = "Read more"

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}




