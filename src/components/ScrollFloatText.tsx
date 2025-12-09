import { ReactNode } from "react";
import "../styles/scroll-float.css";

interface ScrollFloatTextProps {
  children: ReactNode;
}

const ScrollFloatText = ({ children }: ScrollFloatTextProps) => {
  // Esperando código JS del componente ScrollFloat... Cursor pedirá al usuario pegarlo.
  return <span className="scroll-float-placeholder">{children}</span>;
};

export default ScrollFloatText;

