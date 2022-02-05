import React, { useState, useEffect } from "react";
import Axios from 'axios'
import {Card, CardGroup, Col, Row, Collapse, Container, Form, Button} from "react-bootstrap";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import 'mdbreact/dist/css/mdb.css';
import '../App.css';


function Database() {

  const [eqName, setEqName] = useState("");
  const [eqNum, setEqNum] = useState(0);

  const [newEqNum, setNewEqNum] = useState(0);

  const [eqList, setEqList] = useState([]);
  const [open, setOpen] = useState(false);

useEffect(()=>{
Axios.get('http://localhost:3000/odczyt')
.then((response)=>{
 
  setEqList(response.data);
})
.catch(() => {
  console.log("error");
});
}, []);

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

  return (

<div className="App">


<Container className="rounded-3 border border-primary mt-5 mb-5" style={{ margin: '25px auto auto auto', padding: '25px'}}>
  <Row>
    <Col xs={6} md={4}>
<Container>
  <Row>
    <Col xs={12}>
<Form className="square border border-primary mt-5 mb-5" style={{ padding: '20px'}}>
  <h5>Dodaj towar</h5>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Produkt</Form.Label>
    <Form.Control type="text" 
     onChange={(event) => { 
         setEqName(event.target.value);
      }} placeholder="Podaj nazwę produktu" />
    <Form.Text className="text-muted">
      Wpisz bez BarCode
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Liczba</Form.Label>
    <Form.Control type="number" 
     onChange={(event) => { 
         setEqNum(event.target.value);
      }} placeholder="Podaj ilość" />
  </Form.Group>
  <Button variant="primary" onClick={dodaj} type="submit">
    Dodaj
  </Button>
</Form>
</Col>
<Col></Col>
</Row>
</Container>
</Col>
<Col sm={8}>
<Container>
<Row>
<Col></Col>
<Col xs={12} md={8}>
<h1 className="mt-5">Lista
<Button variant="outline-primary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      Rozwiń
      </Button>
</h1>
<div className="listOfEq">
{eqList.map((val, key) => {
return (
  <CardGroup>
  <Card border="primary" style={{ width: '18rem', margin: '2px' }}>
  <Card.Header><Card.Title className="text-center">{val.eqName}</Card.Title></Card.Header>
  <Card.Body>
  <div className="equipment">
<div key={key}>
<Card.Text className="text-center"><h2>{val.eqNum}</h2></Card.Text>
</div>

      <Collapse in={open}>
        <div id="example-collapse-text">
        <Form className="d-inline-flex">
<Row>
<Col md={3}>
  <Button variant="primary" onClick={() => updateNum(val._id)} type="submit">
    Edytuj
  </Button>
  </Col>
  <Col md={1}></Col>
  <Col md={7}>
  <Form.Control className="mt-2" type="number" placeholder="Wpisz nową wartość" 
     onChange={(event) => { 
      setNewEqNum(event.target.value);
      }}
  />
</Col>
</Row>
</Form>
<Button variant="danger" onClick={() =>{
usunEq(val._id);
}}>Usuń pozycję</Button>
</div>
      </Collapse>
  </div>
  </Card.Body>
</Card>
  </CardGroup>
);

})}
</div>
</Col>
<Col></Col>
</Row>
</Container>
</Col>
</Row>
</Container> 


</div>
  );  
}

export default Database;