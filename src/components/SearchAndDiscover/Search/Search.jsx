import React from "react";
import "./search.scss";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import useBoolean from "../../../Hooks/useBoolean";
import Input from "./Input";
function Search() {
  const { isOpen, toggle } = useBoolean();

  return (
    <div className="search">
      <Input />

      {isOpen ? (
        <div className="search_open">
          <Input />
          <AiOutlineClose onClick={toggle} className="open" />
        </div>
      ) : (
        <BiSearch className="close" onClick={toggle} />
      )}
    </div>
  );
}

export default Search;
