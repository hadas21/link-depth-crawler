require("dotenv").config();

const depthConfig = {
  default: 2,
  max: 5,
};

function getDepth() {
  const configuredDepth = parseInt(process.env.DEPTH) || depthConfig.default;
  return Math.min(configuredDepth, depthConfig.max);
}

module.exports = {
  getDepth,
};
