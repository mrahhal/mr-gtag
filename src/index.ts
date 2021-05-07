const anyWindow = window as any;

export interface GtagConfigOptions {
  send_page_view?: boolean;
  transport_type?: 'beacon' | 'xhr' | 'image';
  groups?: string;
  [prop: string]: any;
}

const defaultGtagConfigurationOptions: GtagConfigOptions = {
  send_page_view: true,
};

/**
 * Only injects the google analytics gtag lib without calling config.
 * @param trackingId The ga tracking id.
 */
export function onlyInstallGtag(trackingId: string): void {
  const { head } = document;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  anyWindow.dataLayer = anyWindow.dataLayer || [];

  gtagRaw('js', new Date());
}

/**
 * Injects the google analytics gtag lib.
 * @param trackingId The ga tracking id.
 * @param options The options to configure.
 */
export function installGtag(trackingId: string, options?: GtagConfigOptions): void {
  onlyInstallGtag(trackingId);

  options = { ...defaultGtagConfigurationOptions, ...options };
  gtag('config', trackingId, options);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function gtagRaw(...params: any[]) {
  // eslint-disable-next-line prefer-rest-params
  anyWindow.dataLayer.push(arguments);
}

// tslint:disable: unified-signatures, max-line-length
export function gtag(command: 'config', trackingId: string, options?: GtagConfigOptions): void;
export function gtag(command: 'set', options: any): void;
export function gtag(command: 'event', action: 'page_view', options?: { page_title?: string; page_location?: string; page_path?: string; send_to?: string }): void;
export function gtag(command: 'event', action: 'exception', options?: { description?: string; fatal?: boolean }): void;
export function gtag(command: 'event', action: string, options?: any): void;
// tslint:enable: unified-signatures, max-line-length

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function gtag(arg1: any, arg2: any, arg3?: any) {
  // eslint-disable-next-line prefer-rest-params
  anyWindow.dataLayer.push(arguments);
}
