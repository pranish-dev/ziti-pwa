import type { Config } from './types';

export default {
  id: '/',
  name: 'Ziti Hub',
  shortName: 'Ziti Hub',
  description: 'All in one hub for OnePlus Nord CE 3 (ziti) users',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Documentation',
      shortName: 'Doc',
      description: 'All in one guide',
      url: '/search/label/Documentation?utm_source=homescreen',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is only available if you are using cloudflare workers
    oneSignalEnabled: false, // To enable OneSignal, set this to true
    oneSignalConfig: {
      appId: '********-****-****-****-************', // Replace with your OneSignal App Id
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
