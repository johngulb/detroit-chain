import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PublicKey } from "../crypto/keys";
export declare const protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlockID the signature is for */
export declare enum BlockIDFlag {
    /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
    BLOCK_ID_FLAG_UNKNOWN = 0,
    /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
    BLOCK_ID_FLAG_ABSENT = 1,
    /** BLOCK_ID_FLAG_COMMIT - voted for the block that received the majority */
    BLOCK_ID_FLAG_COMMIT = 2,
    /** BLOCK_ID_FLAG_NIL - voted for nil */
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator | undefined;
    totalVotingPower: number;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey | undefined;
    votingPower: number;
    proposerPriority: number;
}
export interface SimpleValidator {
    pubKey: PublicKey | undefined;
    votingPower: number;
}
export declare const ValidatorSet: MessageFns<ValidatorSet>;
export declare const Validator: MessageFns<Validator>;
export declare const SimpleValidator: MessageFns<SimpleValidator>;
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
