function getScrollbarWidth() {
  if (navigator.maxTouchPoints > 0) {
    // Touch device detected, scrollbar width is effectively 0
    return 0;
  }
  // Create a temporary div container
  const div = document.createElement("div");
  // Apply styles to the div to make it scrollable
  div.style.position = "absolute";
  div.style.top = "-9999px";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden"; // Hide the div to avoid affecting the layout
  // Append the div to the body
  document.body.appendChild(div);
  // Calculate the scrollbar width
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  // Remove the div from the body
  document.body.removeChild(div);
  
  return scrollbarWidth;
}

function hasVerticalScrollbar(element) {
  return element.scrollHeight > element.clientHeight;
}

function setHeaderMobilePadding(paddingRight) {
  let headerMobile = document.getElementsByClassName("ui-navbar-header-mobile")[0];
  if(headerMobile) {
    headerMobile.style.paddingRight = `${paddingRight}px`;
  }
}

const disableScroll = () => {
  const container = document.body;
  if (hasVerticalScrollbar(container)) {
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    setHeaderMobilePadding(scrollbarWidth);
  }
  document.body.classList.add("modal-open");
}

const enableScroll = () => {
  document.body.style.paddingRight = '';
  setHeaderMobilePadding(0);
  document.body.classList.remove("modal-open");
}

const ScrollView = {
  disableScroll,
  enableScroll,
}

export default ScrollView;