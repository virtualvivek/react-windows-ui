import React, { useRef, useEffect } from "react";

const AvatarView = (props) => {

  const imgRef = useRef(null);
  useEffect(() => { imgRef.current.style.opacity = 0; }, []);

  const renderDropShadow = () => {
    return <img
      className="ui-avatar drop-shadow"
      src={props.src}
      alt="shadow"
      style={{
        width: props.size,
        height: props.size,
        objectFit: props.objectFit,
      }}
    />
  }

  const renderPlaceholder = () => {
    var str = props.alt;
    var matches = str.match(/\b(\w)/g);
    var acronym = matches.join('');
    acronym =  acronym.substring(0,3);

    return <svg viewBox="0 0 36 36"><text x="50%" y="24" textAnchor="middle">{acronym}</text></svg>;
  }

  const onError_ = () => {
    props.onError();
    imgRef.current.style.opacity = 0;
  }

  const onLoad_ = () => {
    props.onLoad();
    imgRef.current.style.opacity = 1;
  }

  const renderBadge = () => {
    if(props.showBadge > 0 || props.showBadge !== "") {
      return <span
              title={props.badgeTooltip}
              style={{backgroundColor: props.badgeBackgroundColor, ...props.badgeStyle}}
              className={props.badgePosition === "bottom"
                ? "ui-avatar-badge pos-bottom"
                : "ui-avatar-badge"}>
                {props.showBadge}
              </span>;
    }
    return <></>;
  }

  return (
    <div className="ui-avatar-container" title={props.tooltip}>
      { renderPlaceholder() }
      <img ref={imgRef}
        className="ui-avatar"
        src={props.src}
        alt={props.alt}
        style={{
          width: props.size,
          height: props.size,
          objectFit: props.objectFit,
        }}
        onLoad={onLoad_}
        onError={onError_}
      />
      { props.showBadge && renderBadge() }
      { props.showDropShadow && (renderDropShadow()) }
    </div>
  )
}

AvatarView.defaultProps = {
  alt: "User",
  onLoad: () => {},
  onError: () => {},
  isLoading: false,
  objectFit: "cover"
}

export default AvatarView;