import React from "react";

const AvatarView = (props) => {

  const renderDropShadow = () => {
    return <img
      className="app-avatar drop-shadow"
      src={props.src}
      alt="shadow"
      style={{
        width: props.width,
        height: props.height,
        objectFit: props.objectFit,
      }}
    />
  }

  const renderPlaceholder = () => {
    var str = props.alt;
    var matches = str.match(/\b(\w)/g);
    var acronym = matches.join('');
    acronym =  acronym.substring(0,3);

    return <svg viewBox="0 0 32 32"><text x="50%" y="21" textAnchor="middle">{acronym}</text></svg>;
  }

  const renderBadge = () => {
    if(props.showBadge > 0 || props.showBadge !== "") {
      return <span
              className={props.badgePosition === "bottom"
                ? "app-avatar-badge pos-bottom"
                : "app-avatar-badge"}>
                {props.showBadge}
              </span>;
    }
    return <></>;
  }

  return (
    <div className="app-avatar-container" title={props.tooltip}>
      { renderPlaceholder() }
      <img
        className="app-avatar"
        src={props.src}
        alt={props.alt}
        style={{
          width: props.width,
          height: props.height,
          objectFit: props.objectFit,
        }}
        onLoad={props.onLoad}
        onError={props.onError}
      />
      { props.showBadge && renderBadge() }
      { props.showDropShadow && (renderDropShadow()) }
    </div>
  )
}

AvatarView.defaultProps = {
  width: 72,
  height: 72,
  alt: "User",
  isLoading: false,
  objectFit: "cover",
  onLoad: () => {},
  onError: () => {}
}

export default AvatarView;