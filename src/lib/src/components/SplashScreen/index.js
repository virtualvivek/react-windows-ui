import React,{ useState,useEffect } from "react";

const SplashScreen = (props) => {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {

    setTimeout(()=>{
      props.isVisible ? setOpen(true) : setOpen(false);
    }, props.duration);
  }, [props.isVisible,props.duration])
  
  return (
    <div
      style={
        isOpen ?
          {display:"flex", backgroundColor: props.backgroundColor}
        : {display:"none"}
      }
      className="app-splash-screen app-flex-center">
      <h1 className="color-white">{props.title}</h1>
      {props.subtitle && (<h3 className="color-white">{props.subtitle}</h3>)}
    </div>
  )
}

SplashScreen.defaultProps = {
  isVisible: false,
  title: "",
  subtitle: "",
  duration: 1000
}

export default SplashScreen;