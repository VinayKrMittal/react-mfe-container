import React from "react";
import MicroFrontend from "./../MicroFrontend";
import getHost from './../utils/utility';
const catsHost = getHost('cats');

const Cats = ({ history }) =>{
    return <MicroFrontend history={history} host={catsHost} name="Cats" />;
  }

  export default Cats;