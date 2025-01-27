import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
export declare const protobufPackage = "cosmos.crypto.keyring.v1";
/** Since: cosmos-sdk 0.46 */
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey: Any | undefined;
    /** local stores the private key locally. */
    local?: Record_Local | undefined;
    /** ledger stores the information about a Ledger key. */
    ledger?: Record_Ledger | undefined;
    /** Multi does not store any other information. */
    multi?: Record_Multi | undefined;
    /** Offline does not store any other information. */
    offline?: Record_Offline | undefined;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey: Any | undefined;
}
/** Ledger item */
export interface Record_Ledger {
    path: BIP44Params | undefined;
}
/** Multi item */
export interface Record_Multi {
}
/** Offline item */
export interface Record_Offline {
}
export declare const Record: MessageFns<Record>;
export declare const Record_Local: MessageFns<Record_Local>;
export declare const Record_Ledger: MessageFns<Record_Ledger>;
export declare const Record_Multi: MessageFns<Record_Multi>;
export declare const Record_Offline: MessageFns<Record_Offline>;
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
