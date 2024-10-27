// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/reflection/v1/reflection.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FileDescriptorProto } from "../../../google/protobuf/descriptor";
export const protobufPackage = "cosmos.reflection.v1";
function createBaseFileDescriptorsRequest() {
    return {};
}
export const FileDescriptorsRequest = {
    encode(_, writer = new BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsRequest();
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
        return FileDescriptorsRequest.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
};
function createBaseFileDescriptorsResponse() {
    return { files: [] };
}
export const FileDescriptorsResponse = {
    encode(message, writer = new BinaryWriter()) {
        for (const v of message.files) {
            FileDescriptorProto.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.files.push(FileDescriptorProto.decode(reader, reader.uint32()));
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
            files: globalThis.Array.isArray(object?.files)
                ? object.files.map((e) => FileDescriptorProto.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.files?.length) {
            obj.files = message.files.map((e) => FileDescriptorProto.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return FileDescriptorsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorsResponse();
        message.files = object.files?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
        return message;
    },
};
export const ReflectionServiceServiceName = "cosmos.reflection.v1.ReflectionService";
export class ReflectionServiceClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || ReflectionServiceServiceName;
        this.rpc = rpc;
        this.FileDescriptors = this.FileDescriptors.bind(this);
    }
    FileDescriptors(request) {
        const data = FileDescriptorsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "FileDescriptors", data);
        return promise.then((data) => FileDescriptorsResponse.decode(new BinaryReader(data)));
    }
}
