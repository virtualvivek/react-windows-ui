import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TransitionToLeft() {
  const { pathname } = useLocation();

  useEffect(() => {

    var element = document.getElementById("app-section-container-id");
    element.classList.add("transition-left");
    // setTimeout(() => {   
    // },40);

  }, [pathname]);

  return null;
}