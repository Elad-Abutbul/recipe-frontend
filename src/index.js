import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SnackbarProvider } from 'notistack'
import './index.css';
import {  QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <App />
        <ReactQueryDevtools initialIsOpen/>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.Fragment>
);

