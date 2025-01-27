import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GenesisAccountPermissions, Permissions } from "./types";
export declare const protobufPackage = "cosmos.circuit.v1";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    address: string;
}
/** AccountResponse is the response type for the Query/Account RPC method. */
export interface AccountResponse {
    permission: Permissions | undefined;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */
export interface AccountsResponse {
    accounts: GenesisAccountPermissions[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */
export interface QueryDisabledListRequest {
}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */
export interface DisabledListResponse {
    disabledList: string[];
}
export declare const QueryAccountRequest: MessageFns<QueryAccountRequest>;
export declare const AccountResponse: MessageFns<AccountResponse>;
export declare const QueryAccountsRequest: MessageFns<QueryAccountsRequest>;
export declare const AccountsResponse: MessageFns<AccountsResponse>;
export declare const QueryDisabledListRequest: MessageFns<QueryDisabledListRequest>;
export declare const DisabledListResponse: MessageFns<DisabledListResponse>;
/** Query defines the circuit gRPC querier service. */
export interface Query {
    /** Account returns account permissions. */
    Account(request: QueryAccountRequest): Promise<AccountResponse>;
    /** Account returns account permissions. */
    Accounts(request: QueryAccountsRequest): Promise<AccountsResponse>;
    /** DisabledList returns a list of disabled message urls */
    DisabledList(request: QueryDisabledListRequest): Promise<DisabledListResponse>;
}
export declare const QueryServiceName = "cosmos.circuit.v1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Account(request: QueryAccountRequest): Promise<AccountResponse>;
    Accounts(request: QueryAccountsRequest): Promise<AccountsResponse>;
    DisabledList(request: QueryDisabledListRequest): Promise<DisabledListResponse>;
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
