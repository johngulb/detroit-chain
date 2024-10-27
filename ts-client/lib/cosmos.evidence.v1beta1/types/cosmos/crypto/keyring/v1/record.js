// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/crypto/keyring/v1/record.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
export const protobufPackage = "cosmos.crypto.keyring.v1";
function createBaseRecord() {
    return { name: "", pubKey: undefined, local: undefined, ledger: undefined, multi: undefined, offline: undefined };
}
export const Record = {
    encode(message, writer = new BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).join();
        }
        if (message.local !== undefined) {
            Record_Local.encode(message.local, writer.uint32(26).fork()).join();
        }
        if (message.ledger !== undefined) {
            Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).join();
        }
        if (message.multi !== undefined) {
            Record_Multi.encode(message.multi, writer.uint32(42).fork()).join();
        }
        if (message.offline !== undefined) {
            Record_Offline.encode(message.offline, writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pubKey = Any.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.local = Record_Local.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.ledger = Record_Ledger.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.multi = Record_Multi.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.offline = Record_Offline.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
            local: isSet(object.local) ? Record_Local.fromJSON(object.local) : undefined,
            ledger: isSet(object.ledger) ? Record_Ledger.fromJSON(object.ledger) : undefined,
            multi: isSet(object.multi) ? Record_Multi.fromJSON(object.multi) : undefined,
            offline: isSet(object.offline) ? Record_Offline.fromJSON(object.offline) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.pubKey !== undefined) {
            obj.pubKey = Any.toJSON(message.pubKey);
        }
        if (message.local !== undefined) {
            obj.local = Record_Local.toJSON(message.local);
        }
        if (message.ledger !== undefined) {
            obj.ledger = Record_Ledger.toJSON(message.ledger);
        }
        if (message.multi !== undefined) {
            obj.multi = Record_Multi.toJSON(message.multi);
        }
        if (message.offline !== undefined) {
            obj.offline = Record_Offline.toJSON(message.offline);
        }
        return obj;
    },
    create(base) {
        return Record.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.name = object.name ?? "";
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? Any.fromPartial(object.pubKey)
            : undefined;
        message.local = (object.local !== undefined && object.local !== null)
            ? Record_Local.fromPartial(object.local)
            : undefined;
        message.ledger = (object.ledger !== undefined && object.ledger !== null)
            ? Record_Ledger.fromPartial(object.ledger)
            : undefined;
        message.multi = (object.multi !== undefined && object.multi !== null)
            ? Record_Multi.fromPartial(object.multi)
            : undefined;
        message.offline = (object.offline !== undefined && object.offline !== null)
            ? Record_Offline.fromPartial(object.offline)
            : undefined;
        return message;
    },
};
function createBaseRecord_Local() {
    return { privKey: undefined };
}
export const Record_Local = {
    encode(message, writer = new BinaryWriter()) {
        if (message.privKey !== undefined) {
            Any.encode(message.privKey, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.privKey = Any.decode(reader, reader.uint32());
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
        return { privKey: isSet(object.privKey) ? Any.fromJSON(object.privKey) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.privKey !== undefined) {
            obj.privKey = Any.toJSON(message.privKey);
        }
        return obj;
    },
    create(base) {
        return Record_Local.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRecord_Local();
        message.privKey = (object.privKey !== undefined && object.privKey !== null)
            ? Any.fromPartial(object.privKey)
            : undefined;
        return message;
    },
};
function createBaseRecord_Ledger() {
    return { path: undefined };
}
export const Record_Ledger = {
    encode(message, writer = new BinaryWriter()) {
        if (message.path !== undefined) {
            BIP44Params.encode(message.path, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.path = BIP44Params.decode(reader, reader.uint32());
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
        return { path: isSet(object.path) ? BIP44Params.fromJSON(object.path) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.path !== undefined) {
            obj.path = BIP44Params.toJSON(message.path);
        }
        return obj;
    },
    create(base) {
        return Record_Ledger.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = (object.path !== undefined && object.path !== null)
            ? BIP44Params.fromPartial(object.path)
            : undefined;
        return message;
    },
};
function createBaseRecord_Multi() {
    return {};
}
export const Record_Multi = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return Record_Multi.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRecord_Multi();
        return message;
    },
};
function createBaseRecord_Offline() {
    return {};
}
export const Record_Offline = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return Record_Offline.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseRecord_Offline();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}