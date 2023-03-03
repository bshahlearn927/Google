import { Directions } from "@mui/icons-material";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settingsBack = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: true,
      centerMode: true,
      adaptiveHeight: true,
      fade: true,
      arrows: true,
      autoplaySpeed: 5000,
      className: "slides",
    };
    const { stores } = this.props;
    // console.log("stores", stores);
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settingsBack}>
          {stores.map((stores, index) => (
            <div key={index}>
              {/* <h1 style={{ margin: "20px" }}><img style={{ width: "25%" }} src={stores[index]["img"]} /><br />{stores[index]["name"]}<br />{stores[index]["amt"]}<br />{stores[index]["price"]}<br />{stores[index]["discount"]}</h1> */}
              <h4>{stores.name}</h4>
              <img alt={stores.img} src={stores.img} width="100" height="100" />
              <p>${stores.amt}</p>
              <p>${stores.price}</p>
              <p>${stores.discount}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
