// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/base/reflection/v1beta1/reflection.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export const protobufPackage = "cosmos.base.reflection.v1beta1";
function createBaseListAllInterfacesRequest() {
    return {};
}
export const ListAllInterfacesRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesRequest();
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
        return ListAllInterfacesRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseListAllInterfacesRequest();
        return message;
    },
};
function createBaseListAllInterfacesResponse() {
    return { interfaceNames: [] };
}
export const ListAllInterfacesResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.interfaceNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.interfaceNames.push(reader.string());
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
            interfaceNames: globalThis.Array.isArray(object?.interfaceNames)
                ? object.interfaceNames.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaceNames?.length) {
            obj.interfaceNames = message.interfaceNames;
        }
        return obj;
    },
    create(base) {
        return ListAllInterfacesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = object.interfaceNames?.map((e) => e) || [];
        return message;
    },
};
function createBaseListImplementationsRequest() {
    return { interfaceName: "" };
}
export const ListImplementationsRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.interfaceName = reader.string();
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
        return { interfaceName: isSet(object.interfaceName) ? globalThis.String(object.interfaceName) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaceName !== "") {
            obj.interfaceName = message.interfaceName;
        }
        return obj;
    },
    create(base) {
        return ListImplementationsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListImplementationsRequest();
        message.interfaceName = object.interfaceName ?? "";
        return message;
    },
};
function createBaseListImplementationsResponse() {
    return { implementationMessageNames: [] };
}
export const ListImplementationsResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.implementationMessageNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.implementationMessageNames.push(reader.string());
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
            implementationMessageNames: globalThis.Array.isArray(object?.implementationMessageNames)
                ? object.implementationMessageNames.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.implementationMessageNames?.length) {
            obj.implementationMessageNames = message.implementationMessageNames;
        }
        return obj;
    },
    create(base) {
        return ListImplementationsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = object.implementationMessageNames?.map((e) => e) || [];
        return message;
    },
};
export const ReflectionServiceServiceName = "cosmos.base.reflection.v1beta1.ReflectionService";
export class ReflectionServiceClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || ReflectionServiceServiceName;
        this.rpc = rpc;
        this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
        this.ListImplementations = this.ListImplementations.bind(this);
    }
    ListAllInterfaces(request) {
        const data = ListAllInterfacesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ListAllInterfaces", data);
        return promise.then((data) => ListAllInterfacesResponse.decode(new BinaryReader(data)));
    }
    ListImplementations(request) {
        const data = ListImplementationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ListImplementations", data);
        return promise.then((data) => ListImplementationsResponse.decode(new BinaryReader(data)));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
