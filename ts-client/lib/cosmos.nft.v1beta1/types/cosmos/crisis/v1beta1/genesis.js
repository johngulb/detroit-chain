// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/crisis/v1beta1/genesis.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../base/v1beta1/coin";
export const protobufPackage = "cosmos.crisis.v1beta1";
function createBaseGenesisState() {
    return { constantFee: undefined };
}
export const GenesisState = {
    encode(message, writer = new BinaryWriter()) {
        if (message.constantFee !== undefined) {
            Coin.encode(message.constantFee, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.constantFee = Coin.decode(reader, reader.uint32());
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
        return { constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.constantFee !== undefined) {
            obj.constantFee = Coin.toJSON(message.constantFee);
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.constantFee = (object.constantFee !== undefined && object.constantFee !== null)
            ? Coin.fromPartial(object.constantFee)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
