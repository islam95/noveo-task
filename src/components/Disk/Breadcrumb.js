import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { newLink } from "../../helpers/helpers";

const BreadcrumbComponent = props => (
  <Breadcrumb tag="nav" listTag="div">
    {props.path.split("/").map((item, i, arr) => {
      return arr.length - 1 === i ? (
        <BreadcrumbItem key={i} active tag="span">
          {item}
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem key={i} tag="span">
          <Link
            onClick={() => props.getDisk(newLink(arr, item))}
            to={`/files/${newLink(arr, item)}`}
          >
            {item === "disk:" ? "Home" : item}
          </Link>
        </BreadcrumbItem>
      );
    })}
  </Breadcrumb>
);

export default BreadcrumbComponent;
