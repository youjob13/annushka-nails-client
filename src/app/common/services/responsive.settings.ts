export type ResponsiveSettings = {
  mainTitle: {
    size: number;
  };
  secondaryTitle: {
    size: number;
  };
  text: {
    size: number;
  };
  secondaryText: {
    size: number;
  };
  control: {
    width: number;
  };
  textArea: {
    height: number;
  };
};

export type DisplayType = 'desktopLarge' | 'desktopSmall' | 'mobile';

export const MAPPER: Record<DisplayType, ResponsiveSettings> = {
  desktopLarge: {
    mainTitle: {
      size: 36,
    },
    secondaryTitle: {
      size: 24,
    },
    text: {
      size: 16,
    },
    secondaryText: {
      size: 13,
    },
    control: {
      width: 500,
    },
    textArea: {
      height: 87,
    },
  },
  desktopSmall: {
    mainTitle: {
      size: 36,
    },
    secondaryTitle: {
      size: 24,
    },
    text: {
      size: 16,
    },
    secondaryText: {
      size: 13,
    },
    control: {
      width: 500,
    },
    textArea: {
      height: 87,
    },
  },
  mobile: {
    mainTitle: {
      size: 30,
    },
    secondaryTitle: {
      size: 24,
    },
    text: {
      size: 13,
    },
    secondaryText: {
      size: 11,
    },
    control: {
      width: 240,
    },
    textArea: {
      height: 60,
    },
  },
};
