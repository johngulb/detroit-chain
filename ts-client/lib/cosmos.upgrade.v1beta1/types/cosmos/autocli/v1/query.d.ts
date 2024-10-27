import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ModuleOptions } from "./options";
export declare const protobufPackage = "cosmos.autocli.v1";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
    /** module_options is a map of module name to autocli module options. */
    moduleOptions: {
        [key: string]: ModuleOptions;
    };
}
export interface AppOptionsResponse_ModuleOptionsEntry {
    key: string;
    value: ModuleOptions | undefined;
}
export declare const AppOptionsRequest: MessageFns<AppOptionsRequest>;
export declare const AppOptionsResponse: MessageFns<AppOptionsResponse>;
export declare const AppOptionsResponse_ModuleOptionsEntry: MessageFns<AppOptionsResponse_ModuleOptionsEntry>;
/**
 * RemoteInfoService provides clients with the information they need
 * to build dynamically CLI clients for remote chains.
 */
export interface Query {
    /** AppOptions returns the autocli options for all of the modules in an app. */
    AppOptions(request: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export declare const QueryServiceName = "cosmos.autocli.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    AppOptions(request: AppOptionsRequest): Promise<AppOptionsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
