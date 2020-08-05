export const reactSelectOwnershipStyle = {
  container: () => ({
    marginBottom: "18px",
  }),
  control: () => ({
    height: "48px",
    border: "2px solid #c9c9c9",
    display: "flex",
    justifyContent: "space-between",
  }),
  valueContainer: () => ({
    height: "inherit",
    paddingLeft: "2vh",
  }),
  placeholder: () => ({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#787878",
    marginTop: "10px",
  }),
  singleValue: () => ({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#787878",
    marginTop: "10px",
  }),
  menu: () => ({
    border: "1px solid #c9c9c9",
    borderRadius: "4px",
    margin: "8px 0",
  }),
  menuList: () => ({
    width: "100%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#6bbe5a" : "transparent",
  }),
  input: () => ({ height: "inherit", position: "relative", bottom: "40px" }),
};

export const reactSelectOwnershipFormStyle = {
  control: () => ({
    height: "48px",
    border: "2px solid #c9c9c9",
    display: "flex",
    justifyContent: "space-between",
  }),
  valueContainer: () => ({
    height: "inherit",
    paddingLeft: "2vh",
  }),
  placeholder: () => ({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#787878",
    marginTop: "10px",
  }),
  singleValue: () => ({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#787878",
    marginTop: "10px",
  }),
  input: () => ({ height: "inherit", position: "relative", bottom: "40px" }),
};
export const reactSelectCitiesStyle = {
  control: () => ({
    height: "48px",
    border: "2px solid #c9c9c9",
    display: "flex",
  }),
  valueContainer: () => ({
    height: "fitContent",
    paddingLeft: "2vh",
  }),
  placeholder: () => ({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#787878",
    marginTop: "10px",
  }),
  singleValue: () => ({
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#787878",
    marginTop: "10px",
  }),
  input: () => ({ height: "inherit", position: "relative", bottom: "40px" }),
};
export const reactSelectClientStyle = {
  valueContainer: () => ({
    height: "7vh",
    paddingLeft: "2vh",
  }),
  placeholder: () => ({
    fontSize: "3vh",
    marginTop: "2.5vh",
    color: "grey",
  }),
  singleValue: () => ({
    color: "black",
    fontSize: "3vh",
    marginTop: "3vh",
    paddingLeft: "2vh",
  }),
  input: () => ({
    position: "absolute",
    height: "10vh",
  }),
  control: () => ({
    border: "solid grey 1px",
    height: "10vh",
    borderRadius: "0.5vh",
  }),
};
export const reactSelectExecutorStyle = {
  valueContainer: () => ({
    height: "9vh",
    paddingLeft: "2vh",
  }),
  placeholder: () => ({
    fontSize: "3vh",
    marginTop: "2.5vh",
    color: "grey",
  }),
  singleValue: () => ({
    color: "black",
    fontSize: "3vh",
    marginTop: "3vh",
  }),
  input: () => ({
    position: "relative",
    bottom: "8vh",
  }),
  control: () => ({
    border: "solid grey 1px",
    height: "10vh",
    borderRadius: "0.5vh",
  }),
};
export const reactSelectActivitiesStyle = {
  input: () => ({
    position: "relative",
    bottom: "8vh",
    height: "inherit",
  }),
  control: () => ({
    border: "solid grey 1px",
    borderRadius: "0.5vh",
    height: "10vh",
  }),
  valueContainer: () => ({
    height: "7vh",
    paddingLeft: "2vh",
  }),
  placeholder: () => ({
    fontSize: "3vh",
    marginTop: "2%",
    color: "gray",
  }),
  singleValue: () => ({
    color: "grey",
    fontSize: "3vh",
    marginTop: "3vh",
  }),
};
