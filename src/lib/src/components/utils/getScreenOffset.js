const getScreenOffset = (ref) => {
  
  let windowHeight = window.innerHeight;
  let componentOffset = ref.current.getBoundingClientRect().top;

  // return true
  if(componentOffset > windowHeight/2){
    return true;
  }
  else{
    return false;
  }
}

export default getScreenOffset;