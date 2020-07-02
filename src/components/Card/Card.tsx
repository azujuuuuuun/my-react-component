import React, { ReactNode } from "react";
import styled from "@emotion/styled";

type CardProps = {
  /** className */
  className?: string;
  /** children */
  children: ReactNode;
};

const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 4px 4px 4px lightgray;
  padding: 4px;
`;

export function Card({ className, children }: CardProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}
