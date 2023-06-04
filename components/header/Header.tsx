import React from "react";
import { Logo } from "../logo";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div style={{ cursor: "pointer" }}>
        <Logo />
      </div>
      <div style={{ cursor: "pointer" }}>
        <CgMenuRightAlt size={30} />
      </div>
    </div>
  );
}
