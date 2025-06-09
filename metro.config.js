// metro.config.js
const {getDefaultConfig} = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);
const workspaceRoot = path.resolve(__dirname, '../..');

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
  extraNodeModules: {
    ...config.resolver.extraNodeModules,
    crypto: require.resolve('expo-crypto'),
    // crypto: require.resolve('react-native-crypto'),
    fs: path.resolve(__dirname, './src/shared/utils/fsPolyfill.js'),
    'text-encoding': require.resolve('text-encoding'),
    stream: require.resolve('stream-browserify'),
    process: require.resolve('process'),
    buffer: require.resolve('buffer'),
    // Add web streams API polyfill
    'web-streams-polyfill': require.resolve('web-streams-polyfill'),
    // Add events polyfill
    events: require.resolve('events'),
  },
};

module.exports = config;
