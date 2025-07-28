import React from "react";
import "./LumInput.scss";
import clsx from "clsx";

export type LumInputProps = {
  // sizes
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  xsmall?: boolean;
  micro?: boolean;

  // shapes
  rounded?: boolean;
  rectangle?: boolean;

  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function LumInput({
  large,
  medium,
  small,
  xsmall,
  micro,

  rounded,
  rectangle,

  label,

  className,
  ...rest
}: LumInputProps) {
  return (
    <div
      className={clsx("LumInput", className, {
        large,
        medium: medium || (!large && !small && !xsmall && !micro),
        small,
        xsmall,
        micro,

        rounded,
        rectangle: rectangle || (!rounded && !rectangle),
      })}
    >
      <label>
        <div className="label-text">{label}</div>
        <input {...rest} />
      </label>
      <div className="bottom-text"></div>
    </div>
  );
}

export default LumInput;
