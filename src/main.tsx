import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Join from './Join';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <App/>              
  </BrowserRouter>
)