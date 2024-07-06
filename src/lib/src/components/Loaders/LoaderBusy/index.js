import React from "react";
import LoaderBusyWrapper from "../../_common/LoaderBusyWrapper";

const LoaderBusy = ({
  size,
  setTheme,
  isLoading = true,
  ...otherProps
}) => {

  const toggleLoading = () => (isLoading ? " animate" : "");

  const setSize = () => {
    if (size === "large") return " loader-lg";
    if (size === "small") return " loader-sm";
    return "";
  };

  const renderLoader = () => (
    <div
      className={
        `ui-loader-busy ${setTheme === "light" ? "light" : ""}${setSize()}${toggleLoading()}`
      }
      {...otherProps}>
      <LoaderBusyWrapper />
    </div>
  );

  return <>{renderLoader()}</>;
};

export default LoaderBusy;