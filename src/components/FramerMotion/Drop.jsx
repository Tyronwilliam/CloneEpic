import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import List from "../List/List";
import "../List/list.scss";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Drop({ isOpen, toggle, myClass }) {
  return (
    // STYLE ON LIST

    <motion.nav
      animate={isOpen ? "open" : "closed"}
      className={myClass}
      variants={variants}
    >
      <section className="drop">
        <List />
      </section>
      <div className="bg-opac" onClick={toggle}></div>
    </motion.nav>
  );
}
Drop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Drop;
