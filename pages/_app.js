import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { useState } from "react";
import { FormGroup } from "@material-ui/core";

if (typeof window === 'object') {
  // Only load CSS doodle in browser environment
     require('css-doodle')
  
}
//To avoid checking the session twice on pages that support both server and client-side rendering.
function App({ Component, pageProps }) {
  const [formData, setFormData] = useState({
    connections: new Set([]),
    languages: new Set([]),
    gender: "woman",
  });
  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };


  return (
    <Provider session={pageProps.session}>
      <Component
        {...pageProps}
        formData={formData}
        updateFormData={updateFormData}
      />
    </Provider>
  );
}



export default App;
