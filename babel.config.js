// v52-tier1-team-04/babel.config.js
module.exports = {
    presets: ['next/babel'],
    env: {
        test: {
            presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }]
            ]
        }
    }
};