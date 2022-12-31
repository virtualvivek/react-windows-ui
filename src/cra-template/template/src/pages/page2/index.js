import React from "react";
import { NavPageContainer, Link } from "react-windows-ui";

const Page2 = () => {
  return (
    <NavPageContainer
      hasPadding={false}
      animateTransition={true}>

      <NavPageContainer.Inner>
        <h1>Page2</h1>
        <p>Page with split containers : center + right</p>
        <Link>Components here</Link>
      </NavPageContainer.Inner>

    </NavPageContainer>
  );
}

export default Page2;