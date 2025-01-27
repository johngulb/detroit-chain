// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/store/v1beta1/listening.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { RequestFinalizeBlock, ResponseCommit, ResponseFinalizeBlock } from "../../../tendermint/abci/types";
export const protobufPackage = "cosmos.store.v1beta1";
function createBaseStoreKVPair() {
    return { storeKey: "", delete: false, key: new Uint8Array(0), value: new Uint8Array(0) };
}
export const StoreKVPair = {
    encode(message, writer = new BinaryWriter()) {
        if (message.storeKey !== "") {
            writer.uint32(10).string(message.storeKey);
        }
        if (message.delete !== false) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.storeKey = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.delete = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.key = reader.bytes();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.value = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            storeKey: isSet(object.storeKey) ? globalThis.String(object.storeKey) : "",
            delete: isSet(object.delete) ? globalThis.Boolean(object.delete) : false,
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.storeKey !== "") {
            obj.storeKey = message.storeKey;
        }
        if (message.delete !== false) {
            obj.delete = message.delete;
        }
        if (message.key.length !== 0) {
            obj.key = base64FromBytes(message.key);
        }
        if (message.value.length !== 0) {
            obj.value = base64FromBytes(message.value);
        }
        return obj;
    },
    create(base) {
        return StoreKVPair.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStoreKVPair();
        message.storeKey = object.storeKey ?? "";
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array(0);
        message.value = object.value ?? new Uint8Array(0);
        return message;
    },
};
function createBaseBlockMetadata() {
    return { responseCommit: undefined, requestFinalizeBlock: undefined, responseFinalizeBlock: undefined };
}
export const BlockMetadata = {
    encode(message, writer = new BinaryWriter()) {
        if (message.responseCommit !== undefined) {
            ResponseCommit.encode(message.responseCommit, writer.uint32(50).fork()).join();
        }
        if (message.requestFinalizeBlock !== undefined) {
            RequestFinalizeBlock.encode(message.requestFinalizeBlock, writer.uint32(58).fork()).join();
        }
        if (message.responseFinalizeBlock !== undefined) {
            ResponseFinalizeBlock.encode(message.responseFinalizeBlock, writer.uint32(66).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.responseCommit = ResponseCommit.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.requestFinalizeBlock = RequestFinalizeBlock.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.responseFinalizeBlock = ResponseFinalizeBlock.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            responseCommit: isSet(object.responseCommit) ? ResponseCommit.fromJSON(object.responseCommit) : undefined,
            requestFinalizeBlock: isSet(object.requestFinalizeBlock)
                ? RequestFinalizeBlock.fromJSON(object.requestFinalizeBlock)
                : undefined,
            responseFinalizeBlock: isSet(object.responseFinalizeBlock)
                ? ResponseFinalizeBlock.fromJSON(object.responseFinalizeBlock)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.responseCommit !== undefined) {
            obj.responseCommit = ResponseCommit.toJSON(message.responseCommit);
        }
        if (message.requestFinalizeBlock !== undefined) {
            obj.requestFinalizeBlock = RequestFinalizeBlock.toJSON(message.requestFinalizeBlock);
        }
        if (message.responseFinalizeBlock !== undefined) {
            obj.responseFinalizeBlock = ResponseFinalizeBlock.toJSON(message.responseFinalizeBlock);
        }
        return obj;
    },
    create(base) {
        return BlockMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBlockMetadata();
        message.responseCommit = (object.responseCommit !== undefined && object.responseCommit !== null)
            ? ResponseCommit.fromPartial(object.responseCommit)
            : undefined;
        message.requestFinalizeBlock = (object.requestFinalizeBlock !== undefined && object.requestFinalizeBlock !== null)
            ? RequestFinalizeBlock.fromPartial(object.requestFinalizeBlock)
            : undefined;
        message.responseFinalizeBlock =
            (object.responseFinalizeBlock !== undefined && object.responseFinalizeBlock !== null)
                ? ResponseFinalizeBlock.fromPartial(object.responseFinalizeBlock)
                : undefined;
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
