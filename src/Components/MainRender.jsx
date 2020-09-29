import React from "react";
import { Button, Input } from "reactstrap";

export const RenderInput = ({ type, placeholder, ...props }) => (
  <Input {...props} className="input" placeholder={placeholder} type={type} />
);

export const RenderButton = ({ title, ...props }) => (
  <Button {...props} size="sm" outline>
    {title}
  </Button>
);
