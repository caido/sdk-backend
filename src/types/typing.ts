/**
 * The SDK for the API RPC service.
 */
declare type APISDK = {
  /**
   * Registers a new backend function for the RPC.
   *
   * @example
   * sdk.api.register("multiply", (a: number, b: number) => {
   *    return a * b;
   * });
   */
  register(
    name: string,
    callback: (...args: unknown[]) => MaybePromise<unknown>,
  ): void;
};

/**
 * The SDK object available to all scripts.
 */
declare type SDK = {
  /**
   * The console.
   *
   * This is currently the same as the global `console`.
   */
  console: Console;
  /**
   * The SDK for the Findings service.
   */
  findings: FindingsSDK;
  /**
   * The SDK for the Requests services
   */
  requests: RequestsSDK;
  /**
   * The SDK for the API RPC service.
   */
  api: APISDK;
};
