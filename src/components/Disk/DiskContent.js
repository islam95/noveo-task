import React from "react";
import { formatBytes, cleanUrl } from "../../helpers/helpers";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiskContent = props => (
  <tbody>
    {props.files.items.map((item, i) => {
      const { name, path, type, size } = item;
      let newPath = cleanUrl(path);
      const link = !newPath.startsWith("files") ? `/files/${newPath}` : newPath;
      return (
        <tr key={i}>
          <td>
            {type === "dir" ? (
              <Link to={`${link}`} onClick={() => props.getDisk(path)}>
                <FaFolder /> {name}
              </Link>
            ) : (
              name
            )}
          </td>
          <td>{type === "file" && formatBytes(size)}</td>
        </tr>
      );
    })}
  </tbody>
);

export default DiskContent;
