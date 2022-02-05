
<div id="top"></div>


<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="Logo" width="50%"">
  </a>
<h3 align="center">Aplikacja MERN</h3>

<p align="center">
Informatyka i ekonometria
<br>
specj. Aplikacje informatyczne w biznesie
<br>
Grupa N32-31
<br>
Paweł Mach
<br><br>
  </p>
</div>
                 
<p align="center">
<img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/fire_1f525.png" width="10%"><br>
<b><i>EqOnFire</i></b>
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
* [Visual Studio Code](https://code.visualstudio.com/)

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                
## Strona główna

<p align="center">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1e.jpg" width="50%">
  <img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1f.jpg" width="50%">
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                
## Menu strony

<p align="center">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/1a.jpg" width="50%">
                                                                                        
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

### Lista                                                                                            
                                                                                            
<p align="center">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/baza.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/baza2.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/3.jpg" width="50%">
</p>          
 
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                      
### Dodawanie 
     
<p align="center">                                                                                       
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/5.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/mongocompass.jpg" width="50%">
</p>                  
<p align="center">                         
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/dodano.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/nie_dodano.jpg" width="50%">
</p>  

```
app.post("/dodaj", async (req, res) => {

   const eqName = req.body.eqName;
   const eqNum = req.body.eqNum;

   const Eq = new EqModel({eqName:eqName, eqNum: eqNum});

   try{
       await Eq.save();
       res.send("Dodano");
     
   }catch(err){
       console.log(err);
   }
});
```                                                                                                
                                                                                                
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                                
### Edycja
 
<p align="center">                                                                                                
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/7.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/8.jpg" width="50%">
</p>
                                                                                       
```
app.put('/edytuj', async (req,res) => {
    const newEqNum = req.body.newEqNum;
    const id = req.body.id;

    if (!isNaN(newEqNum) && newEqNum != null && newEqNum != 0 && newEqNum > 0){
    try {
        await EqModel.findById(id, (err, updatedNum) => {
            updatedNum.eqNum = newEqNum;
            updatedNum.save();
            res.send('Edytowano');
        });
    }catch(err){
        
        console.log(err);
    }
}else{
    res.send("Nie edytowano.");
}
});
```
 
<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                           
### Usuwanie
                                                                                            
<p align="center">                                                                                            
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/9.jpg" width="50%">
</p>
                                                                                       
```
app.delete('/usun/:id', async (req, res) => {
    const id = req.params.id;
    await EqModel.findByIdAndRemove(id).exec()
    res.send("Usunięto");
})
```

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                
## Informacje

<p align="center">                                                                                          
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/10.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/13.jpg" width="50%">
</p>   

<p align="right">(<a href="#top">wróc do góry</a>)</p>
                                                                                                                     
## Statystyki

<p align="center">                                                                                         
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/14.jpg" width="50%">
<img src="https://github.com/pmh-projects/mern/blob/main/screenshots/15.jpg" width="50%">
</p>

<p align="right">(<a href="#top">wróc do góry</a>)</p>                            
