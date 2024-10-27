// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/orm/v1/orm.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "cosmos.orm.v1";
function createBaseTableDescriptor() {
    return { primaryKey: undefined, index: [], id: 0 };
}
export const TableDescriptor = {
    encode(message, writer = new BinaryWriter()) {
        if (message.primaryKey !== undefined) {
            PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).join();
        }
        for (const v of message.index) {
            SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).join();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.id = reader.uint32();
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
            primaryKey: isSet(object.primaryKey) ? PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
            index: globalThis.Array.isArray(object?.index)
                ? object.index.map((e) => SecondaryIndexDescriptor.fromJSON(e))
                : [],
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.primaryKey !== undefined) {
            obj.primaryKey = PrimaryKeyDescriptor.toJSON(message.primaryKey);
        }
        if (message.index?.length) {
            obj.index = message.index.map((e) => SecondaryIndexDescriptor.toJSON(e));
        }
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        return obj;
    },
    create(base) {
        return TableDescriptor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTableDescriptor();
        message.primaryKey = (object.primaryKey !== undefined && object.primaryKey !== null)
            ? PrimaryKeyDescriptor.fromPartial(object.primaryKey)
            : undefined;
        message.index = object.index?.map((e) => SecondaryIndexDescriptor.fromPartial(e)) || [];
        message.id = object.id ?? 0;
        return message;
    },
};
function createBasePrimaryKeyDescriptor() {
    return { fields: "", autoIncrement: false };
}
export const PrimaryKeyDescriptor = {
    encode(message, writer = new BinaryWriter()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement !== false) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fields = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.autoIncrement = reader.bool();
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
            fields: isSet(object.fields) ? globalThis.String(object.fields) : "",
            autoIncrement: isSet(object.autoIncrement) ? globalThis.Boolean(object.autoIncrement) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields !== "") {
            obj.fields = message.fields;
        }
        if (message.autoIncrement !== false) {
            obj.autoIncrement = message.autoIncrement;
        }
        return obj;
    },
    create(base) {
        return PrimaryKeyDescriptor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePrimaryKeyDescriptor();
        message.fields = object.fields ?? "";
        message.autoIncrement = object.autoIncrement ?? false;
        return message;
    },
};
function createBaseSecondaryIndexDescriptor() {
    return { fields: "", id: 0, unique: false };
}
export const SecondaryIndexDescriptor = {
    encode(message, writer = new BinaryWriter()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique !== false) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.fields = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.id = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.unique = reader.bool();
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
            fields: isSet(object.fields) ? globalThis.String(object.fields) : "",
            id: isSet(object.id) ? globalThis.Number(object.id) : 0,
            unique: isSet(object.unique) ? globalThis.Boolean(object.unique) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields !== "") {
            obj.fields = message.fields;
        }
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        if (message.unique !== false) {
            obj.unique = message.unique;
        }
        return obj;
    },
    create(base) {
        return SecondaryIndexDescriptor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSecondaryIndexDescriptor();
        message.fields = object.fields ?? "";
        message.id = object.id ?? 0;
        message.unique = object.unique ?? false;
        return message;
    },
};
function createBaseSingletonDescriptor() {
    return { id: 0 };
}
export const SingletonDescriptor = {
    encode(message, writer = new BinaryWriter()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.id = reader.uint32();
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
        return { id: isSet(object.id) ? globalThis.Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== 0) {
            obj.id = Math.round(message.id);
        }
        return obj;
    },
    create(base) {
        return SingletonDescriptor.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSingletonDescriptor();
        message.id = object.id ?? 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
