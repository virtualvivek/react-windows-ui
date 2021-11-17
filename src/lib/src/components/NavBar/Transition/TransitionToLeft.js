import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TransitionToLeft() {
  const { pathname } = useLocation();

  useEffect(() => {
    var element = document.getElementById("app-section-container-id");
    if(element) {
      element.classList.add("transition-left");
    }

  }, [pathname]);

  return null;
}