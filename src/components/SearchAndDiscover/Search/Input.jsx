import React from "react";
import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";
import "./input.scss";
function Input({ toggle }) {
  return (
    <div className="input_icon">
      <BiSearch className="open" onClick={toggle} />
      <input type="text" placeholder="Recherche en boutique" />
    </div>
  );
}

Input.prototype = {
  toggle: PropTypes.func.isRequired,
};
export default Input;
