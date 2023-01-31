import React from "react";
import "./discover.scss";
import { HiChevronDown } from "react-icons/hi";
import useBoolean from "../../../Hooks/useBoolean";
import Drop from "../../FramerMotion/Drop";

function Discover() {
  const { isOpen, toggle } = useBoolean();
  const active = isOpen ? "active" : "";
  return (
    <>
      <div className={`decouvrir ${active}`} onClick={toggle}>
        <p>Découvrir</p>
        <HiChevronDown />
        <Drop isOpen={isOpen} toggle={toggle} myClass={"motion_desk"} />
      </div>
      <Drop isOpen={isOpen} toggle={toggle} myClass={"motion"} />
    </>
  );
}

export default Discover;
