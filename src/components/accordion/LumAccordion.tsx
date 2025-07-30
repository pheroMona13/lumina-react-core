import React, {
  createContext,
  ReactNode,
  useContext,
  useId,
  useState,
} from "react";
import clsx from "clsx";
import LumIcon from "../icon/LumIcon";
import "./LumAccordion.scss";

export type LumAccordionGroupProps = {
  singleOpen?: boolean;
  children: ReactNode;
};
export type LumAccordionProps = {
  head: string | ReactNode;
  content: string | ReactNode;
  initialOpen?: boolean;
};

type LumAccordionGroupContextType = {
  singleOpen?: boolean | null;
  openAccordionId: string | null;
  toggleAccordionId: (id: string) => void;
};

export const LumAccordionGroupContext =
  createContext<LumAccordionGroupContextType>({
    singleOpen: null,
    openAccordionId: null,
    toggleAccordionId: () => {},
  });

function LumAccordionGroup({ singleOpen, children }: LumAccordionGroupProps) {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordionId = (id: string) => {
    setOpenAccordionId((prevId) => {
      return prevId === id ? null : id;
    });
  };

  return (
    <LumAccordionGroupContext.Provider
      value={{ singleOpen, openAccordionId, toggleAccordionId }}
    >
      <div className="LumAccordionGroup">{children}</div>
    </LumAccordionGroupContext.Provider>
  );
}
function LumAccordion({ head, content, initialOpen }: LumAccordionProps) {
  debugger;
  const { singleOpen, openAccordionId, toggleAccordionId } = useContext(
    LumAccordionGroupContext
  );
  const id = useId();

  const [isOpen, setIsOpen] = useState<boolean>(initialOpen ?? false);

  const handleToggle = () => {
    if (singleOpen) {
      toggleAccordionId(id);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const open = singleOpen ? openAccordionId === id : isOpen;

  return (
    <div className={clsx("LumAccordion", { open })}>
      <div className="head" onClick={handleToggle}>
        <div className="text">{head}</div>
        <LumIcon name="expand_more" className="toggle-icon" />
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

LumAccordion.Group = LumAccordionGroup;
export default LumAccordion;
