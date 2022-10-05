
<div id="top"></div>


<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="Logo" width="50%"">
  </a>
<h3 align="center">Aplikacja MERN</h3>
<p align="center">
Grupa N32-31
<br>
Paweł Mach
<br><br>
  </p>
</div>
                 
<p align="center">
<img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png" width="10%"><br>
<b><i>EqOnFire</i></b><br>
<i>The best suppliers of IT equipment</i>
</p>        

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Spis treści</summary>
  <ol>
    <li>
      <a href="#opis">Opis</a>
      <ul>
        <li><a href="#architektura-oprogramowania">Architektura oprogramowania</a></li>
      </ul>
    </li>
    <li>
      <a href="#strona-główna">Strona główna</a>
    </li>
    <li>
      <a href="#menu-strony">Menu strony</a>
    </li>
        <li>
      <a href="#baza-danych">Baza danych</a>
      <ul>
        <li><a href="#lista">Lista</a></li>
        <li><a href="#dodawanie">Dodawanie</a></li>
        <li><a href="#edycja">Edycja</a></li>
        <li><a href="#usuwanie">Usuwanie</a></li>
      </ul>
    </li>
    <li><a href="#informacje">Informacje</a></li>
    <li><a href="#statystyki">Statystyki</a></li>
  </ol>
</details>


## Opis

Aplikacja CRUD w technologii MERN, za pomocą której tworzona jest lista produktów (dodawanie, usuwanie, edycja i przegląd).
Umożliwia również przegląd informacji i statystyk dotyczących działalności.
Na każdej stronie jest widoczny Slider-Carousel, Navbar (menu) oraz Footer.

### Architektura oprogramowania

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org//)
* [Node.js](https://nodejs.org/)
* [Bootstrap](https://getbootstrap.com)                       
* [MDBReact](https://mdbootstrap.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
                                
## Strona główna
                                
Strona powitalna, z której można bezpośrednio przejść do bazy danych za pomocą button'u "Baza Danych".
<p align="center">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1e.jpg" width="50%">
  <img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1f.jpg" width="50%">
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                
## Menu strony

Menu strony wykonane zostało z użyciem Navbar Bootstrap, dzięki temu jest wysoce funkcjonalne, estetyczne i responsywne.                              
<p align="center">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1a.jpg" width="50%">

Z pozycji menu można przejść do wszystkich podstron:
Strony głównej, bazy danych, informacji oraz statystyk.
Routing obsługiwany jest poprzez BrowserRouter z biblioteki react-router-dom:
```
<Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/database" element={<Database/>} />
          <Route path="/info" element={<Info/>} />
          <Route path="/stats" element={<Stats/>} />
</Routes>
```
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                
## Baza danych

Główna część aplikacji wykonana z pomocą modułu Axios i biblioteki React.                             
### Lista                                                                                            

Umożliwia przejrzenie zawartości bazy danych Mongoose.
Do weryfikacji stanu faktycznego i pozycji danych w bazie wykorzystano niezawodne i szybkie narzędziee MongoDB Compass.
Dla poprawienia przejrzystości lista jest rozwijana. Funkcje CRUD działają dla każdej pozycji z osobna i są zabezpieczone Alert'ami przed wykonaniem przypadkowych nieporządanych czynności.
<p align="center">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/baza.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/baza2.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/3.jpg" width="50%">
</p>          
 
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                      
### Dodawanie 
  
Dla funkcji dodawania został utworzony osobny dedykowany formularz, który widoczny jest z poziomu strony jako okno z dwoma polami oraz button'em "Dodaj".
Po zatwierdzeniu dodawanej pozycji pojawia się ona w bazie danych Mongoose oraz na liście, która jest po prawej stronie na tej samej stronie.
<p align="center">                                                                                       
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/5.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/mongocompass.jpg" width="50%">
</p>                  
<p align="center">                         
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/dodano.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/nie_dodano.jpg" width="50%">
</p>  

```
const dodaj = () => {
console.log(eqName + eqNum);

if(eqNum > 0){
Axios.post("http://localhost:3000/dodaj", {eqName: eqName, eqNum: eqNum })
.then((response)=>{
  alert("Dodano");
  setEqList([...eqList, { _id: response.data._id, eqName: eqName, eqNum: eqNum}]);
})
.catch(()=>{
  alert("Nie dodano");
});
}else{
  alert("Nie dodano. Spróbuj jeszcze raz.");
}
};
```                                                                                                
                                                                                                
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                                
### Edycja
 
Aby edytować żądaną pozycję należy rozwinąć listę za pomocą button'a "ROZWIŃ". Edytowana pozycja jest widoczna automatycznie na liście.                                
<p align="center">                                                                                                
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/7.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/8.jpg" width="50%">
</p>
                                                                                       
```
const updateNum = (id) => {
  var odp= window.confirm("Czy napewno edytować?");
  if(odp === true){
    if(newEqNum < 1){
      alert("Nie edytowano. Spróbuj jeszcze raz");
    }else{
  Axios.put("http://localhost:3000/edytuj", {id: id, newEqNum: newEqNum});
  window.location.reload();
    }
}
};
```
 
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                           
### Usuwanie

Podobnie jest w wypadku żądania usuwania. Tak samo należy rozwinąć listę i użyć specjalnie do tego utworzonego button'u "Usuń".
<p align="center">                                                                                            
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/9.jpg" width="50%">
</p>
                                                                                       
```
const usunEq = (id) => {
  var odp= window.confirm("Czy napewno usunąć?");

  if(odp === true)
  Axios.delete(`http://localhost:3000/usun/${id}`).then(()=>{
    setEqList(eqList.filter((val)=>{
      return val._id !== id;
  })
  );
});
};
```

Obsługa czynności CRUD zakodowana została w komponencie database.js po stronie klienta oraz index.js po stronie serwera. Użyto również schematu moongose (models/eq.js) reprezentującego strukturę dokumentu do interakcji z bazą danych.
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                
## Informacje

Dodatkowo udostępniono stronę, na której widoczne są informacje o aktualnej działalności. Do zbudowania komponentu (info.js) wykorzystano narzędzia Bootstrap: Card oraz Accordion.
<p align="center">                                                                                          
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/10.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/13.jpg" width="50%">
</p>   

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                     
## Statystyki

W celu ulepszenia funkcjonalności strony została utworzona strona, na której można przejrzeć statystyki z działalności.
W tym celu utworzono dwa komoponenty stats.js i stats2.js oraz wykorzystano dodatkową bibliotekę MDBreact, która oferują dodatkowe opcje wizualizacji.
<p align="center">                                                                                         
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/14.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/15.jpg" width="50%">
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>                            
