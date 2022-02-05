import React from "react";
import {Accordion, Card, CardGroup, Container, Button } from "react-bootstrap";

const Info = () => {
  return (
    <Container className="mt-4">
      <h3 className="mt-5 w-responsive text-center mx-auto p-3 mt-2">Informacje</h3>
    <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Dostawa 56</Accordion.Header>
    <Accordion.Body>
      W dniu 27.02.2022 firma QWERTYSOL dostarczy 100 sztuk monitorów LCD. Proszę o wprowadzenie ich jako osobne produkty wg marki.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Dostawa 57</Accordion.Header>
    <Accordion.Body>
       W dniu 31.02.2022 firma QAZIT dostarczy 30 nowych płyt głównych. Proszę o wprowadzenie ich wg dotychczasowych standardów.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Dostawa 58</Accordion.Header>
    <Accordion.Body>
       W dniu 03.03.2022 firma WSX dostarczy 100 plyt CD i 100 płyt DVD. Proszę o wprowadzenie ich wg dotychczasowych standardów.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Dostawa 59</Accordion.Header>
    <Accordion.Body>
       W dniu 12.03.2022 firma ITZXC dostarczy 40 nowych CPU. Proszę o wprowadzenie ich wg dotychczasowych standardów.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<CardGroup className="mt-4">
  <Card>
    <Card.Img variant="top" src="https://www.maxpixel.net/static/photo/1x/Motherboard-Chip-Board-Technology-Tech-Computer-822056.jpg" />
    <Card.Body>
      <Card.Title>Płyty główne</Card.Title>
      <Card.Text>
        Najnowsze wytyczne, procedury, zasady oraz dokumentacja techniczna dotycząca płyt głównych.
        <br/>
        <a href="#" class="stretched-link">POBIERZ DOKUMENT</a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Dodano 15.12.2021</small>
    </Card.Footer>
  </Card>
  <Card className="text-center">
  <Card.Header>Hurtownia</Card.Header>
  
  <Card.Body>
    <Card.Title>Złożenie zamówienia</Card.Title>
    <Card.Text>
      Domówienie produktów. Przejdź na stronę hurtowni i złóż zamówienie po akceptacji Manager'a i działu zamówień.
    </Card.Text>
    <Button variant="primary">Strona hurtowni KLIKNIJ</Button>
  </Card.Body>
  
  <Card.Footer className="text-muted">Dodano 20.12.2021</Card.Footer>
</Card>
  <Card>
    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/04/06/00/39/amd-1310766_960_720.jpg" />
    <Card.Body>
      <Card.Title>Procesory</Card.Title>
      <Card.Text>
         Proszę o zaznajomienie się z dokumentem:
        <br/>
        <a href="#" class="stretched-link">POBIERZ DOKUMENT</a>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Dodano 18.01.2022</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Container>
  );
}

export default Info;