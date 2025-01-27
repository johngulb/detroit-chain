import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmos.auth.module.v1";
/** Module is the config object for the auth module. */
export interface Module {
    /** bech32_prefix is the bech32 account prefix for the app. */
    bech32Prefix: string;
    /** module_account_permissions are module account permissions. */
    moduleAccountPermissions: ModuleAccountPermission[];
    /** authority defines the custom module authority. If not set, defaults to the governance module. */
    authority: string;
}
/** ModuleAccountPermission represents permissions for a module account. */
export interface ModuleAccountPermission {
    /** account is the name of the module. */
    account: string;
    /**
     * permissions are the permissions this module has. Currently recognized
     * values are minter, burner and staking.
     */
    permissions: string[];
}
export declare const Module: MessageFns<Module>;
export declare const ModuleAccountPermission: MessageFns<ModuleAccountPermission>;
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
