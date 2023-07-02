import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavPageContainer = (props) => {

  const { pathname } = useLocation();

  useEffect(() => {
    var element = document.getElementById("app-page-container-id");
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
    <main
      role="main"
      id="app-page-container-id"
      className={ props.hasPadding
                  ? `app-page-container has-padding${setTransition()}`
                  : `app-page-container${setTransition()}`
                }
      style={{
        backgroundColor: props.backgroundColor,
        ...props.style
      }}>
      {props.children}
    </main>
  )
}

export default NavPageContainer;