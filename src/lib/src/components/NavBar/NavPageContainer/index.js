import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavPageContainer = (props) => {

  const { pathname } = useLocation();

  useEffect(() => {
    var element = document.getElementById("app-section-container-id");
    if(element && props.animateTransition) {
      element.classList.add("transition-left");
    }
  }, [pathname, props.animateTransition]);

  const setTransition = () => {
    return props.animateTransition ? " transition" : "";
  }

  return (
    <div
      className={ props.hasPadding
                ? `app-section-container has-padding${setTransition()}`
                : `app-section-container${setTransition()}`
                }
      id="app-section-container-id">
      {props.children}
    </div>
  )
}

export default NavPageContainer;