const boutique=document.querySelector ("#articles")

function Article (value,nom,genre,prix,img, stock) {
    this.value=value,
    this.nom=nom,
    this.genre=genre,
    this.prix=prix,
    this.img=img,
    this.stock=stock
}



const article1 = new Article (1,"Nike Air Force","Homme/femme","50€","nikeairforce.jpg",10)
const article2 = new Article (2,"Nike Air max 270","Homme/femme","40€","nikeairmax270.jpg",10)
const article3 = new Article (3,"Adidas Stan Smith","Homme/femme","45€","airjordan1.jpg",10)
const article4 = new Article (4,"Adidas Stan Smith","Homme/femme","45€","airjordan1.jpg",10)




let articles=[]
articles.push(article1,article2,article3,article4)

function affichageProduits (){

    let listOfProducts='';

    
articles.forEach (article=> 
    listOfProducts +=
    `
 <div class="card" style="width: 18rem;">
    <img src=${article.img} class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${article.nom}</h5>
      <p class="card-text">${article.genre}</p>
      <p class="card-text">${article.prix}</p>
     
      <label for="q">Quantité: </label>
            <select id="qt" name="q">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
        </select>

        
        <button  class="btn-panier">Acheter</button>
    </div>
    
  </div>
  `
)

boutique.innerHTML= listOfProducts;

let btns=document.querySelectorAll(".btn-panier");
btns.forEach(function (btn) {
    let quantité= document.querySelector("#qt")

    btn.addEventListener("click", function(e) {
        console.log(quantité.target);
        
    })

})

}



affichageProduits()



// function ajoutpanier () {
//      localStorage.setItem(this.Article,"salut");
   
// }


// let btns=document.querySelectorAll("button");

// btns.forEach (function (btnAch) {
//     btnAch.addEventListener("click", function () {
//         console.log(this.value);
        
//     })
// })


