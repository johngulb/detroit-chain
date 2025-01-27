import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../../google/protobuf/any";
import { Duration } from "../../../../google/protobuf/duration";
import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination";
export declare const protobufPackage = "cosmos.orm.query.v1alpha1";
/** GetRequest is the Query/Get request type. */
export interface GetRequest {
    /** message_name is the fully-qualified message name of the ORM table being queried. */
    messageName: string;
    /**
     * index is the index fields expression used in orm definitions. If it
     * is empty, the table's primary key is assumed. If it is non-empty, it must
     * refer to an unique index.
     */
    index: string;
    /**
     * values are the values of the fields corresponding to the requested index.
     * There must be as many values provided as there are fields in the index and
     * these values must correspond to the index field types.
     */
    values: IndexValue[];
}
/** GetResponse is the Query/Get response type. */
export interface GetResponse {
    /**
     * result is the result of the get query. If no value is found, the gRPC
     * status code NOT_FOUND will be returned.
     */
    result: Any | undefined;
}
/** ListRequest is the Query/List request type. */
export interface ListRequest {
    /** message_name is the fully-qualified message name of the ORM table being queried. */
    messageName: string;
    /**
     * index is the index fields expression used in orm definitions. If it
     * is empty, the table's primary key is assumed.
     */
    index: string;
    /** prefix defines a prefix query. */
    prefix?: ListRequest_Prefix | undefined;
    /** range defines a range query. */
    range?: ListRequest_Range | undefined;
    /** pagination is the pagination request. */
    pagination: PageRequest | undefined;
}
/** Prefix specifies the arguments to a prefix query. */
export interface ListRequest_Prefix {
    /**
     * values specifies the index values for the prefix query.
     * It is valid to special a partial prefix with fewer values than
     * the number of fields in the index.
     */
    values: IndexValue[];
}
/** Range specifies the arguments to a range query. */
export interface ListRequest_Range {
    /**
     * start specifies the starting index values for the range query.
     * It is valid to provide fewer values than the number of fields in the
     * index.
     */
    start: IndexValue[];
    /**
     * end specifies the inclusive ending index values for the range query.
     * It is valid to provide fewer values than the number of fields in the
     * index.
     */
    end: IndexValue[];
}
/** ListResponse is the Query/List response type. */
export interface ListResponse {
    /** results are the results of the query. */
    results: Any[];
    /** pagination is the pagination response. */
    pagination: PageResponse | undefined;
}
/** IndexValue represents the value of a field in an ORM index expression. */
export interface IndexValue {
    /**
     * uint specifies a value for an uint32, fixed32, uint64, or fixed64
     * index field.
     */
    uint?: number | undefined;
    /**
     * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
     * index field.
     */
    int?: number | undefined;
    /** str specifies a value for a string index field. */
    str?: string | undefined;
    /** bytes specifies a value for a bytes index field. */
    bytes?: Uint8Array | undefined;
    /** enum specifies a value for an enum index field. */
    enum?: string | undefined;
    /** bool specifies a value for a bool index field. */
    bool?: boolean | undefined;
    /** timestamp specifies a value for a timestamp index field. */
    timestamp?: Date | undefined;
    /** duration specifies a value for a duration index field. */
    duration?: Duration | undefined;
}
export declare const GetRequest: MessageFns<GetRequest>;
export declare const GetResponse: MessageFns<GetResponse>;
export declare const ListRequest: MessageFns<ListRequest>;
export declare const ListRequest_Prefix: MessageFns<ListRequest_Prefix>;
export declare const ListRequest_Range: MessageFns<ListRequest_Range>;
export declare const ListResponse: MessageFns<ListResponse>;
export declare const IndexValue: MessageFns<IndexValue>;
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
    /** Get queries an ORM table against an unique index. */
    Get(request: GetRequest): Promise<GetResponse>;
    /** List queries an ORM table against an index. */
    List(request: ListRequest): Promise<ListResponse>;
}
export declare const QueryServiceName = "cosmos.orm.query.v1alpha1.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Get(request: GetRequest): Promise<GetResponse>;
    List(request: ListRequest): Promise<ListResponse>;
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
