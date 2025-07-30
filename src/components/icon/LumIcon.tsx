// src/Icon.tsx
import React from "react";
import { iconMap, IconName } from "../../assets/icons";

export interface LumIconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "name" | "color"> {
  name: IconName;
  size?: string | number;
  color?: string;
  title?: string;
}

function LumIcon({
  name,
  size = "24px",
  color = "#808080", // --lum-color-base-500
  title,
  ...rest
}: LumIconProps) {
  const Svg = iconMap[name];

  if (!Svg) {
    console.warn(`[Icon] No icon found for name="${name}"`);
    return null;
  }

  const accessibilityProps = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": true };

  return (
    <Svg
      width={size}
      height={size}
      fill={color}
      focusable="false"
      {...accessibilityProps}
      {...rest}
    />
  );
}

export default LumIcon;
