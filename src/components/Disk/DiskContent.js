import React from "react";
import { formatBytes, removeDiskColumn } from "../../helpers/helpers";
import { FaFolder } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiskContent = props => (
  <tbody>
    {props.files.items.map((item, i) => {
      const { name, path, type, size } = item;
      const newPath = removeDiskColumn(path);
      return (
        <tr key={i}>
          <td>
            {type === "dir" ? (
              <Link to={`${newPath}`} onClick={() => props.getDisk(name)}>
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
