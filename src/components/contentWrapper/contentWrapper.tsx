import React, { ReactNode } from "react";

import "./style.scss";
interface Props {
  children: ReactNode;
}
const ContentWrapper = ({ children }: Props) => {
  return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
