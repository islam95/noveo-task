// To get just access_token from url
export const parseAccessToken = url => {
  if (url) return /access_token=([^&]+)/.exec(url)[1];
};

// Converts bytes to Kb
export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
};

export const cleanUrl = str => {
  return str.replace("disk:/", "");
};

export const newLink = (pathArr, item) => {
  if(item === "disk:") return "/"
  let index = pathArr.findIndex(el => el === item);
  return pathArr.slice(1, index + 1).join("/");
}
