import React from "react";
import PropTypes from "prop-types";

const C = ({ value, index, children }) => {
  return <>{value === index && <>{children}</>}</>;
};

C.propTypes = {
  children: PropTypes.node.isRequired
};

export default C;
