// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/bank/module/v1/module.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "cosmos.bank.module.v1";
function createBaseModule() {
    return { blockedModuleAccountsOverride: [], authority: "", restrictionsOrder: [] };
}
export const Module = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.blockedModuleAccountsOverride) {
            writer.uint32(10).string(v);
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        for (const v of message.restrictionsOrder) {
            writer.uint32(26).string(v);
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
                    message.blockedModuleAccountsOverride.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authority = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.restrictionsOrder.push(reader.string());
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
            blockedModuleAccountsOverride: globalThis.Array.isArray(object?.blockedModuleAccountsOverride)
                ? object.blockedModuleAccountsOverride.map((e) => globalThis.String(e))
                : [],
            authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
            restrictionsOrder: globalThis.Array.isArray(object?.restrictionsOrder)
                ? object.restrictionsOrder.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.blockedModuleAccountsOverride?.length) {
            obj.blockedModuleAccountsOverride = message.blockedModuleAccountsOverride;
        }
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        if (message.restrictionsOrder?.length) {
            obj.restrictionsOrder = message.restrictionsOrder;
        }
        return obj;
    },
    create(base) {
        return Module.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.blockedModuleAccountsOverride = object.blockedModuleAccountsOverride?.map((e) => e) || [];
        message.authority = object.authority ?? "";
        message.restrictionsOrder = object.restrictionsOrder?.map((e) => e) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
