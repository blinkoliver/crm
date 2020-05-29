import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { reactSelectCitiesStyle } from "../constants/componentsStyle";
import { httpGet } from "../utils";

const MyStaff = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [result, setResult] = useState({});

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
  };
  console.log(inputValue, result);

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) {
      return callback([]);
    }
    httpGet(
      `3/search/movie?api_key=6ed6e56030be8bc7d1821d5b302e302e&language=en-US&query=${inputValue}&page=1&include_adult=false`
    ).then((posts) => {
      let results = posts.results;
      let result = results.map((element) => {
        return {
          value: `${element.id}`,
          label: `${element.title}`,
        };
      });
      callback(result);
      setResult(result);
    });
  };
  return (
    <div>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        styles={reactSelectCitiesStyle}
        placeholder={"films..."}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
      />
    </div>
  );
};
export default MyStaff;
