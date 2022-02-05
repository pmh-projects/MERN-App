import React from "react";
import { Carousel} from "react-bootstrap";


const Caro = () => {
    return(
<Carousel className="block-example border-bottom border-dark">
  <Carousel.Item>
    <img
      className="d-inline-block w-100"
      src="https://media-exp1.licdn.com/dms/image/C4E16AQH-yr-ZwCbeVQ/profile-displaybackgroundimage-shrink_200_800/0/1629112591213?e=1646265600&v=beta&t=NeBGuYP3lZy6vKq8Yy6Bfjk0EtSLkuLrRAZwNO-mhCg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Profesjonalizm</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.toeeks.eu/posts/sniffing-the-smbus/pexels-athena-2582937_hu3d03a01dcc18bc5be0e67db3d8d209a6_5192651_800x200_fill_q75_box_smart1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Jakość</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media-exp1.licdn.com/dms/image/C4E16AQH_P5rRRcweYw/profile-displaybackgroundimage-shrink_200_800/0/1633903483661?e=1645056000&v=beta&t=9ce3yDfprk4UvEmz_qEA2y01rX3_CXwG2CsvPeZ0Q4w"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Inteligentne rozwiązania</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Caro