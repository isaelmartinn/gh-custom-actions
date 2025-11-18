const core = require("@actions/core");
const guthub = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  core.notice("Hello from my custon JavaScript Action!");
}

run();
