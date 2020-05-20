import React from "react";
import { useState } from "react";
import AsyncSelect from "react-select/async";

const selectCityURL = `http://altproduction.ru/rest/v1/city/`;

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
    fetch(
      { selectCityURL },
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: `${inputValue}`,
          limit: 7,
          offset: 1,
        }),
      }
    )
      .then((response) => response.json())
      .then((posts) => {
        let results = posts.city;
        console.log(results);
        let cities = results.map((element) => {
          return {
            value: `${element.type} ${element.city}, ${element.district} район, ${element.region}`,
            label: `${element.type} ${element.city}, ${element.district} район, ${element.region}`,
          };
        });
        callback(cities);
        setResult(cities);
      });
  };

  return (
    <div>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleInputChange}
        styles={{
          valueContainer: () => ({
            height: "10vh",
            paddingLeft: "2vh",
          }),
          placeholder: () => ({
            fontSize: "3vh",
            marginTop: "10%",
            color: "gray",
          }),
          singleValue: () => ({
            color: "gray",
            fontSize: "3vh",
            marginTop: "3vh",
          }),
        }}
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
