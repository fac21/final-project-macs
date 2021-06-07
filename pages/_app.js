import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { useState } from "react"

//To avoid checking the session twice on pages that support both server and client-side rendering.
function App({ Component, pageProps, }) {
  const [formData, setFormData] = useState({});
const updateFormData = (newData) => {
  setFormData({ ...formData, ...newData });
};
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} updateFormData={updateFormData} />
    </Provider>
  );
}

export default App;
