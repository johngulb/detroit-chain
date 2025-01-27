import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmos.orm.v1alpha1";
/** StorageType */
export declare enum StorageType {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent storage where all
     * data is stored in the regular Merkle-tree backed KV-store.
     */
    STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    STORAGE_TYPE_MEMORY = 1,
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    STORAGE_TYPE_TRANSIENT = 2,
    UNRECOGNIZED = -1
}
export declare function storageTypeFromJSON(object: any): StorageType;
export declare function storageTypeToJSON(object: StorageType): string;
/** ModuleSchemaDescriptor describe's a module's ORM schema. */
export interface ModuleSchemaDescriptor {
    schemaFile: ModuleSchemaDescriptor_FileEntry[];
    /**
     * prefix is an optional prefix that precedes all keys in this module's
     * store.
     */
    prefix: Uint8Array;
}
/** FileEntry describes an ORM file used in a module. */
export interface ModuleSchemaDescriptor_FileEntry {
    /**
     * id is a prefix that will be varint encoded and prepended to all the
     * table keys specified in the file's tables.
     */
    id: number;
    /**
     * proto_file_name is the name of a file .proto in that contains
     * table definitions. The .proto file must be in a package that the
     * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
     */
    protoFileName: string;
    /**
     * storage_type optionally indicates the type of storage this file's
     * tables should used. If it is left unspecified, the default KV-storage
     * of the app will be used.
     */
    storageType: StorageType;
}
export declare const ModuleSchemaDescriptor: MessageFns<ModuleSchemaDescriptor>;
export declare const ModuleSchemaDescriptor_FileEntry: MessageFns<ModuleSchemaDescriptor_FileEntry>;
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
