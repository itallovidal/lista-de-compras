const { withAppBuildGradle, withMainApplication, createRunOncePlugin } = require('@expo/config-plugins');

const withProximityModule = (config) => {
  return withMainApplication(config, (config) => {
    const { modResults } = config;
    const isKotlin = modResults.language === 'kotlin';

    const importStatement = isKotlin
      ? 'import com.ividalll.listacompras.proximity.ProximityPackage'
      : 'import com.ividalll.listacompras.proximity.ProximityPackage;';

    const packageRegistration = isKotlin ? 'ProximityPackage()' : 'new ProximityPackage()';

    if (!modResults.contents.includes(importStatement)) {
      modResults.contents = modResults.contents.replace(
        /^package\s+.*$/m,
        `$&\n\n${importStatement}`
      );
    }

    if (!modResults.contents.includes('ProximityPackage')) {
      modResults.contents = modResults.contents.replace(
        /return\s+listOf\(([^)]*)\)/,
        (match, existing) => {
          if (existing.includes('ProximityPackage')) return match;
          return `return listOf(${existing.trim()}, ${packageRegistration})`;
        }
      );
    }

    return config;
  });
};

const withProximityPermissions = (config) => {
  return withAppBuildGradle(config, (config) => {
    const buildGradle = config.modResults.contents;

    if (!buildGradle.includes('WifiAware')) {
      config.modResults.contents = buildGradle.replace(
        /dependencies\s*{/,
        `dependencies {\n    // Wi-Fi Aware requires Android 8.0+ (API 26+)\n    // No additional dependencies needed, uses Android SDK`
      );
    }

    return config;
  });
};

module.exports = createRunOncePlugin(
  (config) => {
    let result = config;
    result = withProximityModule(result);
    result = withProximityPermissions(result);
    return result;
  },
  'withProximityModule'
);
