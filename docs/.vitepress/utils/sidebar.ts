import path from "path";
// import globby from "globby";
import { glob } from "glob";
import matter = require("gray-matter");
export var RootDocsPath = "/docs";

export function GetSibleItemByPath(DocsPath: string) {
  let unixPath = path.posix.resolve("./");

  let fullDocsPath = path.posix.join(unixPath, RootDocsPath, DocsPath);
  // console.log("RootDocsPath: ", RootDocsPath);
  // console.log("unixPath:", unixPath);
  // console.log("fullDocsPath:", fullDocsPath);
  var items = [];
  let files = glob.sync(fullDocsPath + "/*.md");
  // let files = glob.sync("/*");
  // console.log("files:", files);
  items = files.map((file) => {
    return {
      name: path.basename(file),
      text: matter.read(file).data.title,
      link: path.posix.join(DocsPath, path.basename(file)),
    };
  });

  items.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
    // return Number(a.name.split(" ")[0]) > Number(b.name.split(" ")[0]) ? 1 : -1;
  });

  // console.log("files: ", files);
  // console.log("items: ", items);
  return items;
}
