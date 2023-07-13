declare global {
  interface Document {
    webkitFullscreenEnabled?: boolean;
    webkitFullscreenElement?: Element | null;
  }
  interface Element {
    webkitRequestFullscreen?: (options?: FullscreenOptions) => Promise<void>;
  }
  interface Window {
    customProps: {
      config: {
        apiUrl: string;
      };
      version: string;
      mode: string;
    };
  }
}
