import { useToggle } from "@/hooks";
import React, { createContext } from "react";

import { ContactFormModal } from "@/compositions";

export const ContactFormModalContext = createContext<{
  on: boolean;
  toggle: (value?: any) => void;
  toggleOff: () => void;
  toggleOn: () => void;
}>({
  on: false,
  toggle: () => {},
  toggleOn: () => {},
  toggleOff: () => {},
});

const ContactFormModalProvider = ({ children }: { children: React.ReactNode }) => {
  const { on, toggle, toggleOff, toggleOn } = useToggle();

  return (
    <ContactFormModalContext.Provider
      value={{
        on,
        toggle,
        toggleOff,
        toggleOn,
      }}
    >
      {children}
      <ContactFormModal
        on={on}
        toggle={toggle}
        toggleOn={toggleOn}
        toggleOff={toggleOff}
      />
    </ContactFormModalContext.Provider>
  );
};

export default ContactFormModalProvider;
