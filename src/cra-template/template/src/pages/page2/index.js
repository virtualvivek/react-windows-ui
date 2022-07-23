import React from "react";
import { NavPageContainer, NavPageContainerInner, NavPageContainerRight, Link } from "react-windows-ui";

const Page2 = () => {
  return (
    <NavPageContainer
      hasPadding={false}
      animateTransition={true}>

      <NavPageContainerInner>
        <h1>Page2</h1>
        <p>Page with split containers : center + right</p>
        <Link>Components here</Link>
      </NavPageContainerInner>


      <NavPageContainerRight>
        <h4 className="m-0">Right Section Container</h4>
        <p>Your Right container contents</p>
        <Link>Components here</Link>
        <br/>
        <Link>More Components here</Link>
      </NavPageContainerRight>

    </NavPageContainer>
  );
}

export default Page2;