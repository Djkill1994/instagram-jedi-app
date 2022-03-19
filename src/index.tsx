import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store";
import App from "./common/component/App/App";

const prepare = async (): Promise<void> => {
    const {worker} = await import("./mocks/browser");
    await worker.start({onUnhandledRequest: "bypass"});
};

prepare().then(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
});
