import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import {QueryClient,QueryClientProvider  } from 'react-query'
import TenancyAPP from './TenancyAPP';
export const store = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={store} >
 <React.StrictMode>
    {/* <App /> */}
    <TenancyAPP />
  </React.StrictMode>
  </QueryClientProvider>,
 
  document.getElementById('root')
);

