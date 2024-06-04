import "@fontsource/roboto";
import "@fontsource/outfit";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Outfit, sans-serif",
  },
});

export default theme;
