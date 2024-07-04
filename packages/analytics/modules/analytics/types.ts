export interface Analytics {
  /** Report a page change */
  page: (url: string) => void;
  /** Report a custom event */
  track: (eventName: string, eventProperties: Record<string, string>) => void;
  /** Save information about the user */
  identify: (userId: string, userProperties?: Record<string, string>) => void;
  /** Automatically setup and track user interactions, returning a function to remove any listeners that were setup. */
  autoTrack: (root: Document | ShadowRoot | Element) => () => void;
  /** Calls `config.enabled.setValue` */
  setEnabled: (enabled: boolean) => void;
}

export interface AnalyticsConfig {
  /**
   * Array of providers to send analytics to.
   */
  providers: AnalyticsProvider[];
  /**
   * Enable debug logs and other provider-specific debugging features.
   */
  debug?: boolean;
  /**
   * Extension version, defaults to `browser.runtime.getManifest().version`.
   */
  version?: string;
  /**
   * Configure how the enabled flag is persisted
   */
  enabled?: AnalyticsStorageItemConfig<boolean>;
  /**
   * Configure how the user Id is persisted
   */
  userId?: AnalyticsStorageItemConfig<string>;
  /**
   * Configure how user properties are persisted
   */
  userProperties?: AnalyticsStorageItemConfig<Record<string, string>>;
}

export interface AnalyticsStorageItemConfig<T> {
  getValue: () => T | Promise<T>;
  setValue?: (newValue: T) => void | Promise<void>;
}

export type AnalyticsProvider = (
  analytics: Analytics,
  config: AnalyticsConfig,
) => {
  /** Upload a page view event */
  page: (event: AnalyticsPageViewEvent) => Promise<void>;
  /** Upload a custom event */
  track: (event: AnalyticsTrackEvent) => Promise<void>;
  /** Upload or save information about the user */
  identify: (event: BaseAnalyticsEvent) => Promise<void>;
};

export interface BaseAnalyticsEvent {
  meta: {
    /** Identifier of the session the event was fired from */
    sessionId: number | undefined;
    /** `Date.now()` of when the event was reported */
    timestamp: number;
    /** `"1920x1080"` */
    screen?: string;
    /** `document.referrer` */
    referrer?: string;
    /** `navigator.language` */
    language?: string;
    /** `location.href` */
    url?: string;
  };
  user: {
    id: string;
    properties: Record<string, string | undefined>;
  };
}

export interface AnalyticsPageInfo {
  url: string;
  title?: string;
  location?: string;
}

export interface AnalyticsPageViewEvent extends BaseAnalyticsEvent {
  page: AnalyticsPageInfo;
}

export interface AnalyticsTrackEvent extends BaseAnalyticsEvent {
  event: {
    name: string;
    properties?: Record<string, string>;
  };
}
