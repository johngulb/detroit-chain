import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "cosmos.base.reflection.v2alpha1";
/** Since: cosmos-sdk 0.43 */
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn: AuthnDescriptor | undefined;
    /** chain provides the chain descriptor */
    chain: ChainDescriptor | undefined;
    /** codec provides metadata information regarding codec related types */
    codec: CodecDescriptor | undefined;
    /** configuration provides metadata information regarding the sdk.Config type */
    configuration: ConfigurationDescriptor | undefined;
    /** query_services provides metadata information regarding the available queriable endpoints */
    queryServices: QueryServicesDescriptor | undefined;
    /** tx provides metadata information regarding how to send transactions to the given application */
    tx: TxDescriptor | undefined;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     */
    fullname: string;
    /** msgs lists the accepted application messages (sdk.Msg) */
    msgs: MsgDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
    /** sign_modes defines the supported signature algorithm */
    signModes: SigningModeDescriptor[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
    /** name defines the unique name of the signing mode */
    name: string;
    /** number is the unique int32 identifier for the sign_mode enum */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     */
    authnInfoProviderMethodFullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
    /** id is the chain id */
    id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
    /** interfaces is a list of the registerted interfaces descriptors */
    interfaces: InterfaceDescriptor[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
    /** fullname is the name of the interface */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     */
    interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
    /** interface_implementers is a list of the descriptors of the interface implementers */
    interfaceImplementers: InterfaceImplementerDescriptor[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
    /** fullname is the protobuf queryable name of the interface implementer */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     */
    typeUrl: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
    /** fullname is the protobuf fullname of the type containing the interface */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     */
    fieldDescriptorNames: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
    /** bech32_account_address_prefix is the account address prefix */
    bech32AccountAddressPrefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
    /** msg_type_url contains the TypeURL of a sdk.Msg. */
    msgTypeUrl: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
    /** authn describes how to authenticate to the application when sending transactions */
    authn: AuthnDescriptor | undefined;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
    /** chain describes application chain information */
    chain: ChainDescriptor | undefined;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
    /** codec describes the application codec such as registered interfaces and implementations */
    codec: CodecDescriptor | undefined;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
    /** config describes the application's sdk.Config */
    config: ConfigurationDescriptor | undefined;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
    /** queries provides information on the available queryable services */
    queries: QueryServicesDescriptor | undefined;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx: TxDescriptor | undefined;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
    /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
    queryServices: QueryServiceDescriptor[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
    /** fullname is the protobuf fullname of the service descriptor */
    fullname: string;
    /** is_module describes if this service is actually exposed by an application's module */
    isModule: boolean;
    /** methods provides a list of query service methods */
    methods: QueryMethodDescriptor[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
    /** name is the protobuf name (not fullname) of the method */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     */
    fullQueryPath: string;
}
export declare const AppDescriptor: MessageFns<AppDescriptor>;
export declare const TxDescriptor: MessageFns<TxDescriptor>;
export declare const AuthnDescriptor: MessageFns<AuthnDescriptor>;
export declare const SigningModeDescriptor: MessageFns<SigningModeDescriptor>;
export declare const ChainDescriptor: MessageFns<ChainDescriptor>;
export declare const CodecDescriptor: MessageFns<CodecDescriptor>;
export declare const InterfaceDescriptor: MessageFns<InterfaceDescriptor>;
export declare const InterfaceImplementerDescriptor: MessageFns<InterfaceImplementerDescriptor>;
export declare const InterfaceAcceptingMessageDescriptor: MessageFns<InterfaceAcceptingMessageDescriptor>;
export declare const ConfigurationDescriptor: MessageFns<ConfigurationDescriptor>;
export declare const MsgDescriptor: MessageFns<MsgDescriptor>;
export declare const GetAuthnDescriptorRequest: MessageFns<GetAuthnDescriptorRequest>;
export declare const GetAuthnDescriptorResponse: MessageFns<GetAuthnDescriptorResponse>;
export declare const GetChainDescriptorRequest: MessageFns<GetChainDescriptorRequest>;
export declare const GetChainDescriptorResponse: MessageFns<GetChainDescriptorResponse>;
export declare const GetCodecDescriptorRequest: MessageFns<GetCodecDescriptorRequest>;
export declare const GetCodecDescriptorResponse: MessageFns<GetCodecDescriptorResponse>;
export declare const GetConfigurationDescriptorRequest: MessageFns<GetConfigurationDescriptorRequest>;
export declare const GetConfigurationDescriptorResponse: MessageFns<GetConfigurationDescriptorResponse>;
export declare const GetQueryServicesDescriptorRequest: MessageFns<GetQueryServicesDescriptorRequest>;
export declare const GetQueryServicesDescriptorResponse: MessageFns<GetQueryServicesDescriptorResponse>;
export declare const GetTxDescriptorRequest: MessageFns<GetTxDescriptorRequest>;
export declare const GetTxDescriptorResponse: MessageFns<GetTxDescriptorResponse>;
export declare const QueryServicesDescriptor: MessageFns<QueryServicesDescriptor>;
export declare const QueryServiceDescriptor: MessageFns<QueryServiceDescriptor>;
export declare const QueryMethodDescriptor: MessageFns<QueryMethodDescriptor>;
/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
    /**
     * GetAuthnDescriptor returns information on how to authenticate transactions in the application
     * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
     * future releases of the cosmos-sdk.
     */
    GetAuthnDescriptor(request: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;
    /** GetChainDescriptor returns the description of the chain */
    GetChainDescriptor(request: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;
    /** GetCodecDescriptor returns the descriptor of the codec of the application */
    GetCodecDescriptor(request: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;
    /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
    GetConfigurationDescriptor(request: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;
    /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
    GetQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;
    /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
    GetTxDescriptor(request: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
export declare const ReflectionServiceServiceName = "cosmos.base.reflection.v2alpha1.ReflectionService";
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetAuthnDescriptor(request: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;
    GetChainDescriptor(request: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;
    GetCodecDescriptor(request: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;
    GetConfigurationDescriptor(request: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;
    GetQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;
    GetTxDescriptor(request: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
