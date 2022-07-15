import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavPageContainer = (props) => {

  const { pathname } = useLocation();

  useEffect(() => {
    var element = document.getElementById("app-section-container-id");
    if(element && props.animateTransition) {
      element.classList.add("transition-left");
    }
    if(props.scrollTopOnMount) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant"});
    }
  }, [pathname, props.animateTransition, props.scrollTopOnMount]);

  const setTransition = () => {
    return props.animateTransition ? " transition" : "";
  }

  return (
    <div
      className={ props.hasPadding
                ? `app-section-container has-padding${setTransition()}`
                : `app-section-container${setTransition()}`
                }
      style={{
        backgroundColor: props.backgroundColor,
        ...props.style
      }}
      id="app-section-container-id">
      {props.children}
    </div>
  )
}

export default NavPageContainer;