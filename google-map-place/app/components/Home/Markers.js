import React from "react";
import { MarkerF } from "@react-google-maps/api";

function Markers({ business }) {
  return (
    <div>
      <MarkerF
        position={business.geometry.location}
        icon={{
          url: "/circle.png",
          scaledSize: {
            width: 10,
            height: 10,
          },
        }}
      />
    </div>
  );
}

export default Markers;
