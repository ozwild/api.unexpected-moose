module.exports = function babelConfig(api) {
    api.cache(false);
  
    const presets = [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/typescript',
    ];
  
    const plugins = [
      '@babel/plugin-transform-modules-commonjs',
      '@babel/proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
    ];
  
    return {
      presets,
      plugins,
    };
  };
  