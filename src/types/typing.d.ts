declare module "caido:sdk" {
  import { MaybePromise, FindingsSDK, RequestsSDK } from "caido:common";

  export type DefineAPI<
    API extends Record<string, (...args: any[]) => MaybePromise<any>>,
  > = {
    [K in keyof API]: DefineCallback<API[K]>;
  };

  export type DefineCallback<F> = F extends (
    sdk: SDK,
    ...args: infer A
  ) => infer R
    ? (...args: A) => R
    : "Your callback must respect the format (sdk: SDK, ...args: unknown[]) => MaybePromise<unknown>";

  /**
   * The SDK for the API RPC service.
   */
  export type APISDK = {
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
      callback: (sdk: SDK, ...args: any[]) => MaybePromise<any>,
    ): void;
  };

  /**
   * The SDK object available to all scripts.
   */
  export type SDK = {
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
}
