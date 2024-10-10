import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Post/Sidebar";
import Details from "../Projects/Details";
import NotFound from "../NotFound";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function DynamicRoute() {
  const query = useQuery();
  const type = query.get("type");

  if (type === "blog") {
    return <Sidebar />;
  } else if (type === "project") {
    return <Details />;
  } else {
    return <NotFound />;
  }
}
