import { Platform as CdkPlatform } from '@angular/cdk/platform';

export enum PlatformType {
  Android = 'android',
  Browser = 'browser',
  IOS = 'ios',
  Unknown = 'unknown',
}

export interface Platform {
  platform: Omit<CdkPlatform, '_platformId'> & {
    type: PlatformType;
  };
  standalone: boolean;
  installed: boolean;
  isMobile: boolean;
}

const isMobile = (platform: CdkPlatform) => {
  return platform.ANDROID || platform.IOS;
};

const getPlatformType = (platform: CdkPlatform) => {
  switch (true) {
    case platform.ANDROID:
      return PlatformType.Android;
    case platform.IOS: {
      return PlatformType.IOS;
    }
    default:
      return PlatformType.Unknown;
  }
};

export default (window: Window, platform: CdkPlatform): Platform => {
  const userAgent = window.navigator.userAgent;
  const standalone = window.matchMedia('(display-mode: standalone)').matches;

  return {
    standalone,
    platform: {
      ...platform,
      type: getPlatformType(platform),
    },
    installed: !!(standalone || (platform.IOS && !userAgent.match(/Safari/))),
    isMobile: isMobile(platform),
  };
};
