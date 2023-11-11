import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import light from "./images/lochi_light.png";
import dark from "./images/lochi_dark.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
interface props {
  width?: number;
  height?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
}

export function Logo(props: props) {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <Image
      src={isDarkModeEnabled ? dark : light}
      className={props.className ?? ""}
      alt={`stockgres logo`}
      onClick={props.onClick}
    />
  );
}
