import React, { ReactNode } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <NavMenu />
      <Container>{children}</Container>
    </div>
  );
};

export { Layout };
