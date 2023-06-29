import React from "react";

import Relocation from "./Components/Relocation/Relocation";
import WhatWeCan from "./Components/WhatWeCan/WhatWeCan";
import BusinessInNetherlands from "./Components/BusinessInNetherlands/BusinessInNetherlands";

import bgcity from "../../assets/bgbcity.png";
import Results from "./Components/Results/Results";
import Products from "./Components/Products/Products";
import ForClients from "./Components/ForClients/ForClients";
import YoutubeChannel from "./Components/YoutubeChannel/YoutubeChannel";
import WhyNetherlands from "./Components/WhyNetherlands/WhyNetherlands";
import Reviews from "./Components/Reviews/Reviews";

const MainPage = () => {
  return (
    <div>
      <Relocation />
      <WhatWeCan />
      <BusinessInNetherlands />
      <img src={bgcity} />
      <Results />
      <Products />
      <ForClients />
      <YoutubeChannel />
      <WhyNetherlands />
      <Reviews />
    </div>
  );
};

export default MainPage;
