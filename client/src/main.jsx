import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root')).render(

  <PersistGate persistor={persistor}>
     <ToastContainer position='top-center' theme='dark' />
     <Provider store={store}>
    <App></App>
    </Provider>
    </PersistGate>

)
