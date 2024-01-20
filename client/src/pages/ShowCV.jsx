import React from "react";
import { useParams } from "react-router-dom";

function ShowCV() {
  let { personId } = useParams();

  return <div>ShowCV</div>;
}

export default ShowCV;
