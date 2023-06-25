const getScreenOffset = (ref) => {
  let windowHeight = window.innerHeight;
  let componentOffset = ref.current.getBoundingClientRect().top;
  return componentOffset > windowHeight/2 ? true : false;
}

export default getScreenOffset;