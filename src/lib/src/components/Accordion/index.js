import React, { useState, useRef, useEffect, Children, useLayoutEffect, useCallback } from "react";

const Accordion = (props) => {
  const panelRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState(10);
 
  useLayoutEffect(() => {
    panelRef.current?.childNodes.forEach((node) =>
      // console.log({ height: node?.clientHeight, width: node?.clientWidth }),
      setPanelHeight(node?.clientHeight+20),
    );
  }, []);

  const updateWidth = useCallback(() => {
    setTimeout(()=> {
      panelRef.current?.childNodes.forEach((node) => {
        setPanelHeight(node?.clientHeight+20);
      });
    }, 800);
  }, [panelRef]);

  useEffect(() => {
    updateWidth();
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


  let _panel, _header;

  Children.forEach(props.children, child => {
    if (child.type === AccordionHeader) {
      return _header = child;
    }
    if (child.type === AccordionPanel) {
      return _panel = child;
    }
  });

  if (!_header) _header = <div className="app-accordion-title"><span>{props.headerTitle}</span>
                            {isActive
                              ? <i className="icons10-angle-up"></i>
                              : <i className="icons10-angle-down"></i>}
                          </div>
  if (!_panel) _panel = <></>

  return (
    <div
      className="app-accordion"
      style={props.style}>
      <div
        className="app-accordion-header"
        onClick={toggleHeader}>
        {_header}
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
const AccordionPanel = ({ children }) => <>{children}</>

Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

export default Accordion;