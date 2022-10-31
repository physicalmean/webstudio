import * as React from "react";
import { IconProps } from "./types";

export const CopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.6 5.6V3.92C5.6 3.24794 5.6 2.91191 5.73079 2.65521C5.84584 2.42942 6.02942 2.24584 6.25521 2.13079C6.51191 2 6.84794 2 7.52 2H12.08C12.7521 2 13.0881 2 13.3448 2.13079C13.5706 2.24584 13.7542 2.42942 13.8692 2.65521C14 2.91191 14 3.24794 14 3.92V8.48C14 9.15206 14 9.4881 13.8692 9.74479C13.7542 9.97058 13.5706 10.1542 13.3448 10.2692C13.0881 10.4 12.7521 10.4 12.08 10.4H10.4M3.92 14H8.48C9.15206 14 9.48809 14 9.74479 13.8692C9.97058 13.7542 10.1542 13.5706 10.2692 13.3448C10.4 13.0881 10.4 12.7521 10.4 12.08V7.52C10.4 6.84794 10.4 6.51191 10.2692 6.25521C10.1542 6.02942 9.97058 5.84584 9.74479 5.73079C9.48809 5.6 9.15206 5.6 8.48 5.6H3.92C3.24794 5.6 2.91191 5.6 2.65521 5.73079C2.42942 5.84584 2.24584 6.02942 2.13079 6.25521C2 6.51191 2 6.84794 2 7.52V12.08C2 12.7521 2 13.0881 2.13079 13.3448C2.24584 13.5706 2.42942 13.7542 2.65521 13.8692C2.91191 14 3.24794 14 3.92 14Z"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CopyIcon.displayName = "CopyIcon";
