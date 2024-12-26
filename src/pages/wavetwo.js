import React from 'react'
import "../App.css";
import {motion} from 'framer-motion';

const wave1={
    hidden:{
        backgroundpositionX:"0px",
        opacity:0.6,
    },
    visible:{
        backgroundpositionX:"1000px",
        zIndex:1000,
        opacity:0.6,
        transition:{
            loop:Infinity,
            ease:"linear",
            duration:25,
        },
    },
};

const wave2={
    hidden:{
        backgroundpositionX:"0px",
        opacity:0.5,
    },
    visible:{
        backgroundpositionX:"-1000px",
        zIndex:999,
        opacity:0.5,
        transition:{
            loop:Infinity,
            ease:"linear",
            duration:15,
        }
    }
};

const wave3={
    hidden:{
        backgroundpositionX:"0px",
        opacity:0.3,
    },
    visible:{
        backgroundpositionX:"-1000px",
    }
}
const wavetwo = () => {
  return (
    <div>
      
    </div>
  )
}

export default wavetwo
