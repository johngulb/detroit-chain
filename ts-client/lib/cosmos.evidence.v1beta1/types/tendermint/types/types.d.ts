import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { BlockIDFlag, ValidatorSet } from "./validator";
export declare const protobufPackage = "tendermint.types";
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof | undefined;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader | undefined;
}
/** Header defines the structure of a block header. */
export interface Header {
    /** basic block info */
    version: Consensus | undefined;
    chainId: string;
    height: number;
    time: Date | undefined;
    /** prev block info */
    lastBlockId: BlockID | undefined;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    /** transactions */
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    /** root hash of all results from the txs from the previous block */
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: number;
    round: number;
    /** zero if vote is nil. */
    blockId: BlockID | undefined;
    timestamp: Date | undefined;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    /**
     * Vote signature by the validator if they participated in consensus for the
     * associated block.
     */
    signature: Uint8Array;
    /**
     * Vote extension provided by the application. Only valid for precommit
     * messages.
     */
    extension: Uint8Array;
    /**
     * Vote extension signature by the validator if they participated in
     * consensus for the associated block.
     * Only valid for precommit messages.
     */
    extensionSignature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: number;
    round: number;
    blockId: BlockID | undefined;
    signatures: CommitSig[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface ExtendedCommit {
    height: number;
    round: number;
    blockId: BlockID | undefined;
    extendedSignatures: ExtendedCommitSig[];
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date | undefined;
    signature: Uint8Array;
    /** Vote extension data */
    extension: Uint8Array;
    /** Vote extension signature */
    extensionSignature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: number;
    round: number;
    polRound: number;
    blockId: BlockID | undefined;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface SignedHeader {
    header: Header | undefined;
    commit: Commit | undefined;
}
export interface LightBlock {
    signedHeader: SignedHeader | undefined;
    validatorSet: ValidatorSet | undefined;
}
export interface BlockMeta {
    blockId: BlockID | undefined;
    blockSize: number;
    header: Header | undefined;
    numTxs: number;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof: Proof | undefined;
}
export declare const PartSetHeader: MessageFns<PartSetHeader>;
export declare const Part: MessageFns<Part>;
export declare const BlockID: MessageFns<BlockID>;
export declare const Header: MessageFns<Header>;
export declare const Data: MessageFns<Data>;
export declare const Vote: MessageFns<Vote>;
export declare const Commit: MessageFns<Commit>;
export declare const CommitSig: MessageFns<CommitSig>;
export declare const ExtendedCommit: MessageFns<ExtendedCommit>;
export declare const ExtendedCommitSig: MessageFns<ExtendedCommitSig>;
export declare const Proposal: MessageFns<Proposal>;
export declare const SignedHeader: MessageFns<SignedHeader>;
export declare const LightBlock: MessageFns<LightBlock>;
export declare const BlockMeta: MessageFns<BlockMeta>;
export declare const TxProof: MessageFns<TxProof>;
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
