import { prepare, maps } from "binary2npm";

maps.os.linux = "linux-musl";

await prepare({
  remote: "github",
  author: "crate-ci",
  repository: "typos",
  remoteToken: process.env.GITHUB_TOKEN,
  binary: "typos",
  usePackageJson: true,
});
