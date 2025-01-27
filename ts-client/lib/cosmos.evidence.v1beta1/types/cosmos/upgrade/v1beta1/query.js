// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/upgrade/v1beta1/query.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ModuleVersion, Plan } from "./upgrade";
export const protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseQueryCurrentPlanRequest() {
    return {};
}
export const QueryCurrentPlanRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        return QueryCurrentPlanRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
};
function createBaseQueryCurrentPlanResponse() {
    return { plan: undefined };
}
export const QueryCurrentPlanResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.plan = Plan.decode(reader, reader.uint32());
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
        return { plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.plan !== undefined) {
            obj.plan = Plan.toJSON(message.plan);
        }
        return obj;
    },
    create(base) {
        return QueryCurrentPlanResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
        return message;
    },
};
function createBaseQueryAppliedPlanRequest() {
    return { name: "" };
}
export const QueryAppliedPlanRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
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
        return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        return obj;
    },
    create(base) {
        return QueryAppliedPlanRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQueryAppliedPlanResponse() {
    return { height: 0 };
}
export const QueryAppliedPlanResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.height !== 0) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.height = longToNumber(reader.int64());
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
        return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.height !== 0) {
            obj.height = Math.round(message.height);
        }
        return obj;
    },
    create(base) {
        return QueryAppliedPlanResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAppliedPlanResponse();
        message.height = object.height ?? 0;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return { lastHeight: 0 };
}
export const QueryUpgradedConsensusStateRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.lastHeight !== 0) {
            writer.uint32(8).int64(message.lastHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.lastHeight = longToNumber(reader.int64());
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
        return { lastHeight: isSet(object.lastHeight) ? globalThis.Number(object.lastHeight) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.lastHeight !== 0) {
            obj.lastHeight = Math.round(message.lastHeight);
        }
        return obj;
    },
    create(base) {
        return QueryUpgradedConsensusStateRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.lastHeight = object.lastHeight ?? 0;
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return { upgradedConsensusState: new Uint8Array(0) };
}
export const QueryUpgradedConsensusStateResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.upgradedConsensusState.length !== 0) {
            writer.uint32(18).bytes(message.upgradedConsensusState);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.upgradedConsensusState = reader.bytes();
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
            upgradedConsensusState: isSet(object.upgradedConsensusState)
                ? bytesFromBase64(object.upgradedConsensusState)
                : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.upgradedConsensusState.length !== 0) {
            obj.upgradedConsensusState = base64FromBytes(message.upgradedConsensusState);
        }
        return obj;
    },
    create(base) {
        return QueryUpgradedConsensusStateResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array(0);
        return message;
    },
};
function createBaseQueryModuleVersionsRequest() {
    return { moduleName: "" };
}
export const QueryModuleVersionsRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleName = reader.string();
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
        return { moduleName: isSet(object.moduleName) ? globalThis.String(object.moduleName) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleName !== "") {
            obj.moduleName = message.moduleName;
        }
        return obj;
    },
    create(base) {
        return QueryModuleVersionsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsRequest();
        message.moduleName = object.moduleName ?? "";
        return message;
    },
};
function createBaseQueryModuleVersionsResponse() {
    return { moduleVersions: [] };
}
export const QueryModuleVersionsResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.moduleVersions) {
            ModuleVersion.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
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
            moduleVersions: globalThis.Array.isArray(object?.moduleVersions)
                ? object.moduleVersions.map((e) => ModuleVersion.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleVersions?.length) {
            obj.moduleVersions = message.moduleVersions.map((e) => ModuleVersion.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return QueryModuleVersionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryModuleVersionsResponse();
        message.moduleVersions = object.moduleVersions?.map((e) => ModuleVersion.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryAuthorityRequest() {
    return {};
}
export const QueryAuthorityRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityRequest();
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
        return QueryAuthorityRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseQueryAuthorityRequest();
        return message;
    },
};
function createBaseQueryAuthorityResponse() {
    return { address: "" };
}
export const QueryAuthorityResponse = {
    encode(message, writer = new BinaryWriter()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuthorityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
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
        return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.address !== "") {
            obj.address = message.address;
        }
        return obj;
    },
    create(base) {
        return QueryAuthorityResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAuthorityResponse();
        message.address = object.address ?? "";
        return message;
    },
};
export const QueryServiceName = "cosmos.upgrade.v1beta1.Query";
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.CurrentPlan = this.CurrentPlan.bind(this);
        this.AppliedPlan = this.AppliedPlan.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
        this.ModuleVersions = this.ModuleVersions.bind(this);
        this.Authority = this.Authority.bind(this);
    }
    CurrentPlan(request) {
        const data = QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CurrentPlan", data);
        return promise.then((data) => QueryCurrentPlanResponse.decode(new BinaryReader(data)));
    }
    AppliedPlan(request) {
        const data = QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AppliedPlan", data);
        return promise.then((data) => QueryAppliedPlanResponse.decode(new BinaryReader(data)));
    }
    UpgradedConsensusState(request) {
        const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpgradedConsensusState", data);
        return promise.then((data) => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
    }
    ModuleVersions(request) {
        const data = QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ModuleVersions", data);
        return promise.then((data) => QueryModuleVersionsResponse.decode(new BinaryReader(data)));
    }
    Authority(request) {
        const data = QueryAuthorityRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Authority", data);
        return promise.then((data) => QueryAuthorityResponse.decode(new BinaryReader(data)));
    }
}
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
