import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./index.css";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";

import store from "./configStore";
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const myTheme: MantineThemeOverride = {
  primaryColor: "pink",
  defaultRadius: 0,
  colors: {
    // override dark colors to change them for all components
    dark: [
      "#d5d7e0",
      "#acaebf",
      "#8c8fa3",
      "#666980",
      "#4d4f66",
      "#34354a",
      "#2b2c3d",
      "#000",
      "#0000",
      "#000",
    ],
  },
};

root.render(
  <Provider store={store}>
    <SkeletonTheme>
      <MantineProvider
        theme={myTheme}
        withGlobalStyles
        withNormalizeCSS
        emotionOptions={{ key: "mantine", prepend: false }}
      >
        <App />
      </MantineProvider>
    </SkeletonTheme>
  </Provider>
);

reportWebVitals();
