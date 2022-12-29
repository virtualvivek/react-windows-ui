import React, { useState, useRef, useEffect, Children, useLayoutEffect, useCallback } from "react";

const Accordion = (props) => {
  const panelRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState(10);

  const _header = Children.map(props.children, child => child.type.displayName === "Header" ? child : null);
  const _panel = Children.map(props.children, child => child.type.displayName === "Panel" ? child : null);

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
      setIsActive(false); props.onCollapse();
    }
    else {
      setIsActive(true); props.onExpand();
    }
  }

  useLayoutEffect(() => {
    panelRef.current?.childNodes.forEach((node) =>
      setPanelHeight(node?.clientHeight+20),
    );
  }, []);

  return (
    <div
      className="app-accordion"
      style={props.style}>
      <div
        className="app-accordion-header"
        onClick={toggleHeader}>
        {
          _header.length === 0
        ? <div className="app-accordion-title"><span>{props.headerTitle}</span>
                              {isActive
                                ? <i className="icons10-angle-up"></i>
                                : <i className="icons10-angle-down"></i>}
                              </div>
        : _header
        }
      </div>
      <div className={isActive ? "app-accordion-panel show"
                               : "app-accordion-panel"}
          ref={panelRef}
          style={isActive ? {height: panelHeight} : {height: 0}}>
        {_panel}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  onCollapse: () => {},
  onExpand: () => {},
}

const AccordionHeader = ({ children }) => <>{children}</>
AccordionHeader.displayName = "Header";
Accordion.Header = AccordionHeader;


const AccordionPanel = ({ children }) => <>{children}</>
AccordionPanel.displayName = "Panel";
Accordion.Panel = AccordionPanel;

export default Accordion;