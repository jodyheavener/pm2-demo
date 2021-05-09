// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

module.exports = {
  apps: [
    {
      name: "pm2-websocket",
      script: "pm2-ws",
      max_restarts: "1",
      min_uptime: "2m",
      kill_timeout: 20000,
      env: {
        CLEAR: "false"
      }
    },
  ]
};
