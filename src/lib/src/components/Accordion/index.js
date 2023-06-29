import React, { useState, useRef, useEffect, Children, useLayoutEffect, useCallback } from "react";

const Accordion = (props) => {
  const panelRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [panelHeight, setPanelHeight] = useState(10);

  const _header = Children.map(props.children, child => child.type.displayName === "Header" ? child : null);
  const _body = Children.map(props.children, child => child.type.displayName === "Body" ? child : null);

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
    if(isExpanded) {
      setIsExpanded(false); props.onCollapse();
    } else {
      setIsExpanded(true); props.onExpand();
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
        style={props.headerStyle}
        className="app-accordion-header"
        aria-expanded={isExpanded}
        onClick={toggleHeader}>
        {
          _header.length === 0
        ? <div className="app-accordion-title">
            <span>{props.headerTitle}</span>
          </div>
        : _header
        }
      </div>
      <div className={isExpanded ? "app-accordion-body show"
                               : "app-accordion-body"}
          ref={panelRef}
          style={{height: isExpanded ? panelHeight : 0}}>
        {_body}
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


const AccordionBody = ({ children }) => <>{children}</>
AccordionBody.displayName = "Body";
Accordion.Body = AccordionBody;

export default Accordion;