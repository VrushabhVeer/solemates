import React from "react";

const Alert = ({ message }) => {
  return (
    <div
      className="p-3 mb-4 text-sm text-yellow-900 rounded-lg bg-yellow-50"
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;
