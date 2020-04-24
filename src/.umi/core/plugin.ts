import { Plugin } from '/Users/yuzijun/Desktop/Github/React-Blog/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','request',],
});
plugin.register({
  apply: require('/Users/yuzijun/Desktop/Github/React-Blog/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/yuzijun/Desktop/Github/React-Blog/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
