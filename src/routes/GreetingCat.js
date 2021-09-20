import React from "react";
import Header from './Header';

import Cats  from "./Cats";

const GreetingCat= ({ history }) =>{
    return (
      <div>
        <Header />
        <div className="home">
          <Cats history={history}/>
        </div>
      </div>
    );
  }


  export default GreetingCat;