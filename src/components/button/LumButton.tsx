import React from "react";
import clsx from "clsx";
import "./LumButton.scss";

export type LumButtonProps = {
  // sizes
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  xsmall?: boolean;
  micro?: boolean;
  xmicro?: boolean;
  sxmicro?: boolean;

  // shapes
  rounded?: boolean;
  rectangle?: boolean;

  // colors
  blue?: boolean;
  pink?: boolean;
  indigo?: boolean;
  emerald?: boolean;

  // variants
  primary?: boolean;
  secondary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function LumButton({
  large,
  medium,
  small,
  xsmall,
  micro,
  xmicro,
  sxmicro,

  rounded,
  rectangle,

  blue,
  pink,
  indigo,
  emerald,

  primary,
  secondary,

  className,
  children,
  ...rest
}: LumButtonProps) {
  return (
    <button
      className={clsx("LumButton", className, {
        large,
        medium:
          medium ||
          (!large && !small && !xsmall && !micro && !xmicro && !sxmicro),
        small,
        xsmall,
        micro,
        xmicro,
        sxmicro,

        rounded,
        rectangle: rectangle || (!rounded && !rectangle),

        blue: blue || (!blue && !pink && !indigo && !emerald),
        pink,
        indigo,
        emerald,

        primary: primary || (!primary && !secondary),
        secondary,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

export default LumButton;
