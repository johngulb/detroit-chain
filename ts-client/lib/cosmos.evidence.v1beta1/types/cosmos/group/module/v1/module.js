// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/group/module/v1/module.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Duration } from "../../../../google/protobuf/duration";
export const protobufPackage = "cosmos.group.module.v1";
function createBaseModule() {
    return { maxExecutionPeriod: undefined, maxMetadataLen: 0 };
}
export const Module = {
    encode(message, writer = new BinaryWriter()) {
        if (message.maxExecutionPeriod !== undefined) {
            Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).join();
        }
        if (message.maxMetadataLen !== 0) {
            writer.uint32(16).uint64(message.maxMetadataLen);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.maxMetadataLen = longToNumber(reader.uint64());
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
            maxExecutionPeriod: isSet(object.maxExecutionPeriod) ? Duration.fromJSON(object.maxExecutionPeriod) : undefined,
            maxMetadataLen: isSet(object.maxMetadataLen) ? globalThis.Number(object.maxMetadataLen) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.maxExecutionPeriod !== undefined) {
            obj.maxExecutionPeriod = Duration.toJSON(message.maxExecutionPeriod);
        }
        if (message.maxMetadataLen !== 0) {
            obj.maxMetadataLen = Math.round(message.maxMetadataLen);
        }
        return obj;
    },
    create(base) {
        return Module.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.maxExecutionPeriod = (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null)
            ? Duration.fromPartial(object.maxExecutionPeriod)
            : undefined;
        message.maxMetadataLen = object.maxMetadataLen ?? 0;
        return message;
    },
};
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
function isSet(value) {
    return value !== null && value !== undefined;
}