import React from "react";

const Home = (props) => {
  return (
    
      <div className="text-black text-center py-5 px-4 mt-5 mb-5">

        <div className="py-5 rounded-3 border border-primary" style={{ wordBreak: 'break-all', backgroundColor: '#0080ff', margin: '0 25% 1% 25%', padding: '5%'}}>
          <h5 className="h3 white-text"><i className="fas fa-camera-retro"></i>The best IT equipment</h5>
          <h2 className="card-title h2 my-4 py-2"><i>"Profesjonalizm, jakość, inteligentne rozwiązania"</i></h2>
        </div>
        <img src="https://freesvg.org/img/publicdomainq-desktop_computer_parts.png" style={{width: '20%'}}></img>
        <div className="py-5 rounded-3 border border-primary" style={{ wordBreak: 'break-all', backgroundColor: '#0080ff', margin: '1% 30% 4% 30%', padding: '5%'}}>
          <p className="mb-4 pb-2 px-md-5 mx-md-5">Witaj!<br/> Kliknij poniżej, aby przejść do podstrony z bazą produktów</p>
          <a className="btn blue-gradient rounded-3 border border-primary" href="http://localhost:3001/database"><i className="fas fa-clone left"></i> Baza Danych</a>
    
        </div>
      </div>
   
  );
}

export default Home;