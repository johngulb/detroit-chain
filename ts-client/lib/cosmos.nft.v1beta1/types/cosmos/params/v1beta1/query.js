// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/params/v1beta1/query.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ParamChange } from "./params";
export const protobufPackage = "cosmos.params.v1beta1";
function createBaseQueryParamsRequest() {
    return { subspace: "", key: "" };
}
export const QueryParamsRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subspace = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.key = reader.string();
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
            subspace: isSet(object.subspace) ? globalThis.String(object.subspace) : "",
            key: isSet(object.key) ? globalThis.String(object.key) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subspace !== "") {
            obj.subspace = message.subspace;
        }
        if (message.key !== "") {
            obj.key = message.key;
        }
        return obj;
    },
    create(base) {
        return QueryParamsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { param: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.param !== undefined) {
            ParamChange.encode(message.param, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.param = ParamChange.decode(reader, reader.uint32());
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
        return { param: isSet(object.param) ? ParamChange.fromJSON(object.param) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.param !== undefined) {
            obj.param = ParamChange.toJSON(message.param);
        }
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.param = (object.param !== undefined && object.param !== null)
            ? ParamChange.fromPartial(object.param)
            : undefined;
        return message;
    },
};
function createBaseQuerySubspacesRequest() {
    return {};
}
export const QuerySubspacesRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesRequest();
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
        return QuerySubspacesRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQuerySubspacesRequest();
        return message;
    },
};
function createBaseQuerySubspacesResponse() {
    return { subspaces: [] };
}
export const QuerySubspacesResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.subspaces) {
            Subspace.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subspaces.push(Subspace.decode(reader, reader.uint32()));
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
            subspaces: globalThis.Array.isArray(object?.subspaces)
                ? object.subspaces.map((e) => Subspace.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subspaces?.length) {
            obj.subspaces = message.subspaces.map((e) => Subspace.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return QuerySubspacesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map((e) => Subspace.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSubspace() {
    return { subspace: "", keys: [] };
}
export const Subspace = {
    encode(message, writer = new BinaryWriter()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubspace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.subspace = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.keys.push(reader.string());
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
            subspace: isSet(object.subspace) ? globalThis.String(object.subspace) : "",
            keys: globalThis.Array.isArray(object?.keys) ? object.keys.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subspace !== "") {
            obj.subspace = message.subspace;
        }
        if (message.keys?.length) {
            obj.keys = message.keys;
        }
        return obj;
    },
    create(base) {
        return Subspace.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubspace();
        message.subspace = object.subspace ?? "";
        message.keys = object.keys?.map((e) => e) || [];
        return message;
    },
};
export const QueryServiceName = "cosmos.params.v1beta1.Query";
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Subspaces = this.Subspaces.bind(this);
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    Subspaces(request) {
        const data = QuerySubspacesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Subspaces", data);
        return promise.then((data) => QuerySubspacesResponse.decode(new BinaryReader(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
