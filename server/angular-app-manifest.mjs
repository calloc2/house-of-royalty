
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://calloc2.github.io/house-of-royalty/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 25045, hash: 'b17957b0f224e826d983a2ce1cd8e5b5199923feee48436d067e8753aa419550', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18591, hash: '256f342c190c7591d3696f577dc6fe473c9105100fb5aa7e2a630958a9b3fce8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IXNJZP7C.css': {size: 7007, hash: 'zw5Ogdww1Mw', text: () => import('./assets-chunks/styles-IXNJZP7C_css.mjs').then(m => m.default)}
  },
};
