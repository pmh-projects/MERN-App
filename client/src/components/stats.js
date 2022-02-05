import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer, MDBRow } from "mdbreact";
import Stats2 from "./stats2";

class Stats extends React.Component {

  state = {
    dataBar: {
      labels: ["CPU", "RAM", "Motherboard", "Coller", "SSD", "HDD", "DVD", "CD"],
      datasets: [
        {
          label: "Ilość sprzedaży detal",
          data: [27, 30, 22, 4, 14, 22, 34, 42],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  render() {
    return (
      <MDBContainer className="w-responsive text-center mx-auto p-3 mt-2">
        <MDBRow>
        <h3 className="mt-5">Sprzedaż grudzień</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
        </MDBRow>
        <MDBRow>
        <Stats2/>
        </MDBRow>
      </MDBContainer> 
    );
  }

}

export default Stats;