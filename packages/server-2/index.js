// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

const logs = [
  "I coulda dropped mah croissant.",
  "Road work ahead? Uh yea, I sure hope it does.",
  "Welcome to Chili's",
  "It's a avocadooo... thanks",
  "Get to Del Taco. They got a new thing called Freesha-- Free-- Freeshavaca-do.",
  "...And they were roommates",
  "Look at all those chickens!"
];

setInterval(
  () => process.stdout.write(`${logs[Math.floor(Math.random() * logs.length)]}\r\n`),
  5000
);
