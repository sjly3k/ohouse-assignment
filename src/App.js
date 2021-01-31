import React from "react"
import ItemListPage from "./components/ItemListPage/ItemListPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    return (
        <React.Fragment>
            <ToastContainer />
            <ItemListPage/>
        </React.Fragment>
    );
}

export default App;
