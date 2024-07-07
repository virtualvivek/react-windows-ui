const SplashScreenImportCode =
`import { SplashScreen } from "react-windows-ui";`;

const SplashScreenUsageCode =
`/* Usually at ./src/App.js */

<SplashScreen
  isVisible={true}
  title={"react-windows-ui"}
  // duration={1200} /* Add additional delay before page loads */
/>`;

const SplashScreenPublicCode =
`<html lang="en">
  ...
  <div id="root">
    <div style="background-color: #0078D7; height: 100vh; align-items: center; display: flex;">
      <h1 style="margin: 0 auto;color:white">
        react-windows-ui
      </h1>
    </div>
  </div>
  ...
</html>`;

const SplashScreenLogoUsageCode =
`<SplashScreen
  isVisible={true}
  logo={<img src={Img2} width={100} height={100} alt="SplashScreen"/>}
/>`;

const SplashScreenTitleSubtitleUsageCode =
`<SplashScreen
  isVisible={true}
  title={"react-windows-ui"}
  subtitle={"subtitle text"}
/>`;

const SplashScreenLogoTitleUsageCode =
`<SplashScreen
  isVisible={true}
  title={"react-windows-ui"}
  logo={<img src={Img2} width={100} height={100} alt="SplashScreen"/>}
/>`;



export { 
  SplashScreenImportCode,
  SplashScreenUsageCode,
  SplashScreenLogoUsageCode,
  SplashScreenTitleSubtitleUsageCode,
  SplashScreenLogoTitleUsageCode,
  SplashScreenPublicCode
}