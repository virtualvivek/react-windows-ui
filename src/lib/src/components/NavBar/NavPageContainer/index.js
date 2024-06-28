import React, { useEffect } from "react";

const NavPageContainer = (props) => {

  useEffect(() => {
    var element = document.getElementById("ui-page-container");
    if(element && props.animateTransition) {
      element.classList.add("transition-left");
    }
    if(props.scrollTopOnMount) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant"});
    }
  }, [props.animateTransition, props.scrollTopOnMount]);

  const setTransition = () => {
    return props.animateTransition ? " transition" : "";
  }

  return (
    <main
      role="main"
      id="ui-page-container"
      className={ props.hasPadding
                  ? `ui-page-container has-padding${setTransition()}`
                  : `ui-page-container${setTransition()}`
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