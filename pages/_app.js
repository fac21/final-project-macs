import "../styles/globals.css";
import { Provider } from "next-auth/client";

//To avoid checking the session twice on pages that support both server and client-side rendering.
function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
