import React, { useState } from "react";

const Spinner = ({  }) => {
  const [spinner, setSpinner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setSpinner(true);
    } else {
      setSpinner(false);
    }
  }, [isLoading]);

  return (
    <div id="spinner" className={spinner ? "show" : "hidden"}>
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
