// theme/components/input.ts
import { Input as ChakraInput, ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
  ...ChakraInput,
  parts: ["field"],
  baseStyle: {
    fontFamily: "body",
    borderRadius: "7px",
  },

  variants: {
    outline: {
      field: {
        bg: "#FDFDFD",
        borderColor: "border",
        _placeholder: {
          color: "font.placeholder",
        },
        _invalid: {
          boxShadow: "none",
          borderColor: "font.error",
        },
        _disabled: {
          opacity: 1,
          bg: "bg.disabled",
          color: "font.pencil",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: ["16px", "sm"],
        px: "2",
      },
    },
    lg: {
      field: {
        px: "4",
        h: "52px",
        fontSize: ["16px", "sm"],
      },
    },
  },

  defaultProps: {
    focusBorderColor: "border",
  },
};
