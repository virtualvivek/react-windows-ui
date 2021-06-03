const Page1Code =
`import React from 'react'
import { NavPageContainer, NavPageContainerInner, NavPageContainerRight } from 'react-windows-ui'

const Page1 = () => {
    return (
        <NavPageContainer
            hasPadding={false}
            animateTransition={true}>

            <NavPageContainerInner>
                <h1>Page1</h1>
            </NavPageContainerInner>

            <NavPageContainerRight>
                <h4 className="m-0">Right Section Container</h4>
            </NavPageContainerRight>

        </NavPageContainer>
        );
    }
export default Page1
`;

export {
    Page1Code
}