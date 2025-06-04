
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/house-of-royalty/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 25020, hash: '408475edb42c753a5969cb107b5326fcd2ae4b7715951504ad8565ef54668392', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 18566, hash: '52005ed9952cb15e0d0c3cd4ccc1374e7faa119f2403a571e0c38024bdaa45ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IXNJZP7C.css': {size: 7007, hash: 'zw5Ogdww1Mw', text: () => import('./assets-chunks/styles-IXNJZP7C_css.mjs').then(m => m.default)}
  },
};
