import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was un-jailed */
    startHeight: number;
    /**
     * Index which is incremented every time a validator is bonded in a block and
     * _may_ have signed a pre-commit or not. This in conjunction with the
     * signed_blocks_window param determines the index in the missed block bitmap.
     */
    indexOffset: number;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailedUntil: Date | undefined;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator
     * set). It is set once the validator commits an equivocation or for any other
     * configured misbehavior.
     */
    tombstoned: boolean;
    /**
     * A counter of missed (unsigned) blocks. It is used to avoid unnecessary
     * reads in the missed block bitmap.
     */
    missedBlocksCounter: number;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: number;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration: Duration | undefined;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
export declare const ValidatorSigningInfo: MessageFns<ValidatorSigningInfo>;
export declare const Params: MessageFns<Params>;
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
