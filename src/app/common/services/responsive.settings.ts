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
  },
  mobile: {
    mainTitle: {
      size: 30,
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
  },
};
