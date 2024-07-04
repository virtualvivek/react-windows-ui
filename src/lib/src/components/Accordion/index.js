import React, { useState, useRef, useEffect, Children, useLayoutEffect, useCallback } from "react";

const Accordion = (props) => {
  const {
    style,
    children,
    headerStyle,
    headerTitle
  } = props;
  
  const panelRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [panelHeight, setPanelHeight] = useState(10);

  const _header = Children.map(children, child => child.type.displayName === "Trigger" ? child : null);
  const _body = Children.map(children, child => child.type.displayName === "Body" ? child : null);

  const updateWidth = useCallback(() => {
    setTimeout(() => {
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
      setPanelHeight(node?.clientHeight+20)
    );
  }, []);

  return (
    <div
      className="ui-accordion"
      style={style}>
      <div
        style={headerStyle}
        className="ui-accordion-header"
        aria-expanded={isExpanded}
        onClick={toggleHeader}>
        {
          _header.length === 0
        ? <div className="ui-accordion-title">
            <span>{headerTitle}</span>
          </div>
        : _header
        }
      </div>
      <div className={isExpanded ? "ui-accordion-body show"
                                 : "ui-accordion-body"}
          ref={panelRef}
          style={{height: isExpanded ? panelHeight : 0}}>
        {_body}
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  onExpand: () => {},
  onCollapse: () => {},
}

const AccordionTrigger = ({ children }) => <>{children}</>
AccordionTrigger.displayName = "Trigger";
Accordion.Trigger = AccordionTrigger;


const AccordionBody = ({ children }) => <>{children}</>
AccordionBody.displayName = "Body";
Accordion.Body = AccordionBody;

export default Accordion;