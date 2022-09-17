const Page1Code =
`import React from 'react'
import { NavPageContainer, NavPageContainerInner } from 'react-windows-ui'

const Page1 = () => {
  return (
    <NavPageContainer
      hasPadding={false}
      animateTransition={true}>

      {/* NavPageContainerInner only needs to apply
      if you want to render some component on the page with hasPadding={false}
      render it to the parent NavPageContainer and the childs with default-padding
      on the NavPageContainerInner */}

      <NavPageContainerInner>
        <h1>Page1</h1>
      </NavPageContainerInner>

    </NavPageContainer>
  );
}
export default Page1
`;

export {
  Page1Code
}