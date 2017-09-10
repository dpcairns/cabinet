import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderStatic } from 'glamor/server';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import configureStore from './configureStore';
import { App } from '../src/routes';

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req, res);
  if (!store) return; // no store means redirect was already served

  const app = createApp(App, store);
  const { html, css } = renderStatic(() => ReactDOMServer.renderToString(app));
  const stateJson = JSON.stringify(store.getState());
  const chunkNames = flushChunkNames();
  const { Js } = flushChunks(clientStats, { chunkNames });

  await res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>redux-first-router-boilerplate</title>
          <style>${css}</style>
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">${html}</div>
          <script type='text/javascript' src='/static/vendor.js'></script>
          <script>${Js}</script>
        </body>
      </html>`,
  );
};

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
);
