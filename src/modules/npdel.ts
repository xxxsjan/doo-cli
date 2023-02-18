import path from "path";
import { deleteSync, deleteAsync } from "del";
import fs from "fs";

export default function npdel(options) {
  const delPath = path.resolve(path.resolve(), "node_modules");
  const exists = fs.existsSync(delPath);
  if (!exists) {
    return;
  }
  try {
    // deleteSync(['test']);
    deleteAsync(["test"], {
      onProgress: (p) => {
        console.log(p);
        p.percent == 1 && console.log(delPath + "已删除");
      },
    });
  } catch (error) {
    console.log(delPath + "删除出错" + error);
  }
}
