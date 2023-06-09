module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            shared: './shared',
            assets: './assets',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
