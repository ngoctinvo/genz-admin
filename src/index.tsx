import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";

import store from "./configStore";
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <SkeletonTheme>
      <MantineProvider
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
