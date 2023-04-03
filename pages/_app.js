import "../styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Router from 'next/router'
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import {getCurrentAdmin,getAllAdmins} from "../redux/reducers/adminReducer"

const cookies = new Cookies();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Application Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default MyApp;

const Application = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const token = cookies.get("token");

  useEffect(() => {
    if (token) {
      const data = jwt_decode(token);
      dispatch(getCurrentAdmin(data?.admin?.id));
      dispatch(getAllAdmins())
    } else {
      Router.push('/login')
    }
    
  }, []);
  return <Component {...pageProps} />;
};
