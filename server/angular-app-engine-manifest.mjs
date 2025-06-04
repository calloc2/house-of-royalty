
export default {
  basePath: 'https://calloc2.github.io/house-of-royalty',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
