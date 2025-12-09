import { ReactNode } from "react";
import "../styles/decrypt.css";

interface AnimatedDecryptTextProps {
  children: ReactNode;
}

const AnimatedDecryptText = ({ children }: AnimatedDecryptTextProps) => {
  // Aquí pegar el código JS cuando Fede lo proporcione
  return <span className="animated-decrypt">{children}</span>;
};

export default AnimatedDecryptText;

