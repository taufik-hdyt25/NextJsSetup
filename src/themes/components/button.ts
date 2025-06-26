export const Button = {
  baseStyle: {
    fontWeight: '400',
    borderRadius: '7px',
    fontFamily: 'body',
  },
  sizes: {
    sm: {
      px: '2',
      h: '7',
      lineHeight: '130%',
    },
    md: {
      px: '4',
      h: '10',
      fontSize: 'sm',
    },
    lg: {
      px: '6',
      h: '44px',
      fontSize: 'md',
      lineHeight: '44px',
    },
    xl: {
      px: '8',
      h: '54px',
      fontSize: 'md',
    },
  },
  variants: {
    solid: {
      _hover: {
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    ghost: {
      color: 'font.primary',
      _hover: {
        bg: 'gray.200',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    danger: {
      bg: 'red.500',
      color: 'white',
      _hover: {
        bg: 'red.600',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    info: {
      bg: 'font.orange',
      color: 'white',
      _hover: {
        bg: 'orange.500',
        _disabled: {
          bg: 'bg.disabled',
          color: 'font.pencil',
          opacity: '1',
        },
      },
      _disabled: {
        bg: 'bg.disabled',
        color: 'font.pencil',
        opacity: '1',
      },
    },
    link: {
      boxShadow: 'none',
      color: 'font.primary',
    },
  },
};
