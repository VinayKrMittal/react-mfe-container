import React, { useState } from "react";
import Cats from './Cats';
import Header  from "./Header";

const Home = ({ history })  =>{
    const [input, setInput] = useState("");
  
    const handleOnClick = () => {
      history.push(`/cat/${input}`);
    };
  
    return (
      <div>
        <Header />
        <div className="home">
          <input
            placeholder="Insert a greeting"
            defaultValue={input}
            onBlur={(e) => setInput(e.target.value)}
          />
          <button onClick={handleOnClick}>Greet Me</button>
        </div>
  
        <div className="home">
          <div className="content">
            <div className="cat">
              <Cats />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Home;