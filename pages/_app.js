import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { useState, useEffect } from "react";
import { FormGroup } from "@material-ui/core";
import axios from 'axios';

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

  useEffect(() => {
    // Get the XSRF-TOKEN from cookies
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      console.log(value)
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // set the 'csrf-token' as header on Axios POST requests only (please see csurf docs to see which other headers they accept)
    // you could also add PUT or PATCH if you wish
    axios.defaults.headers.post['csrf-token'] = getCookie('XSRF-TOKEN');

    // The rest of your UseEffect code (if any).....
  }, []);


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
