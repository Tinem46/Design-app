export default {
  expo: {
    name: "design-app",
    slug: "design-app",
    version: "1.0.0",
    orientation: "landscape",
    platforms: ["ios", "android", "web"],
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],
    scheme: "myapp",
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      },
      newArchEnabled: true
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
};
