import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
    params: Params | undefined;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
    /** cons_address is the address to query signing info of */
    consAddress: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
    /** val_signing_info is the signing info of requested val cons address */
    valSigningInfo: ValidatorSigningInfo | undefined;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
    pagination: PageRequest | undefined;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
    /** info is the signing info of all validators */
    info: ValidatorSigningInfo[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: MessageFns<QueryParamsRequest>;
export declare const QueryParamsResponse: MessageFns<QueryParamsResponse>;
export declare const QuerySigningInfoRequest: MessageFns<QuerySigningInfoRequest>;
export declare const QuerySigningInfoResponse: MessageFns<QuerySigningInfoResponse>;
export declare const QuerySigningInfosRequest: MessageFns<QuerySigningInfosRequest>;
export declare const QuerySigningInfosResponse: MessageFns<QuerySigningInfosResponse>;
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Params queries the parameters of slashing module */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** SigningInfo queries the signing info of given cons address */
    SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    /** SigningInfos queries signing info of all validators */
    SigningInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export declare const QueryServiceName = "cosmos.slashing.v1beta1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    SigningInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
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
