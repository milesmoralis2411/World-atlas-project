import { NavLink, useRouteError } from "react-router-dom";
import React from 'react';

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Oops! Something went wrong 😵</h1>
        <p>{error.statusText || error.message}</p>
        <p>Status Code: {error.status || "Unknown"}</p>
        <NavLink
          to="/"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go back to Home
        </NavLink>
      </div>
    </>
  );
};
