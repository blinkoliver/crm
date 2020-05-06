import React from "react";
import { useState } from "react";
import "../screens/Registration.css";
import AsyncSelect from "react-select/async";

const Test = () => {
  const [inputValue, setInputValue] = useState({});
  const [result, setResult] = useState({});

  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
  };

  console.log(inputValue, result)

  const loadOptions = (inputValue, callback) => {
    if (!inputValue) {
      return callback([]);
    }
    fetch(`http://altproduction.ru/rest/v1/city/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city: `${inputValue}`,
        limit: 2,
        offset: 2,
      }),
    })
      .then((response) => response.json())
      .then((posts) => {
        let results = posts.results;
        console.log(results)
        let cities = results.map((element) => {
          return {
            value: element.city,
            label: element.city,
          };
        });
        callback(cities);
        setResult(cities);
      });
  };

  
  // const loadOptions = (inputValue, callback) => {
  //   if (!inputValue) {
  //     return callback([]);
  //   }
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=6ed6e56030be8bc7d1821d5b302e302e&language=en-US&query=${inputValue}&page=1&include_adult=false`
  //   )
  //     .then((response) => response.json())
  //     .then((posts) => {
  //       let results = posts.results;
  //       let original_title = results.map((element) => {
  //         return {
  //           value: element.original_title,
  //           label: element.original_title,
  //         };
  //       });
  //       callback(original_title);
  //       setResult(original_title);
  //     });
  // };

  return (
    <div className="Registration">
      <div className="FirstBlock">
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => null,
          }}
        />
      </div>
      {/* <button onClick={handleClick}>Fetch data test</button> */}
    </div>
  );
};
export default Test;
