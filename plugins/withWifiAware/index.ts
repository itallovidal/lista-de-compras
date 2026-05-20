import { ConfigPlugin, withAndroidManifest, createRunOncePlugin } from '@expo/config-plugins';

const WIFI_AWARE_PERMISSIONS = [
  'android.permission.ACCESS_WIFI_STATE',
  'android.permission.CHANGE_WIFI_STATE',
  'android.permission.ACCESS_FINE_LOCATION',
];

const withWifiAware: ConfigPlugin = (config) => {
  return withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;

    const mainApplication = androidManifest.manifest.application?.[0];
    if (!mainApplication) return config;

    const usesPermissions = WIFI_AWARE_PERMISSIONS.map((permission) => ({
      $: { 'android:name': permission },
    }));

    if (!androidManifest.manifest['uses-permission']) {
      androidManifest.manifest['uses-permission'] = [];
    }

    usesPermissions.forEach((newPermission) => {
      const exists = androidManifest.manifest['uses-permission']?.some(
        (existing: any) => existing.$?.['android:name'] === newPermission.$['android:name']
      );

      if (!exists) {
        androidManifest.manifest['uses-permission']?.push(newPermission);
      }
    });

    return config;
  });
};

export default createRunOncePlugin(withWifiAware, 'withWifiAware');
