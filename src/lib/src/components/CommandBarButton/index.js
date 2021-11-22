import React, { useMemo ,useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useOutSideClick from '../utils/hooks/useOutSideClick'
import getScreenOffset from '../utils/getScreenOffset'

const CommandBarButton = (props) => {

  const [menubar, setMenubar] = useState(false);
  const [isReverse, setReverse] = useState('');

  // # Click Outside Register Code
  const wrapperRef = useRef(null);
  useOutSideClick(wrapperRef, () => setMenubar(false));
  //--------------------------------------------------------------------

  const toggleMenuBar = () => {
    setMenubar(!menubar);
    getScreenOffset(wrapperRef) ? setReverse('reverse') :  setReverse('');
  }

  const renderMenuItems = (data) => {
    return <>
    {data.map(item => (
      <li
        onClick={toggleMenuBar}
        className="option"
        key={item.label}>
        <Link
          to={item.link ? item.link : "#"}
          onClick={item.onClick}>
          {item.icon}{item.label}
        </Link>
      </li>
    ))}
    </>
  }

  const renderValueButton = () => {
    return <button
      className="commandbar-button"
      onClick={props.onClick}
      disabled={props.valueDisabled}>
      {props.icon}{props.value}
    </button>
  }


  const memoizedRender = useMemo(() => {

    return props.data.length !== 0 && !props.onClick ? <div
      className="app-commandbar-btn"
      ref={wrapperRef}>
        <button
          onClick={toggleMenuBar}
          className="commandbar-button"
          disabled={props.dataDisabled}>
          {props.icon}{props.value}&nbsp;&nbsp;
          <i className="icons10-angle-down custom"></i>
        </button>
        <ul className={ menubar ? `show ${isReverse}` : ''}>
          {renderMenuItems(props.data)}
        </ul>
      </div>
    :
    props.onClick && props.data.length === 0 ? <div
      className="app-commandbar-btn">
      {renderValueButton()}
    </div>
    :
    props.data.length !== 0 && props.onClick ? <div
    className="app-commandbar-btn"
    ref={wrapperRef}>
      <div className="app-inline-flex">
        {renderValueButton()}
        <hr/>
        <button
          className="commandbar-button"
          onClick={toggleMenuBar}
          disabled={props.dataDisabled}>
          <i className="icons10-angle-down custom"></i>
        </button>
      </div>
      <ul className={ menubar ? `show ${isReverse} right` : 'right'}>
        {renderMenuItems(props.data)}
      </ul>
    </div>
    :
    <></>
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props,menubar]);

  return (
    <>
    {memoizedRender}
    </>
  )
}

CommandBarButton.defaultProps = {
  data:[],
  dataDisabled: false,
  value: "Value",
  valueDisabled: false,
}

export default CommandBarButton