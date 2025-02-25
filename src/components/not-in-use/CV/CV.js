import React from "react";

export default function CV({pdf}) {
  return (
    <div className="cv-container" style= {{ marginTop: '50px'}}>
      <embed src={pdf} type="application/pdf" width="100%" height="1000px" />
    </div>
  );
}

