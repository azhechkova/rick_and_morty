import React from "react";

export const FilterGender = ({ setGender, setCurrentPage }) => {
  const handleChange = (e) => {
    setGender({ gender: e.target.value });
    setCurrentPage(1);
  };
  return (
    <div className="filter-select" onChange={handleChange}>
      <select>
        <option defaultValue value="">
          Choose gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
