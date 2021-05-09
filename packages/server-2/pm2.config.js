// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

module.exports = {
  apps: [
    {
      name: 'server-2',
      script: 'node index.js',
      cwd: __dirname,
      max_restarts: '1',
      min_uptime: '2m',
      env: {
        NODE_ENV: 'development',
      },
      filter_env: ['npm_'],
      watch: ['index.js'],
      time: true,
    },
  ],
};
