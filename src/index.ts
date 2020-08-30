const anyWindow = window as any;

export interface GtagConfigurationOptions {
  sendDefaultPageView?: boolean;
  transportType?: 'beacon' | 'xhr' | 'image';
}

const defaultGtagConfigurationOptions: GtagConfigurationOptions = {
  sendDefaultPageView: true,
};

/**
 * Injects the google analytics gtag lib.
 * @param trackingId The ga tracking id.
 * @param options The options to configure.
 */
export function installGtag(trackingId: string, options: GtagConfigurationOptions = {}) {
  options = { ...defaultGtagConfigurationOptions, ...options };
  const gtagOptions: any = {
    send_page_view: options.sendDefaultPageView,
  };
  if (options.transportType) {
    gtagOptions.transport_type = options.transportType;
  }

  const scriptId = 'ga-gtag';

  if (document.getElementById(scriptId)) {
    return;
  }

  const { head } = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  anyWindow.dataLayer = anyWindow.dataLayer || [];

  gtagRaw('js', new Date());
  gtag('config', trackingId, gtagOptions);
}

export function gtagRaw(...params: any[]) {
  anyWindow.dataLayer.push(arguments);
}

// tslint:disable: unified-signatures, max-line-length
export function gtag(command: 'config', trackingId: string, options?: { [prop: string]: any }): void;
export function gtag(command: 'set', options: any): void;
export function gtag(command: 'event', action: string, options?: any): void;
export function gtag(command: 'event', action: 'page_view', options?: { page_title?: string; page_location?: string; page_path?: string }): void;
export function gtag(command: 'event', action: 'exception', options?: { description?: string; fatal?: boolean }): void;
// tslint:enable: unified-signatures, max-line-length

export function gtag(arg1: any, arg2: any, arg3?: any) {
  anyWindow.dataLayer.push(arguments);
}
