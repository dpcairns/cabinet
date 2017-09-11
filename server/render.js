import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { renderStatic } from 'glamor/server';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import configureStore from './configureStore';
import { App } from '../src/routes';
import { makeGlobalStyles, makeFlexboxGrid } from '../src/style';
import favicon from './favicon.ico';

makeGlobalStyles();
makeFlexboxGrid();

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req, res);
  if (!store) return; // no store means redirect was already served

  const app = createApp(App, store);
  const { html, css } = renderStatic(() =>
    ReactDOMServer.renderToStaticMarkup(app),
  );
  const stateJson = JSON.stringify(store.getState());
  const chunkNames = flushChunkNames();
  const { js } = flushChunks(clientStats, { chunkNames });

  await res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <link rel="icon" href="${favicon}" type="image/x-icon"/>
          <title>redux-first-router-boilerplate</title>
          <style>${css}</style>
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">${html}</div>
          <script type='text/javascript' src='/static/vendor.js'></script>
          ${js}
        </body>
      </html>`,
  );
};

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
);
