import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class Stats2 extends React.Component {
  state = {
    dataHorizontal: {
      labels: ["CPU", "RAM", "Motherboard", "Coller", "SSD", "HDD", "DVD", "CD"],
      datasets: [
        {
          label: 'Łączna sprzedaż',
          data: [278, 392, 417, 67, 676, 278, 334, 457],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className='mt-5'>2022</h3>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default Stats2;