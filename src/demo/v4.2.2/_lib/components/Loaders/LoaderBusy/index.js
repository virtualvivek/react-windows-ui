import React, { useMemo } from "react";
import LoaderBusyWrapper from "../../_common/LoaderBusyWrapper";
import { ScrollView } from "../../../api";

const LoaderBusy = (props) => {

  const toggleLoading = () => {
    return props.isLoading ? " animate" : "";
  }

  const setSize = () => {
    if(props.size === "large") return " loader-lg";
    else if (props.size === "small") return " loader-sm";
    else return "";
  }

  const isOverlay = () => {
    return props.display === "overlay" ? " loader-lg" : "";
  }

  const renderLoader = () => {
    return <div className={ props.setTheme === "light"
              ? `app-loader-busy${isOverlay()} light${setSize()}${toggleLoading()}`
              : `app-loader-busy${isOverlay()}${setSize()}${toggleLoading()}`}>
            <LoaderBusyWrapper/>
           </div>
  }

  useMemo(() => {
    if(props.display === "overlay") {
      props.isLoading ? ScrollView.disableScroll() : ScrollView.enableScroll();
    }
  }, [props.isLoading, props.display]);

  const renderLoaderFullScreen = () => {
  return <>
    <div
      className={props.isLoading ? "app-dim-overlay show" : "app-dim-overlay"}
      style={{
        backgroundColor: props.backgroundColor
      }}>
    </div>
    <div
      onClick={ props.onBackdropPress }
      className={ props.isLoading ? "app-loader-busy-overlay show" : "app-loader-busy-overlay"}>
      {renderLoader()}
      <span className={ props.setTheme === "light" ? "title text-light" : "title"}>
        {props.title}
      </span>
    </div>
    </>
  }


  return (
    <>
    { props.display === "overlay" ? renderLoaderFullScreen() : renderLoader() }
    </>
  )
}

LoaderBusy.defaultProps = {
  isLoading: true,
  backgroundColor: "var(--color-ui-hover-default)",
}

export default LoaderBusy;