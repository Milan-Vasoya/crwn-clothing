import React from "react";
import DirectoryMenu from "../../directory-Menu/directory.component";
import {HomePageContainer} from "./hompage.styles";

const HomePage = () => (
  <HomePageContainer>
    <h1>Welcome To Crown-Clothing</h1>
    <DirectoryMenu />
  </HomePageContainer>
);

export default HomePage;
