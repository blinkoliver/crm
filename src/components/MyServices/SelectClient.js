import React from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";
import { reactSelectClientStyle } from "../../constants/componentsStyle";
import { httpPost } from "../../utils";

const SelectClient = (props) => {
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
        { value: "4324", label: "Petia" },
        { value: "2131", label: "Vasia" },
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

  return (
    <>
      <AsyncSelect
        cacheOptions
        onChange={(city) => props.onChange(city.value)}
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        styles={reactSelectClientStyle}
        placeholder={"Выберите клиента или добавьте вручную"}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => null,
        }}
      />
    </>
  );
};
export default SelectClient;
