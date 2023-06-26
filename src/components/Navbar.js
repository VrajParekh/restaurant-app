import React from "react";

const Navbar = ({ filterCategory, categoryList }) => {
  return (
    <>
      <div className="navbar">
        <div className="btn-group">
          {categoryList.map((category) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => {
                  filterCategory(category);
                }}
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
