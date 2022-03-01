import React from "react";

export const ShowError = ( {e} ) => {
  return (
    <>
      <div className="bg-danger p-3 mt-2">
        <p>{e.message}</p>
      </div>
    </>
  );
};
