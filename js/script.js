const baseURL = 'https://api.chucknorris.io/jokes/';

const app = document.getElementById('body-app');
const main = document.getElementById('main-category');



axios.get(baseURL + 'categories').then (
    res => {
        console.log('Categorias', res.data);
        let AllCategories = res.data;

        let MainCard = AllCategories.map(main => ( `
        <li class="nav-item m-1">
        <button class="btn btn-primary" type="button" onClick="Category('${main}')">${main.toUpperCase()}</button>
        </li>
        `)).join('');
        let random =  `<li class="nav-item m-1">
        <button class="btn btn-primary" type="button" onClick="Random()">RANDOM</button>
        </li>`;
        main.innerHTML = MainCard + random;
    }
);


function Random() {
    axios.get(baseURL + 'random').then (
        res => {
            console.log(res.data);

            const FirstCard = `

            <div class="card">
              <div class="card-body">
                <p class="card-text">${res.data.value}</p>
              </div>
            </div>
            `;
            app.innerHTML = FirstCard;
        }
    );
}

function FindJokes() {
    let InputJokeValue = document.getElementById('joke-value').value;

    axios.get(baseURL + 'search?query=' + InputJokeValue).then(
        res => {
          
        let data = res.data.result;

        let cards = data.map( main => (
          `
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <p class="card-text">${main.value}</p>
                </div>
              </div>
            </div>
          `
        )).join('');


            app.innerHTML = cards;
        }
    )
    console.log (InputJokeValue);

 
}


function Category(category) {

    console.log(category);
  
    axios.get( baseURL + 'random?category=' + category ).then(
      res => {
  
        console.log( 'Random: ', res.data );
  
        let data = res.data;
  
        const card = `
          <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <p class="card-text">${data.value}</p>
            </div>
          </div>
        `;
  
        app.innerHTML = card;
      }
    );
  }

// const MainDefault = `  
//             <li class="nav-item">
//                 <a href=""> 1234 </a>
//             </li>`;

// const MainCard = `
//             <div class="card m-4" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <p class="card-text"></p>
//                 </div>
//             </div>
// `;