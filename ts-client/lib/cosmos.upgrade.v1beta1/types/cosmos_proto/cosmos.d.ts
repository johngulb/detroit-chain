import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmos_proto";
export declare enum ScalarType {
    SCALAR_TYPE_UNSPECIFIED = 0,
    SCALAR_TYPE_STRING = 1,
    SCALAR_TYPE_BYTES = 2,
    UNRECOGNIZED = -1
}
export declare function scalarTypeFromJSON(object: any): ScalarType;
export declare function scalarTypeToJSON(object: ScalarType): string;
/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 */
export interface InterfaceDescriptor {
    /**
     * name is the name of the interface. It should be a short-name (without
     * a period) such that the fully qualified name of the interface will be
     * package.name, ex. for the package a.b and interface named C, the
     * fully-qualified name will be a.b.C.
     */
    name: string;
    /**
     * description is a human-readable description of the interface and its
     * purpose.
     */
    description: string;
}
/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 */
export interface ScalarDescriptor {
    /**
     * name is the name of the scalar. It should be a short-name (without
     * a period) such that the fully qualified name of the scalar will be
     * package.name, ex. for the package a.b and scalar named C, the
     * fully-qualified name will be a.b.C.
     */
    name: string;
    /**
     * description is a human-readable description of the scalar and its
     * encoding format. For instance a big integer or decimal scalar should
     * specify precisely the expected encoding format.
     */
    description: string;
    /**
     * field_type is the type of field with which this scalar can be used.
     * Scalars can be used with one and only one type of field so that
     * encoding standards and simple and clear. Currently only string and
     * bytes fields are supported for scalars.
     */
    fieldType: ScalarType[];
}
export declare const InterfaceDescriptor: MessageFns<InterfaceDescriptor>;
export declare const ScalarDescriptor: MessageFns<ScalarDescriptor>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
