import React from "react";
import BusinessItem from "./BusinessItem";

function BusinessList({ businessList }) {
  return (
    <div
      className="flex overflow-scroll overflow-x-auto gap-4
    scrollbar-hide scroll-smooth"
    >
      {businessList.map(
        (item, index) =>
          index <= 7 && (
            <div key={index}>
              <BusinessItem business={item} />
            </div>
          )
      )}
    </div>
  );
}

export default BusinessList;
