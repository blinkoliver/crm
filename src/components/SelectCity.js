import React from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { reactSelectCitiesStyle } from "../constants/componentsStyle";
import { hosting } from "../constants/urls";
import { Fetch } from "../utils";

const SelectCity = () => {
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
    const httpGet = (path) => {
      Fetch(`${hosting}/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: `${inputValue}`,
          limit: 7,
          offset: 1,
        }),
      }).then((posts) => {
        let results = posts.city;
        let cities = results.map((element) => {
          return {
            value: `${element.city_id}`,
            label: `${element.type} ${element.city}, ${element.district} район, ${element.region}`,
          };
        });
        callback(cities);
        setResult(cities);
      });
    };
    httpGet(`rest/v1/city/`);
  };

  return (
    <div>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        styles={reactSelectCitiesStyle}
        placeholder={"Город регистрации"}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
      />
    </div>
  );
};
export default SelectCity;
