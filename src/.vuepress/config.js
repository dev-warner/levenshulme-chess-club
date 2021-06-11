const config = require("./data/config.json");
const base = process.env.BASE ? { base: process.env.BASE } : {};

let ogprefix = "og: http://ogp.me/ns#";
let color = "#000";
let author = "Joe Warner";

let title = "Levenshulme Chess Club";
let description =
  "A Levenshulme based casual chess evening at the Talleyrand. Every other Monday from 7:30pm.";

module.exports = Object.assign(config, base, {
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "" }],
    ["meta", { name: "theme-color", content: color }],
    ["meta", { prefix: ogprefix, property: "og:title", content: title }],
    ["meta", { prefix: ogprefix, property: "twitter:title", content: title }],
    ["meta", { prefix: ogprefix, property: "og:type", content: "article" }],
    [
      "meta",
      {
        prefix: ogprefix,
        property: "og:url",
        content: "https://levenshulme-chess.club/"
      }
    ],
    [
      "meta",
      { prefix: ogprefix, property: "og:description", content: description }
    ],
    [
      "meta",
      {
        prefix: ogprefix,
        property: "og:image",
        content: "https://levenshulme-chess.club/images/cover.png"
      }
    ],
    [
      "meta",
      { prefix: ogprefix, property: "og:article:author", content: author }
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: `/apple-touch-icon.png` }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: color }
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/mstile-150x150.png" }
    ],
    ["meta", { name: "msapplication-TileColor", content: color }]
  ],
  description,
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  }
});
