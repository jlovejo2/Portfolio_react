import React from "react";

const RootContext = React.createContext({
  contactText: "",
  setContactText: () => {},
  handleContactOpen: () => {},
  handleContactClose: () => {},
  // contactOpen: false,
  // setContactOpen: () => {},
});

export default RootContext;
