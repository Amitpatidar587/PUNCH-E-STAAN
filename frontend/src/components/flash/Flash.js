import React from "react";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function () {
  const { flash, setFlashMessage } = useContext(UserContext);

  const handleFlash = () => {
    setFlashMessage("");
  };
  return (
    <div className="fixed-top w-full">
      {flash && flash.length ? (
        <>
          <div class="alert alert-success flex w-full" role="alert">
            {flash}
            <div className="ms-auto">
            <button className="ms-auto" onClick={handleFlash}>
              <b>X</b>
            </button>

            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
