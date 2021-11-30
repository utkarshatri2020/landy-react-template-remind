import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { handleCloseOutside } from "components/Modal/handleCloseOutside";
import {
  BurgerSidebarContainer,
  BurgerSidebarWrapper,
  BurgerSidebarOverlay,
  BurgerOuterScroll,
} from "./styles";

export interface BurgerSidebarProps {
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}

export const BurgerSidebar = ({
  open,
  children,
  handleClose,
}: BurgerSidebarProps) => {
  const TIMEOUT: number = 450;
  const wrapperRef = useRef(null);
  handleCloseOutside(wrapperRef, handleClose);

  return (
    <BurgerSidebarOverlay shouldShow={open}>
      <BurgerOuterScroll shouldHide={open} />
      <CSSTransition
        in={open}
        classNames="burgerslide-transition"
        unmountOnExit
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        <BurgerSidebarWrapper>
          <BurgerSidebarContainer ref={wrapperRef}>
            {children}
          </BurgerSidebarContainer>
        </BurgerSidebarWrapper>
      </CSSTransition>
    </BurgerSidebarOverlay>
  );
};
