const articlesFromAPI =[
    {

    id: 1,
    author: "john",

    title: "title1",

    summary: "7 practiacal css",
    src: "./assets/1.png"

}, 
{

    id: 2,
    author: "Marry",

    title: "title2",

    summary: "8 practiacal css",
    src: "./assets/1.png"

}, 
];

let article = `<div d-flex justify-content-between>
    <div>
        <p id="author"></p>
        <p id="title"></p>
        <p id="summary"></p>
    </div>
    <img src="" alt = "img_here"/>
</div>`;


const articles= document.getElementById("articles");

// articlesFromAPI.forEach((item) => {
//     let newArticle = article.replace('id="author">', `id="author">${item.author}`);
//     newArticle = article.replace('id="title">', `id="title">${item.title}`);
//     // articles.innerHTML +=newArticle;
//     newArticle = article.replace('id="summary">', `id="summary">${item.summary}`);
//     // articles.innerHTML +=newArticle;
    
//     // articles.innerHTML +=newArticle;
//     newArticle = article.replace('src=""', `src="${item.src}"`);
//     articles.innerHTML += newArticle;
//     // articles.innerHTML +=newArticle2;
//     // articles.innerHTML +=newArticle3;
// });

console.log("jumbo")
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response)=>response.json())
.then(data=>
    (data.splice(0,5).forEach(item => {
        articles.innerHTML+=
        `<div class = "content">

        <div class = "content_head">

            <h5>User_id: ${item.userId}</h2>

            <h2>Title: ${item.title}</h2>

            <p>ID: ${item.id}</p>

        </div>

        <div class = "content_bottom">

            <div class = "bottom_stracture">

                <div class = "bottom_text">

                    <h5>Java Script</h5>

                        <p> 12 min read Selected for you</p>

                </div>                        

            </div>

            <div class="boxall">

                <div class="box bone">

                </div>

                <div class="box btwo">

                </div>

                <div class="box bthree">

                </div>

            </div>

        </div>

        <div class="img">

                <img src="./assets/1.png" alt="img">

            </div>

    </div>
    <div class="line"></div>`
        
        
        
        
       
    })
    )
    )

//     `<div d-flex justify-content-between>
//     <div>
//         <p id="author">${item.userId}</p>
//         <p id="title">${item.title}</p>
//         <p id="summary">${item.id}</p>
//     </div>
    
// </div>`

.catch(e=>console.log(e))


console.log("jumbo")
