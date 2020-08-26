import React from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { reactSelectCitiesStyle } from "../constants/componentsStyle";
import { httpPost } from "../utils";

const SelectCity = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [result, setResult] = useState({});

  console.log(inputValue);

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
  };

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) {
      return callback([
        { value: "4324", label: "Minsk" },
        { value: "2131", label: "Vitebsk" },
      ]);
    }
    httpPost(`rest/v1/city/`, {
      city: `${inputValue}`,
      limit: 7,
      offset: 1,
    })
      .then((posts) => {
        let results = posts.city;
        let cities = results.map((element) => {
          return {
            value: `${element.id}`,
            label: `${element.type} ${element.city}, ${element.district} район, ${element.region}`,
          };
        });
        callback(cities);
        setResult(cities);
      })
      .catch((err) => console.log(result));
  };
  console.log(props);
  return (
    <>
      <AsyncSelect
        // value={props.value}
        cacheOptions
        onChange={(city) => props.onChange(city.value)}
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        styles={reactSelectCitiesStyle}
        placeholder={props.placeholder}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
      />
    </>
  );
};
export default SelectCity;
