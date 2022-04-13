import "antd/dist/antd.css";
// import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDalKELtn6memgoWXBgrTOoElPcsTGhhNE",
  authDomain: "attosisss.firebaseapp.com",
  projectId: "attosisss",
  storageBucket: "attosisss.appspot.com",
  messagingSenderId: "210277000002",
  appId: "1:210277000002:web:e98db2e42bb6aff539dedb",
  measurementId: "G-SYPGEQDYXP",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
