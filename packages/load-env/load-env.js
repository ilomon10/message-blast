import { configDotenv } from "dotenv";

export const loadMatrix = async (paths) => {
  let result = {};
  const loadedFrom = [];
  if (typeof paths == "undefined" || paths.length == 0) {
    return await loadMatrix([".env", ".env.local", ".env.production.local"]);
  }

  for (const path of paths) {
    const res = configDotenv({
      path: path,
      encoding: "utf-8",
    });

    if (!res.error) {
      loadedFrom.push(path);
    }

    result = {
      ...result,
      ...res,
    };
  }

  console.info(`Loaded env from: ${loadedFrom.join(", ")}`);

  return result;
};

export default {
  loadMatrix,
};
