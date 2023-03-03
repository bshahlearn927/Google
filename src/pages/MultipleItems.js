import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
    const { stores } = this.props;
    console.log("stores", stores);



    // do not use something like below- instead go for a map function 
    // do not use x<Infinity as the loop will carry on and it will cause page break
    // for(var x=0;x<3;x++){
    //   if(stores==true){
    //     if(stores[x]==true){
    //       return (
    //         <div>
    //           <h2> Multiple items </h2>
    //           <Slider {...settings}>
    //             <div>
    //               <h1 style={{ margin: "20px" }}><img style={{ width: "25%" }} src={stores[x]["img"]} /><br />{stores[x]["name"]}<br />{stores[x]["amt"]}<br />{stores[x]["price"]}<br />{stores[x]["discount"]}</h1>
    //             </div>
    //           </Slider>
    //         </div>
    //       );
    //     }
    //   }
    // }


    // what I wanted to write
    // this is printed in console and not in ui/webpage
    // if (stores === true) {
    //   for (let i = 0; i < stores.length; i++) {
    //     if (stores[i] === true) {
    //       return (
    //         <div>
    //           <h2> Multiple items </h2>
    //           <Slider {...settings}>
    //             <div>
    //               <h1 style={{ margin: "20px" }}><img style={{ width: "25%" }} src={stores[i]["img"]} /><br />{stores[i]["name"]}<br />{stores[i]["amt"]}<br />{stores[i]["price"]}<br />{stores[i]["discount"]}</h1>
    //             </div>
    //           </Slider>
    //         </div>
    //       );
    //     }
    //     stores[i] = ++stores[i];

    //   }
    // }


    // this code returns in console too
    // if (stores === true) {
    //   for (let i = 0; i < stores.length; i++) {
    //     if (stores[i] === true) {
    //       stores[i] = ++stores[i];

    //     }
    //     return (
    //       <div>
    //         <h2> Multiple items </h2>
    //         <Slider {...settings}>
    //           <div>
    //             <h1 style={{ margin: "20px" }}><img style={{ width: "25%" }} src={stores[i]["img"]} /><br />{stores[i]["name"]}<br />{stores[i]["amt"]}<br />{stores[i]["price"]}<br />{stores[i]["discount"]}</h1>
    //           </div>
    //         </Slider>
    //       </div>
    //     );
    //   }
    // }

    // stores.forEach((element, index, array) => {
    //   console.log(element, index, array);
    // });
    // final map function used
    // console.log(stores.map(element=> ++element));
   
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}