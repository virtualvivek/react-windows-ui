import React, { useState, useRef, useEffect, Children, useLayoutEffect, useCallback } from "react";

const Accordion = (props) => {
  const panelRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState(10);
  const [isHeader, setHeader] = useState(null);
  const [isPanel, setPanel] = useState(null);

  const updateWidth = useCallback(() => {
    setTimeout(()=> {
      panelRef.current?.childNodes.forEach((node) => {
        setPanelHeight(node?.clientHeight+20);
      });
    }, 800);
  }, [panelRef]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    }
  }, [updateWidth]);

  const toggleHeader = () => {
    if(isActive) {
      setIsActive(false);
      props.onCollapse();
    }
    else {
      setIsActive(true);
      props.onExpand();
    }
  }

  useEffect(() => {
    Children.forEach(props.children, child => {
      if (child.type.name === "AccordionHeader") {
        setHeader(child);
      }
      if (child.type.name === "AccordionPanel") {
        setPanel(child);
      }
    });
  }, [props.children]);

  useLayoutEffect(() => {
    panelRef.current?.childNodes.forEach((node) =>
      setPanelHeight(node?.clientHeight+20),
    );
  }, [isPanel]);

  return (
    <div
      className="app-accordion"
      style={props.style}>
      <div
        className="app-accordion-header"
        onClick={toggleHeader}>
        {isHeader === null ? <div className="app-accordion-title"><span>{props.headerTitle}</span>
                              {isActive
                                ? <i className="icons10-angle-up"></i>
                                : <i className="icons10-angle-down"></i>}
                              </div>
                              :
                              isHeader}
      </div>
      <div className={isActive ? "app-accordion-panel show"
                               : "app-accordion-panel"}
          ref={panelRef}
          style={isActive ? {height: panelHeight} : {height: 0}}>
        {isPanel}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  onCollapse: () => {},
  onExpand: () => {},
}

const AccordionHeader = ({ children }) => <>{children}</>
const AccordionPanel = ({ children }) => <>{children}</>

Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

export default Accordion;