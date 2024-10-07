

export type KangarooConfig = {
  /**
   * App ID. A unique id that will be used by the OS and that defines
   * the storage location of data. Should not contain whitespaces.
   * Typically, this is an id in reverse domain notation, like
   * "org.holochain.kangaroo".
   *
   * Will also be used as the package name in package.json.
   */
  appId: string,
  /**
   * The name of the app as displayed in places such as the Window bar.
   */
  productName: string,
  /**
   * This version will overwrite the version in package.json.
   * **IMPORTANT** Breaking version semver changes here will lead to
   * the app using a new, independent conductor.
   *
   * Examples:
   * 0.0.1 -> 0.0.2: Breaking change;
   * 0.1.0 -> 0.2.0: Breaking change;
   * 0.1.0 -> 0.1.1: *No* breaking change;
   * 0.13.0-alpha.0 -> 0.13.0-beta.0: Breaking change;
   * 0.13.0-alpha.0 -> 0.13.0-alpha.1: *No* breaking change;
   */
  version: string,
  /**
   * Whether or not the app should have the user set up a password.
   */
  usePassword: boolean,
  /**
   * URL of the bootstrap server to use.
   */
  bootstrapUrl?: string,
  /**
   * URL of the signaling server to use
   */
  signalingUrl?: string,
  /**
   * The network seed to use when installing the happ. If not set, the
   * network seed will automatically be generated and be based on the
   * productName and the breaking semver version of your app.
   */
  networkSeed?: string,
  devConfig?: {
    happPath: string,
    uiPort: string,
  } | {
    webhappPath: string
  },
  author?: {
    name?: string,
    url?: string,
    email?: string,
  },
  bins: {
    holochain: VersionAndSha256,
    lair: VersionAndSha256
  }
}


type VersionAndSha256 = {
  version: string,
  sha256: {
    "x86_64-unknown-linux-gnu": string,
    "x86_64-pc-windows-msvc.exe": string,
    "x86_64-apple-darwin": string,
    "aarch64-apple-darwin": string
  }
};