import React, { useState, useEffect } from "react";

const SplashScreen = (props) => {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      props.isVisible ? setOpen(true) : setOpen(false);
    }, props.duration);
  }, [props.isVisible, props.duration]);
  
  return (
    <div
      style={ isOpen
        ? { display: "flex", backgroundColor: props.backgroundColor }
        : { display: "none" }
      }
      className="app-splash-screen app-flex-center">
      {props.logo && (<>{props.logo}</>)}
      {props.title && (<h1 className="color-white">{props.title}</h1>)}
      {props.subtitle && (<h3 className="color-white">{props.subtitle}</h3>)}
    </div>
  )
}

SplashScreen.defaultProps = {
  title: "",
  subtitle: "",
  duration: 0,
  isVisible: false,
}

export default SplashScreen;