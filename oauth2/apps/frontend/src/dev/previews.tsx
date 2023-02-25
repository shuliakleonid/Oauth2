import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {HomePage} from "../page/HomePage";
import {LayoutDefault} from "../../components/LayoutDefault/LayoutDefault";
import {SingInPage} from "../page/SingInPage";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/HomePage">
        <HomePage/>
      </ComponentPreview>
      <ComponentPreview path="/LayoutDefault">
        <LayoutDefault/>
      </ComponentPreview>
      <ComponentPreview path="/SingInPage">
        <SingInPage/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;