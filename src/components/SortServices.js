import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const SortServices = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="primary">
        Сортировать
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>По названию</DropdownItem>
        <DropdownItem>По дате</DropdownItem>
        <DropdownItem>По цене</DropdownItem>
        <DropdownItem>По статусу</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default SortServices;
