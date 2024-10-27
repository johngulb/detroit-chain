import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmos.bank.module.v1";
/** Module is the config object of the bank module. */
export interface Module {
    /**
     * blocked_module_accounts_override configures exceptional module accounts which should be blocked from receiving
     * funds. If left empty it defaults to the list of account names supplied in the auth module configuration as
     * module_account_permissions
     */
    blockedModuleAccountsOverride: string[];
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
    /**
     * restrictions_order specifies the order of send restrictions and should be
     * a list of module names which provide a send restriction instance. If no
     * order is provided, then restrictions will be applied in alphabetical order
     * of module names.
     */
    restrictionsOrder: string[];
}
export declare const Module: MessageFns<Module>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
