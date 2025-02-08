import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000000",       // Black
    cararra: "#EDECE6",     // Cararra
    codGray: "#1A1A1A",     // Cod Gray
    periwinkleGray: "#CAD6EC", // Periwinkle Gray*
    shark: "#25282A",       // Shark
    turmeric: "#D1A900",    // Turmeric
    white: "#FFFFFF",       // White
    whiteWhite: "#F9F9F9",  // White White
    woodland: "#4A5427",    // Woodland*

    // Optionally, define semantic colors
    primary: "#D1A900", // Use Turmeric as primary?
    background: "#F9F9F9", // White White as background?
    text: "#1A1A1A", // Cod Gray for text
  },
});

export default theme;
