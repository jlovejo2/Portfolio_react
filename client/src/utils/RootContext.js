import React from "react";

const RootContext = React.createContext({
  contactText: "",
  setContactText: () => {},
});

export default RootContext;
