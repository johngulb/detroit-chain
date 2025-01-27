import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { RequestFinalizeBlock, ResponseCommit, ResponseFinalizeBlock } from "../../../../tendermint/abci/types";
import { StoreKVPair } from "../../v1beta1/listening";
export declare const protobufPackage = "cosmos.store.streaming.abci";
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
    req: RequestFinalizeBlock | undefined;
    res: ResponseFinalizeBlock | undefined;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
    /** explicitly pass in block height as ResponseCommit does not contain this info */
    blockHeight: number;
    res: ResponseCommit | undefined;
    changeSet: StoreKVPair[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {
}
export declare const ListenFinalizeBlockRequest: MessageFns<ListenFinalizeBlockRequest>;
export declare const ListenFinalizeBlockResponse: MessageFns<ListenFinalizeBlockResponse>;
export declare const ListenCommitRequest: MessageFns<ListenCommitRequest>;
export declare const ListenCommitResponse: MessageFns<ListenCommitResponse>;
/** ABCIListenerService is the service for the BaseApp ABCIListener interface */
export interface ABCIListenerService {
    /** ListenFinalizeBlock is the corresponding endpoint for ABCIListener.ListenEndBlock */
    ListenFinalizeBlock(request: ListenFinalizeBlockRequest): Promise<ListenFinalizeBlockResponse>;
    /** ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit */
    ListenCommit(request: ListenCommitRequest): Promise<ListenCommitResponse>;
}
export declare const ABCIListenerServiceServiceName = "cosmos.store.streaming.abci.ABCIListenerService";
export declare class ABCIListenerServiceClientImpl implements ABCIListenerService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    ListenFinalizeBlock(request: ListenFinalizeBlockRequest): Promise<ListenFinalizeBlockResponse>;
    ListenCommit(request: ListenCommitRequest): Promise<ListenCommitResponse>;
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
