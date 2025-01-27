// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/crypto/hd/v1/hd.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "cosmos.crypto.hd.v1";
function createBaseBIP44Params() {
    return { purpose: 0, coinType: 0, account: 0, change: false, addressIndex: 0 };
}
export const BIP44Params = {
    encode(message, writer = new BinaryWriter()) {
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coinType !== 0) {
            writer.uint32(16).uint32(message.coinType);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change !== false) {
            writer.uint32(32).bool(message.change);
        }
        if (message.addressIndex !== 0) {
            writer.uint32(40).uint32(message.addressIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBIP44Params();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.purpose = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.coinType = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.account = reader.uint32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.change = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.addressIndex = reader.uint32();
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
            purpose: isSet(object.purpose) ? globalThis.Number(object.purpose) : 0,
            coinType: isSet(object.coinType) ? globalThis.Number(object.coinType) : 0,
            account: isSet(object.account) ? globalThis.Number(object.account) : 0,
            change: isSet(object.change) ? globalThis.Boolean(object.change) : false,
            addressIndex: isSet(object.addressIndex) ? globalThis.Number(object.addressIndex) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.purpose !== 0) {
            obj.purpose = Math.round(message.purpose);
        }
        if (message.coinType !== 0) {
            obj.coinType = Math.round(message.coinType);
        }
        if (message.account !== 0) {
            obj.account = Math.round(message.account);
        }
        if (message.change !== false) {
            obj.change = message.change;
        }
        if (message.addressIndex !== 0) {
            obj.addressIndex = Math.round(message.addressIndex);
        }
        return obj;
    },
    create(base) {
        return BIP44Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseBIP44Params();
        message.purpose = object.purpose ?? 0;
        message.coinType = object.coinType ?? 0;
        message.account = object.account ?? 0;
        message.change = object.change ?? false;
        message.addressIndex = object.addressIndex ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
