// import { TodoApp } from './08-useReducer/TodoApp'
// import './08-useReducer/intro-reducer'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLauoutEffect/LayOut'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp.jsx'

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { getRoutes } from './Routes';


const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
)
