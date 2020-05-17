import React from "react";

const RootContext = React.createContext({
  contactText: "",
  setContactText: () => {},
  // contactOpen: false,
  // setContactOpen: () => {},
});

export default RootContext;
