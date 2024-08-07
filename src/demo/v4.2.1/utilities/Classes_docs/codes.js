const TextHeadingCode =
`<h1>Heading1</h1>
<h2>Heading2</h2>
....
<h3>Heading5</h3>`;

const TextHeadingNoMgBottomCode =
`<h2 className="app-mb-0">Heading Text</h2>`;

const TextVarientsCode =
`<p>This is paragraph used to display long text.</p>
<p className="color-success">This is success paragraph used to display success text.</p>
<p className="color-danger">This is danger paragraph used to display danger text.</p>
`;

const TextVarientLightCode =
`<p className="app-para-light">This is light paragraph used to display long text.</p>`;

const ForegroundContainerCode =
`<div className="app-section-container-fg">
  <>Content</>
</div>
`;

const ForegroundContainerFullCode =
`<NavPageContainer
  hasPadding
  animateTransition={true}
  backgroundColor={"var(--color-navbar-bg-default)"}>
  <h1>Foreground Usage</h1>

  <div className="app-section-container-fg">
    <Button/>
    <p>You content here.<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

</NavPageContainer>
`;


export {
  TextHeadingCode,
  TextHeadingNoMgBottomCode,
  TextVarientsCode,
  TextVarientLightCode,
  ForegroundContainerCode,
  ForegroundContainerFullCode
}