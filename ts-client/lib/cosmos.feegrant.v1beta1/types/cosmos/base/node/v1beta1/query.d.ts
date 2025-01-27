import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimumGasPrice: string;
    pruningKeepRecent: string;
    pruningInterval: string;
    haltHeight: number;
}
/** StateRequest defines the request structure for the status of a node. */
export interface StatusRequest {
}
/** StateResponse defines the response structure for the status of a node. */
export interface StatusResponse {
    /** earliest block height available in the store */
    earliestStoreHeight: number;
    /** current block height */
    height: number;
    /** block height timestamp */
    timestamp: Date | undefined;
    /** app hash of the current block */
    appHash: Uint8Array;
    /** validator hash provided by the consensus header */
    validatorHash: Uint8Array;
}
export declare const ConfigRequest: MessageFns<ConfigRequest>;
export declare const ConfigResponse: MessageFns<ConfigResponse>;
export declare const StatusRequest: MessageFns<StatusRequest>;
export declare const StatusResponse: MessageFns<StatusResponse>;
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
    /** Config queries for the operator configuration. */
    Config(request: ConfigRequest): Promise<ConfigResponse>;
    /** Status queries for the node status. */
    Status(request: StatusRequest): Promise<StatusResponse>;
}
export declare const ServiceServiceName = "cosmos.base.node.v1beta1.Service";
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Config(request: ConfigRequest): Promise<ConfigResponse>;
    Status(request: StatusRequest): Promise<StatusResponse>;
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
