import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../google/protobuf/duration";
export declare const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block: BlockParams | undefined;
    evidence: EvidenceParams | undefined;
    validator: ValidatorParams | undefined;
    version: VersionParams | undefined;
    abci: ABCIParams | undefined;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: number;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: number;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: number;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration: Duration | undefined;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: number;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app: number;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: number;
    blockMaxGas: number;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParams {
    /**
     * vote_extensions_enable_height configures the first height during which
     * vote extensions will be enabled. During this specified height, and for all
     * subsequent heights, precommit messages that do not contain valid extension data
     * will be considered invalid. Prior to this height, vote extensions will not
     * be used or accepted by validators on the network.
     *
     * Once enabled, vote extensions will be created by the application in ExtendVote,
     * passed to the application for validation in VerifyVoteExtension and given
     * to the application to use when proposing a block during PrepareProposal.
     */
    voteExtensionsEnableHeight: number;
}
export declare const ConsensusParams: MessageFns<ConsensusParams>;
export declare const BlockParams: MessageFns<BlockParams>;
export declare const EvidenceParams: MessageFns<EvidenceParams>;
export declare const ValidatorParams: MessageFns<ValidatorParams>;
export declare const VersionParams: MessageFns<VersionParams>;
export declare const HashedParams: MessageFns<HashedParams>;
export declare const ABCIParams: MessageFns<ABCIParams>;
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
