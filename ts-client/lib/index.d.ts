import { Registry } from '@cosmjs/proto-signing';
import { IgniteClient } from "./client";
import { MissingWalletError } from "./helpers";
declare const Client: typeof IgniteClient & import("./helpers").Constructor<{
    CosmosBaseTendermintV1Beta1: {
        query: any;
        tx: {
            sendGetSyncingResponse({ value, fee, memo }: {
                value: GetSyncingResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetNodeInfoResponse({ value, fee, memo }: {
                value: GetNodeInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendABCIQueryRequest({ value, fee, memo }: {
                value: ABCIQueryRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetBlockByHeightRequest({ value, fee, memo }: {
                value: GetBlockByHeightRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendABCIQueryResponse({ value, fee, memo }: {
                value: ABCIQueryResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendProofOps({ value, fee, memo }: {
                value: ProofOps;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBlock({ value, fee, memo }: {
                value: Block;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendHeader({ value, fee, memo }: {
                value: Header;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVersionInfo({ value, fee, memo }: {
                value: VersionInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetValidatorSetByHeightResponse({ value, fee, memo }: {
                value: GetValidatorSetByHeightResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidator({ value, fee, memo }: {
                value: Validator;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetBlockByHeightResponse({ value, fee, memo }: {
                value: GetBlockByHeightResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetValidatorSetByHeightRequest({ value, fee, memo }: {
                value: GetValidatorSetByHeightRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetNodeInfoRequest({ value, fee, memo }: {
                value: GetNodeInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendProofOp({ value, fee, memo }: {
                value: ProofOp;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetLatestBlockRequest({ value, fee, memo }: {
                value: GetLatestBlockRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetLatestValidatorSetResponse({ value, fee, memo }: {
                value: GetLatestValidatorSetResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetLatestBlockResponse({ value, fee, memo }: {
                value: GetLatestBlockResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetLatestValidatorSetRequest({ value, fee, memo }: {
                value: GetLatestValidatorSetRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetSyncingRequest({ value, fee, memo }: {
                value: GetSyncingRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendModule({ value, fee, memo }: {
                value: Module;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            getSyncingResponse({ value }: {
                value: GetSyncingResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getNodeInfoResponse({ value }: {
                value: GetNodeInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            abciqueryRequest({ value }: {
                value: ABCIQueryRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getBlockByHeightRequest({ value }: {
                value: GetBlockByHeightRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            abciqueryResponse({ value }: {
                value: ABCIQueryResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            proofOps({ value }: {
                value: ProofOps;
            }): import("@cosmjs/proto-signing").EncodeObject;
            block({ value }: {
                value: Block;
            }): import("@cosmjs/proto-signing").EncodeObject;
            header({ value }: {
                value: Header;
            }): import("@cosmjs/proto-signing").EncodeObject;
            versionInfo({ value }: {
                value: VersionInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getValidatorSetByHeightResponse({ value }: {
                value: GetValidatorSetByHeightResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validator({ value }: {
                value: Validator;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getBlockByHeightResponse({ value }: {
                value: GetBlockByHeightResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getValidatorSetByHeightRequest({ value }: {
                value: GetValidatorSetByHeightRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getNodeInfoRequest({ value }: {
                value: GetNodeInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            proofOp({ value }: {
                value: ProofOp;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getLatestBlockRequest({ value }: {
                value: GetLatestBlockRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getLatestValidatorSetResponse({ value }: {
                value: GetLatestValidatorSetResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getLatestBlockResponse({ value }: {
                value: GetLatestBlockResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getLatestValidatorSetRequest({ value }: {
                value: GetLatestValidatorSetRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getSyncingRequest({ value }: {
                value: GetSyncingRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            module({ value }: {
                value: Module;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosBankV1Beta1: {
        query: any;
        tx: {
            sendQueryAllBalancesRequest({ value, fee, memo }: {
                value: QueryAllBalancesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryBalanceResponse({ value, fee, memo }: {
                value: QueryBalanceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomOwnersResponse({ value, fee, memo }: {
                value: QueryDenomOwnersResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySpendableBalanceByDenomRequest({ value, fee, memo }: {
                value: QuerySpendableBalanceByDenomRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomMetadataResponse({ value, fee, memo }: {
                value: QueryDenomMetadataResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySpendableBalancesResponse({ value, fee, memo }: {
                value: QuerySpendableBalancesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomOwnersByQueryResponse({ value, fee, memo }: {
                value: QueryDenomOwnersByQueryResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalSupplyResponse({ value, fee, memo }: {
                value: QueryTotalSupplyResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySpendableBalanceByDenomResponse({ value, fee, memo }: {
                value: QuerySpendableBalanceByDenomResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomsMetadataRequest({ value, fee, memo }: {
                value: QueryDenomsMetadataRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBalance({ value, fee, memo }: {
                value: Balance;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomMetadataByQueryStringRequest({ value, fee, memo }: {
                value: QueryDenomMetadataByQueryStringRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSendEnabled({ value, fee, memo }: {
                value: SendEnabled;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMetadata({ value, fee, memo }: {
                value: Metadata;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomsMetadataResponse({ value, fee, memo }: {
                value: QueryDenomsMetadataResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSetSendEnabled({ value, fee, memo }: {
                value: MsgSetSendEnabled;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDenomOwner({ value, fee, memo }: {
                value: DenomOwner;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSendAuthorization({ value, fee, memo }: {
                value: SendAuthorization;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSendResponse({ value, fee, memo }: {
                value: MsgSendResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgMultiSend({ value, fee, memo }: {
                value: MsgMultiSend;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSupply({ value, fee, memo }: {
                value: Supply;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomOwnersRequest({ value, fee, memo }: {
                value: QueryDenomOwnersRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySpendableBalancesRequest({ value, fee, memo }: {
                value: QuerySpendableBalancesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySupplyOfRequest({ value, fee, memo }: {
                value: QuerySupplyOfRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomMetadataRequest({ value, fee, memo }: {
                value: QueryDenomMetadataRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomMetadataByQueryStringResponse({ value, fee, memo }: {
                value: QueryDenomMetadataByQueryStringResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendOutput({ value, fee, memo }: {
                value: Output;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDenomUnit({ value, fee, memo }: {
                value: DenomUnit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryBalanceRequest({ value, fee, memo }: {
                value: QueryBalanceRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySendEnabledRequest({ value, fee, memo }: {
                value: QuerySendEnabledRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSend({ value, fee, memo }: {
                value: MsgSend;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllBalancesResponse({ value, fee, memo }: {
                value: QueryAllBalancesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySupplyOfResponse({ value, fee, memo }: {
                value: QuerySupplyOfResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomOwnersByQueryRequest({ value, fee, memo }: {
                value: QueryDenomOwnersByQueryRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSetSendEnabledResponse({ value, fee, memo }: {
                value: MsgSetSendEnabledResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgMultiSendResponse({ value, fee, memo }: {
                value: MsgMultiSendResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendInput({ value, fee, memo }: {
                value: Input;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalSupplyRequest({ value, fee, memo }: {
                value: QueryTotalSupplyRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySendEnabledResponse({ value, fee, memo }: {
                value: QuerySendEnabledResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryAllBalancesRequest({ value }: {
                value: QueryAllBalancesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryBalanceResponse({ value }: {
                value: QueryBalanceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomOwnersResponse({ value }: {
                value: QueryDenomOwnersResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySpendableBalanceByDenomRequest({ value }: {
                value: QuerySpendableBalanceByDenomRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomMetadataResponse({ value }: {
                value: QueryDenomMetadataResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySpendableBalancesResponse({ value }: {
                value: QuerySpendableBalancesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomOwnersByQueryResponse({ value }: {
                value: QueryDenomOwnersByQueryResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalSupplyResponse({ value }: {
                value: QueryTotalSupplyResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySpendableBalanceByDenomResponse({ value }: {
                value: QuerySpendableBalanceByDenomResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomsMetadataRequest({ value }: {
                value: QueryDenomsMetadataRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            balance({ value }: {
                value: Balance;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomMetadataByQueryStringRequest({ value }: {
                value: QueryDenomMetadataByQueryStringRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            sendEnabled({ value }: {
                value: SendEnabled;
            }): import("@cosmjs/proto-signing").EncodeObject;
            metadata({ value }: {
                value: Metadata;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomsMetadataResponse({ value }: {
                value: QueryDenomsMetadataResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSetSendEnabled({ value }: {
                value: MsgSetSendEnabled;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            denomOwner({ value }: {
                value: DenomOwner;
            }): import("@cosmjs/proto-signing").EncodeObject;
            sendAuthorization({ value }: {
                value: SendAuthorization;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSendResponse({ value }: {
                value: MsgSendResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgMultiSend({ value }: {
                value: MsgMultiSend;
            }): import("@cosmjs/proto-signing").EncodeObject;
            supply({ value }: {
                value: Supply;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomOwnersRequest({ value }: {
                value: QueryDenomOwnersRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySpendableBalancesRequest({ value }: {
                value: QuerySpendableBalancesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySupplyOfRequest({ value }: {
                value: QuerySupplyOfRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomMetadataRequest({ value }: {
                value: QueryDenomMetadataRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomMetadataByQueryStringResponse({ value }: {
                value: QueryDenomMetadataByQueryStringResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            output({ value }: {
                value: Output;
            }): import("@cosmjs/proto-signing").EncodeObject;
            denomUnit({ value }: {
                value: DenomUnit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryBalanceRequest({ value }: {
                value: QueryBalanceRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySendEnabledRequest({ value }: {
                value: QuerySendEnabledRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSend({ value }: {
                value: MsgSend;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllBalancesResponse({ value }: {
                value: QueryAllBalancesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySupplyOfResponse({ value }: {
                value: QuerySupplyOfResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomOwnersByQueryRequest({ value }: {
                value: QueryDenomOwnersByQueryRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSetSendEnabledResponse({ value }: {
                value: MsgSetSendEnabledResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgMultiSendResponse({ value }: {
                value: MsgMultiSendResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            input({ value }: {
                value: Input;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalSupplyRequest({ value }: {
                value: QueryTotalSupplyRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySendEnabledResponse({ value }: {
                value: QuerySendEnabledResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosStakingV1Beta1: {
        query: any;
        tx: {
            sendMsgCancelUnbondingDelegationResponse({ value, fee, memo }: {
                value: MsgCancelUnbondingDelegationResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryRedelegationsResponse({ value, fee, memo }: {
                value: QueryRedelegationsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPoolResponse({ value, fee, memo }: {
                value: QueryPoolResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorDelegationsResponse({ value, fee, memo }: {
                value: QueryValidatorDelegationsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDVPairs({ value, fee, memo }: {
                value: DVPairs;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPool({ value, fee, memo }: {
                value: Pool;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDelegate({ value, fee, memo }: {
                value: MsgDelegate;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgBeginRedelegateResponse({ value, fee, memo }: {
                value: MsgBeginRedelegateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorRequest({ value, fee, memo }: {
                value: QueryValidatorRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendRedelegation({ value, fee, memo }: {
                value: Redelegation;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorUpdates({ value, fee, memo }: {
                value: ValidatorUpdates;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorDelegationsRequest({ value, fee, memo }: {
                value: QueryDelegatorDelegationsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendLastValidatorPower({ value, fee, memo }: {
                value: LastValidatorPower;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDVVTriplet({ value, fee, memo }: {
                value: DVVTriplet;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorUnbondingDelegationsResponse({ value, fee, memo }: {
                value: QueryValidatorUnbondingDelegationsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValAddresses({ value, fee, memo }: {
                value: ValAddresses;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgEditValidatorResponse({ value, fee, memo }: {
                value: MsgEditValidatorResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgBeginRedelegate({ value, fee, memo }: {
                value: MsgBeginRedelegate;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendRedelegationEntry({ value, fee, memo }: {
                value: RedelegationEntry;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendStakeAuthorization({ value, fee, memo }: {
                value: StakeAuthorization;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegationResponse({ value, fee, memo }: {
                value: QueryDelegationResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorValidatorRequest({ value, fee, memo }: {
                value: QueryDelegatorValidatorRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPoolRequest({ value, fee, memo }: {
                value: QueryPoolRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgEditValidator({ value, fee, memo }: {
                value: MsgEditValidator;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorUnbondingDelegationsRequest({ value, fee, memo }: {
                value: QueryDelegatorUnbondingDelegationsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorValidatorResponse({ value, fee, memo }: {
                value: QueryDelegatorValidatorResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryHistoricalInfoRequest({ value, fee, memo }: {
                value: QueryHistoricalInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryHistoricalInfoResponse({ value, fee, memo }: {
                value: QueryHistoricalInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCommission({ value, fee, memo }: {
                value: Commission;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendUnbondingDelegation({ value, fee, memo }: {
                value: UnbondingDelegation;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelegationResponse({ value, fee, memo }: {
                value: DelegationResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDescription({ value, fee, memo }: {
                value: Description;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateValidatorResponse({ value, fee, memo }: {
                value: MsgCreateValidatorResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCancelUnbondingDelegation({ value, fee, memo }: {
                value: MsgCancelUnbondingDelegation;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUnbondingDelegationRequest({ value, fee, memo }: {
                value: QueryUnbondingDelegationRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryRedelegationsRequest({ value, fee, memo }: {
                value: QueryRedelegationsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelegation({ value, fee, memo }: {
                value: Delegation;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDelegateResponse({ value, fee, memo }: {
                value: MsgDelegateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendHistoricalInfo({ value, fee, memo }: {
                value: HistoricalInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorUnbondingDelegationsRequest({ value, fee, memo }: {
                value: QueryValidatorUnbondingDelegationsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUnbondingDelegationResponse({ value, fee, memo }: {
                value: QueryUnbondingDelegationResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateValidator({ value, fee, memo }: {
                value: MsgCreateValidator;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUndelegateResponse({ value, fee, memo }: {
                value: MsgUndelegateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendStakeAuthorization_Validators({ value, fee, memo }: {
                value: StakeAuthorization_Validators;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorsResponse({ value, fee, memo }: {
                value: QueryValidatorsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorDelegationsResponse({ value, fee, memo }: {
                value: QueryDelegatorDelegationsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDVPair({ value, fee, memo }: {
                value: DVPair;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendRedelegationEntryResponse({ value, fee, memo }: {
                value: RedelegationEntryResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUndelegate({ value, fee, memo }: {
                value: MsgUndelegate;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegationRequest({ value, fee, memo }: {
                value: QueryDelegationRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorValidatorsRequest({ value, fee, memo }: {
                value: QueryDelegatorValidatorsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidator({ value, fee, memo }: {
                value: Validator;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorsRequest({ value, fee, memo }: {
                value: QueryValidatorsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorUnbondingDelegationsResponse({ value, fee, memo }: {
                value: QueryDelegatorUnbondingDelegationsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCommissionRates({ value, fee, memo }: {
                value: CommissionRates;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendRedelegationResponse({ value, fee, memo }: {
                value: RedelegationResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorResponse({ value, fee, memo }: {
                value: QueryValidatorResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorDelegationsRequest({ value, fee, memo }: {
                value: QueryValidatorDelegationsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorValidatorsResponse({ value, fee, memo }: {
                value: QueryDelegatorValidatorsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendUnbondingDelegationEntry({ value, fee, memo }: {
                value: UnbondingDelegationEntry;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDVVTriplets({ value, fee, memo }: {
                value: DVVTriplets;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgCancelUnbondingDelegationResponse({ value }: {
                value: MsgCancelUnbondingDelegationResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryRedelegationsResponse({ value }: {
                value: QueryRedelegationsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPoolResponse({ value }: {
                value: QueryPoolResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorDelegationsResponse({ value }: {
                value: QueryValidatorDelegationsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            dvpairs({ value }: {
                value: DVPairs;
            }): import("@cosmjs/proto-signing").EncodeObject;
            pool({ value }: {
                value: Pool;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDelegate({ value }: {
                value: MsgDelegate;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgBeginRedelegateResponse({ value }: {
                value: MsgBeginRedelegateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorRequest({ value }: {
                value: QueryValidatorRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            redelegation({ value }: {
                value: Redelegation;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorUpdates({ value }: {
                value: ValidatorUpdates;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorDelegationsRequest({ value }: {
                value: QueryDelegatorDelegationsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            lastValidatorPower({ value }: {
                value: LastValidatorPower;
            }): import("@cosmjs/proto-signing").EncodeObject;
            dvvtriplet({ value }: {
                value: DVVTriplet;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorUnbondingDelegationsResponse({ value }: {
                value: QueryValidatorUnbondingDelegationsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            valAddresses({ value }: {
                value: ValAddresses;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgEditValidatorResponse({ value }: {
                value: MsgEditValidatorResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgBeginRedelegate({ value }: {
                value: MsgBeginRedelegate;
            }): import("@cosmjs/proto-signing").EncodeObject;
            redelegationEntry({ value }: {
                value: RedelegationEntry;
            }): import("@cosmjs/proto-signing").EncodeObject;
            stakeAuthorization({ value }: {
                value: StakeAuthorization;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegationResponse({ value }: {
                value: QueryDelegationResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorValidatorRequest({ value }: {
                value: QueryDelegatorValidatorRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPoolRequest({ value }: {
                value: QueryPoolRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgEditValidator({ value }: {
                value: MsgEditValidator;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorUnbondingDelegationsRequest({ value }: {
                value: QueryDelegatorUnbondingDelegationsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorValidatorResponse({ value }: {
                value: QueryDelegatorValidatorResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryHistoricalInfoRequest({ value }: {
                value: QueryHistoricalInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryHistoricalInfoResponse({ value }: {
                value: QueryHistoricalInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            commission({ value }: {
                value: Commission;
            }): import("@cosmjs/proto-signing").EncodeObject;
            unbondingDelegation({ value }: {
                value: UnbondingDelegation;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delegationResponse({ value }: {
                value: DelegationResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            description({ value }: {
                value: Description;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateValidatorResponse({ value }: {
                value: MsgCreateValidatorResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCancelUnbondingDelegation({ value }: {
                value: MsgCancelUnbondingDelegation;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUnbondingDelegationRequest({ value }: {
                value: QueryUnbondingDelegationRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryRedelegationsRequest({ value }: {
                value: QueryRedelegationsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delegation({ value }: {
                value: Delegation;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDelegateResponse({ value }: {
                value: MsgDelegateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            historicalInfo({ value }: {
                value: HistoricalInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorUnbondingDelegationsRequest({ value }: {
                value: QueryValidatorUnbondingDelegationsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUnbondingDelegationResponse({ value }: {
                value: QueryUnbondingDelegationResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateValidator({ value }: {
                value: MsgCreateValidator;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUndelegateResponse({ value }: {
                value: MsgUndelegateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            stakeAuthorizationValidators({ value }: {
                value: StakeAuthorization_Validators;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorsResponse({ value }: {
                value: QueryValidatorsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorDelegationsResponse({ value }: {
                value: QueryDelegatorDelegationsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            dvpair({ value }: {
                value: DVPair;
            }): import("@cosmjs/proto-signing").EncodeObject;
            redelegationEntryResponse({ value }: {
                value: RedelegationEntryResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUndelegate({ value }: {
                value: MsgUndelegate;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegationRequest({ value }: {
                value: QueryDelegationRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorValidatorsRequest({ value }: {
                value: QueryDelegatorValidatorsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validator({ value }: {
                value: Validator;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorsRequest({ value }: {
                value: QueryValidatorsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorUnbondingDelegationsResponse({ value }: {
                value: QueryDelegatorUnbondingDelegationsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            commissionRates({ value }: {
                value: CommissionRates;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            redelegationResponse({ value }: {
                value: RedelegationResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorResponse({ value }: {
                value: QueryValidatorResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorDelegationsRequest({ value }: {
                value: QueryValidatorDelegationsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorValidatorsResponse({ value }: {
                value: QueryDelegatorValidatorsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            unbondingDelegationEntry({ value }: {
                value: UnbondingDelegationEntry;
            }): import("@cosmjs/proto-signing").EncodeObject;
            dvvtriplets({ value }: {
                value: DVVTriplets;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosAuthV1Beta1: {
        query: any;
        tx: {
            sendQueryAccountInfoResponse({ value, fee, memo }: {
                value: QueryAccountInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAddressBytesToStringResponse({ value, fee, memo }: {
                value: AddressBytesToStringResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAddressStringToBytesRequest({ value, fee, memo }: {
                value: AddressStringToBytesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAddressStringToBytesResponse({ value, fee, memo }: {
                value: AddressStringToBytesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountAddressByIDResponse({ value, fee, memo }: {
                value: QueryAccountAddressByIDResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountsResponse({ value, fee, memo }: {
                value: QueryAccountsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountAddressByIDRequest({ value, fee, memo }: {
                value: QueryAccountAddressByIDRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountResponse({ value, fee, memo }: {
                value: QueryAccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountRequest({ value, fee, memo }: {
                value: QueryAccountRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBech32PrefixRequest({ value, fee, memo }: {
                value: Bech32PrefixRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendModuleCredential({ value, fee, memo }: {
                value: ModuleCredential;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryModuleAccountsResponse({ value, fee, memo }: {
                value: QueryModuleAccountsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryModuleAccountsRequest({ value, fee, memo }: {
                value: QueryModuleAccountsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAddressBytesToStringRequest({ value, fee, memo }: {
                value: AddressBytesToStringRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountsRequest({ value, fee, memo }: {
                value: QueryAccountsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryModuleAccountByNameResponse({ value, fee, memo }: {
                value: QueryModuleAccountByNameResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountInfoRequest({ value, fee, memo }: {
                value: QueryAccountInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryModuleAccountByNameRequest({ value, fee, memo }: {
                value: QueryModuleAccountByNameRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBech32PrefixResponse({ value, fee, memo }: {
                value: Bech32PrefixResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBaseAccount({ value, fee, memo }: {
                value: BaseAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendModuleAccount({ value, fee, memo }: {
                value: ModuleAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryAccountInfoResponse({ value }: {
                value: QueryAccountInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            addressBytesToStringResponse({ value }: {
                value: AddressBytesToStringResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            addressStringToBytesRequest({ value }: {
                value: AddressStringToBytesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            addressStringToBytesResponse({ value }: {
                value: AddressStringToBytesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountAddressByIdresponse({ value }: {
                value: QueryAccountAddressByIDResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountsResponse({ value }: {
                value: QueryAccountsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountAddressByIdrequest({ value }: {
                value: QueryAccountAddressByIDRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountResponse({ value }: {
                value: QueryAccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountRequest({ value }: {
                value: QueryAccountRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            bech32PrefixRequest({ value }: {
                value: Bech32PrefixRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            moduleCredential({ value }: {
                value: ModuleCredential;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryModuleAccountsResponse({ value }: {
                value: QueryModuleAccountsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryModuleAccountsRequest({ value }: {
                value: QueryModuleAccountsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            addressBytesToStringRequest({ value }: {
                value: AddressBytesToStringRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountsRequest({ value }: {
                value: QueryAccountsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryModuleAccountByNameResponse({ value }: {
                value: QueryModuleAccountByNameResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountInfoRequest({ value }: {
                value: QueryAccountInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryModuleAccountByNameRequest({ value }: {
                value: QueryModuleAccountByNameRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            bech32PrefixResponse({ value }: {
                value: Bech32PrefixResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            baseAccount({ value }: {
                value: BaseAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            moduleAccount({ value }: {
                value: ModuleAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosAuthzV1Beta1: {
        query: any;
        tx: {
            sendGrantAuthorization({ value, fee, memo }: {
                value: GrantAuthorization;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGrantQueueItem({ value, fee, memo }: {
                value: GrantQueueItem;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventGrant({ value, fee, memo }: {
                value: EventGrant;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgGrant({ value, fee, memo }: {
                value: MsgGrant;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgExec({ value, fee, memo }: {
                value: MsgExec;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGrantsResponse({ value, fee, memo }: {
                value: QueryGrantsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGranteeGrantsRequest({ value, fee, memo }: {
                value: QueryGranteeGrantsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGrant({ value, fee, memo }: {
                value: Grant;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventRevoke({ value, fee, memo }: {
                value: EventRevoke;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGranterGrantsResponse({ value, fee, memo }: {
                value: QueryGranterGrantsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGranteeGrantsResponse({ value, fee, memo }: {
                value: QueryGranteeGrantsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgExecResponse({ value, fee, memo }: {
                value: MsgExecResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRevoke({ value, fee, memo }: {
                value: MsgRevoke;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRevokeResponse({ value, fee, memo }: {
                value: MsgRevokeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenericAuthorization({ value, fee, memo }: {
                value: GenericAuthorization;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGrantsRequest({ value, fee, memo }: {
                value: QueryGrantsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGranterGrantsRequest({ value, fee, memo }: {
                value: QueryGranterGrantsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgGrantResponse({ value, fee, memo }: {
                value: MsgGrantResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            grantAuthorization({ value }: {
                value: GrantAuthorization;
            }): import("@cosmjs/proto-signing").EncodeObject;
            grantQueueItem({ value }: {
                value: GrantQueueItem;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventGrant({ value }: {
                value: EventGrant;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgGrant({ value }: {
                value: MsgGrant;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgExec({ value }: {
                value: MsgExec;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGrantsResponse({ value }: {
                value: QueryGrantsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGranteeGrantsRequest({ value }: {
                value: QueryGranteeGrantsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            grant({ value }: {
                value: Grant;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventRevoke({ value }: {
                value: EventRevoke;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGranterGrantsResponse({ value }: {
                value: QueryGranterGrantsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGranteeGrantsResponse({ value }: {
                value: QueryGranteeGrantsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgExecResponse({ value }: {
                value: MsgExecResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRevoke({ value }: {
                value: MsgRevoke;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRevokeResponse({ value }: {
                value: MsgRevokeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genericAuthorization({ value }: {
                value: GenericAuthorization;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGrantsRequest({ value }: {
                value: QueryGrantsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGranterGrantsRequest({ value }: {
                value: QueryGranterGrantsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgGrantResponse({ value }: {
                value: MsgGrantResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosBaseNodeV1Beta1: {
        query: any;
        tx: {
            sendConfigRequest({ value, fee, memo }: {
                value: ConfigRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendConfigResponse({ value, fee, memo }: {
                value: ConfigResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendStatusRequest({ value, fee, memo }: {
                value: StatusRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendStatusResponse({ value, fee, memo }: {
                value: StatusResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            configRequest({ value }: {
                value: ConfigRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            configResponse({ value }: {
                value: ConfigResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            statusRequest({ value }: {
                value: StatusRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            statusResponse({ value }: {
                value: StatusResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosCircuitV1: {
        query: any;
        tx: {
            sendMsgAuthorizeCircuitBreaker({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").MsgAuthorizeCircuitBreaker;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgAuthorizeCircuitBreakerResponse({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").MsgAuthorizeCircuitBreakerResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDisabledListResponse({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").DisabledListResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgResetCircuitBreakerResponse({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").MsgResetCircuitBreakerResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountsRequest({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").QueryAccountsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAccountsResponse({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").AccountsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTripCircuitBreaker({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").MsgTripCircuitBreaker;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTripCircuitBreakerResponse({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").MsgTripCircuitBreakerResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgResetCircuitBreaker({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").MsgResetCircuitBreaker;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPermissions({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").Permissions;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisAccountPermissions({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").GenesisAccountPermissions;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAccountRequest({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").QueryAccountRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAccountResponse({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").AccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDisabledListRequest({ value, fee, memo }: {
                value: import("./cosmos.circuit.v1/module").QueryDisabledListRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgAuthorizeCircuitBreaker({ value }: {
                value: import("./cosmos.circuit.v1/module").MsgAuthorizeCircuitBreaker;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgAuthorizeCircuitBreakerResponse({ value }: {
                value: import("./cosmos.circuit.v1/module").MsgAuthorizeCircuitBreakerResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: import("./cosmos.circuit.v1/module").GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            disabledListResponse({ value }: {
                value: import("./cosmos.circuit.v1/module").DisabledListResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgResetCircuitBreakerResponse({ value }: {
                value: import("./cosmos.circuit.v1/module").MsgResetCircuitBreakerResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountsRequest({ value }: {
                value: import("./cosmos.circuit.v1/module").QueryAccountsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            accountsResponse({ value }: {
                value: import("./cosmos.circuit.v1/module").AccountsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTripCircuitBreaker({ value }: {
                value: import("./cosmos.circuit.v1/module").MsgTripCircuitBreaker;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTripCircuitBreakerResponse({ value }: {
                value: import("./cosmos.circuit.v1/module").MsgTripCircuitBreakerResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgResetCircuitBreaker({ value }: {
                value: import("./cosmos.circuit.v1/module").MsgResetCircuitBreaker;
            }): import("@cosmjs/proto-signing").EncodeObject;
            permissions({ value }: {
                value: import("./cosmos.circuit.v1/module").Permissions;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisAccountPermissions({ value }: {
                value: import("./cosmos.circuit.v1/module").GenesisAccountPermissions;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAccountRequest({ value }: {
                value: import("./cosmos.circuit.v1/module").QueryAccountRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            accountResponse({ value }: {
                value: import("./cosmos.circuit.v1/module").AccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDisabledListRequest({ value }: {
                value: import("./cosmos.circuit.v1/module").QueryDisabledListRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosConsensusV1: {
        query: any;
        tx: {
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosCrisisV1Beta1: {
        query: any;
        tx: {
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVerifyInvariant({ value, fee, memo }: {
                value: MsgVerifyInvariant;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVerifyInvariantResponse({ value, fee, memo }: {
                value: MsgVerifyInvariantResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVerifyInvariant({ value }: {
                value: MsgVerifyInvariant;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVerifyInvariantResponse({ value }: {
                value: MsgVerifyInvariantResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosDistributionV1Beta1: {
        query: any;
        tx: {
            sendValidatorOutstandingRewardsRecord({ value, fee, memo }: {
                value: ValidatorOutstandingRewardsRecord;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorSlashEventRecord({ value, fee, memo }: {
                value: ValidatorSlashEventRecord;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgWithdrawValidatorCommission({ value, fee, memo }: {
                value: MsgWithdrawValidatorCommission;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorValidatorsRequest({ value, fee, memo }: {
                value: QueryDelegatorValidatorsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgWithdrawDelegatorRewardResponse({ value, fee, memo }: {
                value: MsgWithdrawDelegatorRewardResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorOutstandingRewardsResponse({ value, fee, memo }: {
                value: QueryValidatorOutstandingRewardsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorCommissionRequest({ value, fee, memo }: {
                value: QueryValidatorCommissionRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryCommunityPoolResponse({ value, fee, memo }: {
                value: QueryCommunityPoolResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgWithdrawDelegatorReward({ value, fee, memo }: {
                value: MsgWithdrawDelegatorReward;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegationRewardsRequest({ value, fee, memo }: {
                value: QueryDelegationRewardsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegationTotalRewardsResponse({ value, fee, memo }: {
                value: QueryDelegationTotalRewardsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelegatorStartingInfo({ value, fee, memo }: {
                value: DelegatorStartingInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCommunityPoolSpendProposal({ value, fee, memo }: {
                value: CommunityPoolSpendProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCommunityPoolSpendResponse({ value, fee, memo }: {
                value: MsgCommunityPoolSpendResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorDistributionInfoResponse({ value, fee, memo }: {
                value: QueryValidatorDistributionInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorValidatorsResponse({ value, fee, memo }: {
                value: QueryDelegatorValidatorsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorHistoricalRewards({ value, fee, memo }: {
                value: ValidatorHistoricalRewards;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorSlashEvent({ value, fee, memo }: {
                value: ValidatorSlashEvent;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelegatorWithdrawInfo({ value, fee, memo }: {
                value: DelegatorWithdrawInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSetWithdrawAddress({ value, fee, memo }: {
                value: MsgSetWithdrawAddress;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelegationDelegatorReward({ value, fee, memo }: {
                value: DelegationDelegatorReward;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCommunityPoolSpendProposalWithDeposit({ value, fee, memo }: {
                value: CommunityPoolSpendProposalWithDeposit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendFeePool({ value, fee, memo }: {
                value: FeePool;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorSlashesResponse({ value, fee, memo }: {
                value: QueryValidatorSlashesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegationRewardsResponse({ value, fee, memo }: {
                value: QueryDelegationRewardsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorCurrentRewardsRecord({ value, fee, memo }: {
                value: ValidatorCurrentRewardsRecord;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgFundCommunityPool({ value, fee, memo }: {
                value: MsgFundCommunityPool;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorDistributionInfoRequest({ value, fee, memo }: {
                value: QueryValidatorDistributionInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorAccumulatedCommission({ value, fee, memo }: {
                value: ValidatorAccumulatedCommission;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorHistoricalRewardsRecord({ value, fee, memo }: {
                value: ValidatorHistoricalRewardsRecord;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelegatorStartingInfoRecord({ value, fee, memo }: {
                value: DelegatorStartingInfoRecord;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCommunityPoolSpend({ value, fee, memo }: {
                value: MsgCommunityPoolSpend;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDepositValidatorRewardsPool({ value, fee, memo }: {
                value: MsgDepositValidatorRewardsPool;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorCommissionResponse({ value, fee, memo }: {
                value: QueryValidatorCommissionResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegationTotalRewardsRequest({ value, fee, memo }: {
                value: QueryDelegationTotalRewardsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryCommunityPoolRequest({ value, fee, memo }: {
                value: QueryCommunityPoolRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorOutstandingRewardsRequest({ value, fee, memo }: {
                value: QueryValidatorOutstandingRewardsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorOutstandingRewards({ value, fee, memo }: {
                value: ValidatorOutstandingRewards;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgWithdrawValidatorCommissionResponse({ value, fee, memo }: {
                value: MsgWithdrawValidatorCommissionResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorWithdrawAddressRequest({ value, fee, memo }: {
                value: QueryDelegatorWithdrawAddressRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDelegatorWithdrawAddressResponse({ value, fee, memo }: {
                value: QueryDelegatorWithdrawAddressResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorSlashEvents({ value, fee, memo }: {
                value: ValidatorSlashEvents;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorAccumulatedCommissionRecord({ value, fee, memo }: {
                value: ValidatorAccumulatedCommissionRecord;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgFundCommunityPoolResponse({ value, fee, memo }: {
                value: MsgFundCommunityPoolResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryValidatorSlashesRequest({ value, fee, memo }: {
                value: QueryValidatorSlashesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSetWithdrawAddressResponse({ value, fee, memo }: {
                value: MsgSetWithdrawAddressResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDepositValidatorRewardsPoolResponse({ value, fee, memo }: {
                value: MsgDepositValidatorRewardsPoolResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorCurrentRewards({ value, fee, memo }: {
                value: ValidatorCurrentRewards;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            validatorOutstandingRewardsRecord({ value }: {
                value: ValidatorOutstandingRewardsRecord;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorSlashEventRecord({ value }: {
                value: ValidatorSlashEventRecord;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgWithdrawValidatorCommission({ value }: {
                value: MsgWithdrawValidatorCommission;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorValidatorsRequest({ value }: {
                value: QueryDelegatorValidatorsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgWithdrawDelegatorRewardResponse({ value }: {
                value: MsgWithdrawDelegatorRewardResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorOutstandingRewardsResponse({ value }: {
                value: QueryValidatorOutstandingRewardsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorCommissionRequest({ value }: {
                value: QueryValidatorCommissionRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryCommunityPoolResponse({ value }: {
                value: QueryCommunityPoolResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgWithdrawDelegatorReward({ value }: {
                value: MsgWithdrawDelegatorReward;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegationRewardsRequest({ value }: {
                value: QueryDelegationRewardsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegationTotalRewardsResponse({ value }: {
                value: QueryDelegationTotalRewardsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delegatorStartingInfo({ value }: {
                value: DelegatorStartingInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            communityPoolSpendProposal({ value }: {
                value: CommunityPoolSpendProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCommunityPoolSpendResponse({ value }: {
                value: MsgCommunityPoolSpendResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorDistributionInfoResponse({ value }: {
                value: QueryValidatorDistributionInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorValidatorsResponse({ value }: {
                value: QueryDelegatorValidatorsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorHistoricalRewards({ value }: {
                value: ValidatorHistoricalRewards;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorSlashEvent({ value }: {
                value: ValidatorSlashEvent;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delegatorWithdrawInfo({ value }: {
                value: DelegatorWithdrawInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSetWithdrawAddress({ value }: {
                value: MsgSetWithdrawAddress;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delegationDelegatorReward({ value }: {
                value: DelegationDelegatorReward;
            }): import("@cosmjs/proto-signing").EncodeObject;
            communityPoolSpendProposalWithDeposit({ value }: {
                value: CommunityPoolSpendProposalWithDeposit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            feePool({ value }: {
                value: FeePool;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorSlashesResponse({ value }: {
                value: QueryValidatorSlashesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegationRewardsResponse({ value }: {
                value: QueryDelegationRewardsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorCurrentRewardsRecord({ value }: {
                value: ValidatorCurrentRewardsRecord;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgFundCommunityPool({ value }: {
                value: MsgFundCommunityPool;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorDistributionInfoRequest({ value }: {
                value: QueryValidatorDistributionInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorAccumulatedCommission({ value }: {
                value: ValidatorAccumulatedCommission;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorHistoricalRewardsRecord({ value }: {
                value: ValidatorHistoricalRewardsRecord;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delegatorStartingInfoRecord({ value }: {
                value: DelegatorStartingInfoRecord;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCommunityPoolSpend({ value }: {
                value: MsgCommunityPoolSpend;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDepositValidatorRewardsPool({ value }: {
                value: MsgDepositValidatorRewardsPool;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorCommissionResponse({ value }: {
                value: QueryValidatorCommissionResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegationTotalRewardsRequest({ value }: {
                value: QueryDelegationTotalRewardsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryCommunityPoolRequest({ value }: {
                value: QueryCommunityPoolRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorOutstandingRewardsRequest({ value }: {
                value: QueryValidatorOutstandingRewardsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorOutstandingRewards({ value }: {
                value: ValidatorOutstandingRewards;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgWithdrawValidatorCommissionResponse({ value }: {
                value: MsgWithdrawValidatorCommissionResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorWithdrawAddressRequest({ value }: {
                value: QueryDelegatorWithdrawAddressRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDelegatorWithdrawAddressResponse({ value }: {
                value: QueryDelegatorWithdrawAddressResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorSlashEvents({ value }: {
                value: ValidatorSlashEvents;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorAccumulatedCommissionRecord({ value }: {
                value: ValidatorAccumulatedCommissionRecord;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgFundCommunityPoolResponse({ value }: {
                value: MsgFundCommunityPoolResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryValidatorSlashesRequest({ value }: {
                value: QueryValidatorSlashesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSetWithdrawAddressResponse({ value }: {
                value: MsgSetWithdrawAddressResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDepositValidatorRewardsPoolResponse({ value }: {
                value: MsgDepositValidatorRewardsPoolResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorCurrentRewards({ value }: {
                value: ValidatorCurrentRewards;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosEvidenceV1Beta1: {
        query: any;
        tx: {
            sendQueryAllEvidenceRequest({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryAllEvidenceRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitEvidenceResponse({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").MsgSubmitEvidenceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryEvidenceRequest({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryEvidenceRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryEvidenceResponse({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryEvidenceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllEvidenceResponse({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryAllEvidenceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEquivocation({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").Equivocation;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitEvidence({ value, fee, memo }: {
                value: import("./cosmos.evidence.v1beta1/module").MsgSubmitEvidence;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryAllEvidenceRequest({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryAllEvidenceRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitEvidenceResponse({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").MsgSubmitEvidenceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryEvidenceRequest({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryEvidenceRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryEvidenceResponse({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryEvidenceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllEvidenceResponse({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").QueryAllEvidenceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            equivocation({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").Equivocation;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitEvidence({ value }: {
                value: import("./cosmos.evidence.v1beta1/module").MsgSubmitEvidence;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosFeegrantV1Beta1: {
        query: any;
        tx: {
            sendMsgGrantAllowanceResponse({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgGrantAllowanceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPruneAllowances({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgPruneAllowances;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllowanceResponse({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowanceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllowancesByGranterRequest({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesByGranterRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllowancesByGranterResponse({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesByGranterResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAllowedMsgAllowance({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").AllowedMsgAllowance;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgGrantAllowance({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgGrantAllowance;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPruneAllowancesResponse({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgPruneAllowancesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBasicAllowance({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").BasicAllowance;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllowanceRequest({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowanceRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPeriodicAllowance({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").PeriodicAllowance;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRevokeAllowanceResponse({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgRevokeAllowanceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllowancesRequest({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAllowancesResponse({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGrant({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").Grant;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRevokeAllowance({ value, fee, memo }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgRevokeAllowance;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgGrantAllowanceResponse({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgGrantAllowanceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPruneAllowances({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgPruneAllowances;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllowanceResponse({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowanceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllowancesByGranterRequest({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesByGranterRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllowancesByGranterResponse({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesByGranterResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            allowedMsgAllowance({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").AllowedMsgAllowance;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgGrantAllowance({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgGrantAllowance;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPruneAllowancesResponse({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgPruneAllowancesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            basicAllowance({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").BasicAllowance;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllowanceRequest({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowanceRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            periodicAllowance({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").PeriodicAllowance;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRevokeAllowanceResponse({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgRevokeAllowanceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllowancesRequest({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAllowancesResponse({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").QueryAllowancesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            grant({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").Grant;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRevokeAllowance({ value }: {
                value: import("./cosmos.feegrant.v1beta1/module").MsgRevokeAllowance;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosGovV1: {
        query: any;
        tx: {
            sendDeposit({ value, fee, memo }: {
                value: Deposit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitProposal({ value, fee, memo }: {
                value: MsgSubmitProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDepositResponse({ value, fee, memo }: {
                value: MsgDepositResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalRequest({ value, fee, memo }: {
                value: QueryProposalRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitProposalResponse({ value, fee, memo }: {
                value: MsgSubmitProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendWeightedVoteOption({ value, fee, memo }: {
                value: WeightedVoteOption;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalsRequest({ value, fee, memo }: {
                value: QueryProposalsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVoteRequest({ value, fee, memo }: {
                value: QueryVoteRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTallyResultRequest({ value, fee, memo }: {
                value: QueryTallyResultRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCancelProposalResponse({ value, fee, memo }: {
                value: MsgCancelProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositRequest({ value, fee, memo }: {
                value: QueryDepositRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTallyParams({ value, fee, memo }: {
                value: TallyParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVoteResponse({ value, fee, memo }: {
                value: QueryVoteResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTallyResultResponse({ value, fee, memo }: {
                value: QueryTallyResultResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVotingParams({ value, fee, memo }: {
                value: VotingParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalResponse({ value, fee, memo }: {
                value: QueryProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgExecLegacyContent({ value, fee, memo }: {
                value: MsgExecLegacyContent;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVote({ value, fee, memo }: {
                value: MsgVote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteWeightedResponse({ value, fee, memo }: {
                value: MsgVoteWeightedResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesResponse({ value, fee, memo }: {
                value: QueryVotesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositsRequest({ value, fee, memo }: {
                value: QueryDepositsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTallyResult({ value, fee, memo }: {
                value: TallyResult;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConstitutionResponse({ value, fee, memo }: {
                value: QueryConstitutionResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDeposit({ value, fee, memo }: {
                value: MsgDeposit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCancelProposal({ value, fee, memo }: {
                value: MsgCancelProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositResponse({ value, fee, memo }: {
                value: QueryDepositResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositsResponse({ value, fee, memo }: {
                value: QueryDepositsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalsResponse({ value, fee, memo }: {
                value: QueryProposalsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteResponse({ value, fee, memo }: {
                value: MsgVoteResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConstitutionRequest({ value, fee, memo }: {
                value: QueryConstitutionRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteWeighted({ value, fee, memo }: {
                value: MsgVoteWeighted;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVote({ value, fee, memo }: {
                value: Vote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesRequest({ value, fee, memo }: {
                value: QueryVotesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgExecLegacyContentResponse({ value, fee, memo }: {
                value: MsgExecLegacyContentResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendProposal({ value, fee, memo }: {
                value: Proposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDepositParams({ value, fee, memo }: {
                value: DepositParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            deposit({ value }: {
                value: Deposit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitProposal({ value }: {
                value: MsgSubmitProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDepositResponse({ value }: {
                value: MsgDepositResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalRequest({ value }: {
                value: QueryProposalRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitProposalResponse({ value }: {
                value: MsgSubmitProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            weightedVoteOption({ value }: {
                value: WeightedVoteOption;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalsRequest({ value }: {
                value: QueryProposalsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVoteRequest({ value }: {
                value: QueryVoteRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTallyResultRequest({ value }: {
                value: QueryTallyResultRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCancelProposalResponse({ value }: {
                value: MsgCancelProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositRequest({ value }: {
                value: QueryDepositRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            tallyParams({ value }: {
                value: TallyParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVoteResponse({ value }: {
                value: QueryVoteResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTallyResultResponse({ value }: {
                value: QueryTallyResultResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            votingParams({ value }: {
                value: VotingParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalResponse({ value }: {
                value: QueryProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgExecLegacyContent({ value }: {
                value: MsgExecLegacyContent;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVote({ value }: {
                value: MsgVote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteWeightedResponse({ value }: {
                value: MsgVoteWeightedResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesResponse({ value }: {
                value: QueryVotesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositsRequest({ value }: {
                value: QueryDepositsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            tallyResult({ value }: {
                value: TallyResult;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConstitutionResponse({ value }: {
                value: QueryConstitutionResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDeposit({ value }: {
                value: MsgDeposit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCancelProposal({ value }: {
                value: MsgCancelProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositResponse({ value }: {
                value: QueryDepositResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositsResponse({ value }: {
                value: QueryDepositsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalsResponse({ value }: {
                value: QueryProposalsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteResponse({ value }: {
                value: MsgVoteResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConstitutionRequest({ value }: {
                value: QueryConstitutionRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteWeighted({ value }: {
                value: MsgVoteWeighted;
            }): import("@cosmjs/proto-signing").EncodeObject;
            vote({ value }: {
                value: Vote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesRequest({ value }: {
                value: QueryVotesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgExecLegacyContentResponse({ value }: {
                value: MsgExecLegacyContentResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            proposal({ value }: {
                value: Proposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            depositParams({ value }: {
                value: DepositParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosGovV1Beta1: {
        query: any;
        tx: {
            sendTallyResult({ value, fee, memo }: {
                value: TallyResult;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVote({ value, fee, memo }: {
                value: Vote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositRequest({ value, fee, memo }: {
                value: QueryDepositRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositResponse({ value, fee, memo }: {
                value: QueryDepositResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositsRequest({ value, fee, memo }: {
                value: QueryDepositsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVote({ value, fee, memo }: {
                value: MsgVote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendWeightedVoteOption({ value, fee, memo }: {
                value: WeightedVoteOption;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDeposit({ value, fee, memo }: {
                value: Deposit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteWeighted({ value, fee, memo }: {
                value: MsgVoteWeighted;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDepositsResponse({ value, fee, memo }: {
                value: QueryDepositsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteWeightedResponse({ value, fee, memo }: {
                value: MsgVoteWeightedResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalRequest({ value, fee, memo }: {
                value: QueryProposalRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTallyParams({ value, fee, memo }: {
                value: TallyParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitProposal({ value, fee, memo }: {
                value: MsgSubmitProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDepositParams({ value, fee, memo }: {
                value: DepositParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTallyResultResponse({ value, fee, memo }: {
                value: QueryTallyResultResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteResponse({ value, fee, memo }: {
                value: MsgVoteResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitProposalResponse({ value, fee, memo }: {
                value: MsgSubmitProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVotingParams({ value, fee, memo }: {
                value: VotingParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalsRequest({ value, fee, memo }: {
                value: QueryProposalsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDepositResponse({ value, fee, memo }: {
                value: MsgDepositResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalResponse({ value, fee, memo }: {
                value: QueryProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesRequest({ value, fee, memo }: {
                value: QueryVotesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVoteResponse({ value, fee, memo }: {
                value: QueryVoteResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesResponse({ value, fee, memo }: {
                value: QueryVotesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTallyResultRequest({ value, fee, memo }: {
                value: QueryTallyResultRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendProposal({ value, fee, memo }: {
                value: Proposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVoteRequest({ value, fee, memo }: {
                value: QueryVoteRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgDeposit({ value, fee, memo }: {
                value: MsgDeposit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTextProposal({ value, fee, memo }: {
                value: TextProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalsResponse({ value, fee, memo }: {
                value: QueryProposalsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            tallyResult({ value }: {
                value: TallyResult;
            }): import("@cosmjs/proto-signing").EncodeObject;
            vote({ value }: {
                value: Vote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositRequest({ value }: {
                value: QueryDepositRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositResponse({ value }: {
                value: QueryDepositResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositsRequest({ value }: {
                value: QueryDepositsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVote({ value }: {
                value: MsgVote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            weightedVoteOption({ value }: {
                value: WeightedVoteOption;
            }): import("@cosmjs/proto-signing").EncodeObject;
            deposit({ value }: {
                value: Deposit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteWeighted({ value }: {
                value: MsgVoteWeighted;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDepositsResponse({ value }: {
                value: QueryDepositsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteWeightedResponse({ value }: {
                value: MsgVoteWeightedResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalRequest({ value }: {
                value: QueryProposalRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            tallyParams({ value }: {
                value: TallyParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitProposal({ value }: {
                value: MsgSubmitProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            depositParams({ value }: {
                value: DepositParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTallyResultResponse({ value }: {
                value: QueryTallyResultResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteResponse({ value }: {
                value: MsgVoteResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitProposalResponse({ value }: {
                value: MsgSubmitProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            votingParams({ value }: {
                value: VotingParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalsRequest({ value }: {
                value: QueryProposalsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDepositResponse({ value }: {
                value: MsgDepositResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalResponse({ value }: {
                value: QueryProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesRequest({ value }: {
                value: QueryVotesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVoteResponse({ value }: {
                value: QueryVoteResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesResponse({ value }: {
                value: QueryVotesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTallyResultRequest({ value }: {
                value: QueryTallyResultRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            proposal({ value }: {
                value: Proposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVoteRequest({ value }: {
                value: QueryVoteRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgDeposit({ value }: {
                value: MsgDeposit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            textProposal({ value }: {
                value: TextProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalsResponse({ value }: {
                value: QueryProposalsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosGroupV1: {
        query: any;
        tx: {
            sendMsgLeaveGroupResponse({ value, fee, memo }: {
                value: MsgLeaveGroupResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupPoliciesByAdminRequest({ value, fee, memo }: {
                value: QueryGroupPoliciesByAdminRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalsByGroupPolicyResponse({ value, fee, memo }: {
                value: QueryProposalsByGroupPolicyResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupsResponse({ value, fee, memo }: {
                value: QueryGroupsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGroupPolicyInfo({ value, fee, memo }: {
                value: GroupPolicyInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVoteResponse({ value, fee, memo }: {
                value: MsgVoteResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesByProposalResponse({ value, fee, memo }: {
                value: QueryVotesByProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateGroupWithPolicy({ value, fee, memo }: {
                value: MsgCreateGroupWithPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupMetadataResponse({ value, fee, memo }: {
                value: MsgUpdateGroupMetadataResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalRequest({ value, fee, memo }: {
                value: QueryProposalRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventUpdateGroupPolicy({ value, fee, memo }: {
                value: EventUpdateGroupPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGroupInfo({ value, fee, memo }: {
                value: GroupInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateGroupResponse({ value, fee, memo }: {
                value: MsgCreateGroupResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupInfoRequest({ value, fee, memo }: {
                value: QueryGroupInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTallyResultRequest({ value, fee, memo }: {
                value: QueryTallyResultRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupMembers({ value, fee, memo }: {
                value: MsgUpdateGroupMembers;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupPoliciesByGroupRequest({ value, fee, memo }: {
                value: QueryGroupPoliciesByGroupRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupInfoResponse({ value, fee, memo }: {
                value: QueryGroupInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupPolicyInfoRequest({ value, fee, memo }: {
                value: QueryGroupPolicyInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventVote({ value, fee, memo }: {
                value: EventVote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDecisionPolicyWindows({ value, fee, memo }: {
                value: DecisionPolicyWindows;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVote({ value, fee, memo }: {
                value: Vote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupPolicyDecisionPolicyResponse({ value, fee, memo }: {
                value: MsgUpdateGroupPolicyDecisionPolicyResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesByVoterResponse({ value, fee, memo }: {
                value: QueryVotesByVoterResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventUpdateGroup({ value, fee, memo }: {
                value: EventUpdateGroup;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventSubmitProposal({ value, fee, memo }: {
                value: EventSubmitProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupPoliciesByAdminResponse({ value, fee, memo }: {
                value: QueryGroupPoliciesByAdminResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalsByGroupPolicyRequest({ value, fee, memo }: {
                value: QueryProposalsByGroupPolicyRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventExec({ value, fee, memo }: {
                value: EventExec;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupAdminResponse({ value, fee, memo }: {
                value: MsgUpdateGroupAdminResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupsByMemberResponse({ value, fee, memo }: {
                value: QueryGroupsByMemberResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateGroupPolicy({ value, fee, memo }: {
                value: MsgCreateGroupPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgWithdrawProposal({ value, fee, memo }: {
                value: MsgWithdrawProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupPoliciesByGroupResponse({ value, fee, memo }: {
                value: QueryGroupPoliciesByGroupResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupsByMemberRequest({ value, fee, memo }: {
                value: QueryGroupsByMemberRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventWithdrawProposal({ value, fee, memo }: {
                value: EventWithdrawProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgExecResponse({ value, fee, memo }: {
                value: MsgExecResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgLeaveGroup({ value, fee, memo }: {
                value: MsgLeaveGroup;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesByVoterRequest({ value, fee, memo }: {
                value: QueryVotesByVoterRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventProposalPruned({ value, fee, memo }: {
                value: EventProposalPruned;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateGroupPolicyResponse({ value, fee, memo }: {
                value: MsgCreateGroupPolicyResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateGroup({ value, fee, memo }: {
                value: MsgCreateGroup;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupPolicyMetadata({ value, fee, memo }: {
                value: MsgUpdateGroupPolicyMetadata;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitProposalResponse({ value, fee, memo }: {
                value: MsgSubmitProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgExec({ value, fee, memo }: {
                value: MsgExec;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupMembersRequest({ value, fee, memo }: {
                value: QueryGroupMembersRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventCreateGroup({ value, fee, memo }: {
                value: EventCreateGroup;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendThresholdDecisionPolicy({ value, fee, memo }: {
                value: ThresholdDecisionPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupMembersResponse({ value, fee, memo }: {
                value: QueryGroupMembersResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventLeaveGroup({ value, fee, memo }: {
                value: EventLeaveGroup;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgWithdrawProposalResponse({ value, fee, memo }: {
                value: MsgWithdrawProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupAdmin({ value, fee, memo }: {
                value: MsgUpdateGroupAdmin;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitProposal({ value, fee, memo }: {
                value: MsgSubmitProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPercentageDecisionPolicy({ value, fee, memo }: {
                value: PercentageDecisionPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupMembersResponse({ value, fee, memo }: {
                value: MsgUpdateGroupMembersResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupPolicyAdmin({ value, fee, memo }: {
                value: MsgUpdateGroupPolicyAdmin;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupPolicyMetadataResponse({ value, fee, memo }: {
                value: MsgUpdateGroupPolicyMetadataResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventCreateGroupPolicy({ value, fee, memo }: {
                value: EventCreateGroupPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupMetadata({ value, fee, memo }: {
                value: MsgUpdateGroupMetadata;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupPolicyInfoResponse({ value, fee, memo }: {
                value: QueryGroupPolicyInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVotesByProposalRequest({ value, fee, memo }: {
                value: QueryVotesByProposalRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendProposal({ value, fee, memo }: {
                value: Proposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTallyResult({ value, fee, memo }: {
                value: TallyResult;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgVote({ value, fee, memo }: {
                value: MsgVote;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupsByAdminRequest({ value, fee, memo }: {
                value: QueryGroupsByAdminRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupsByAdminResponse({ value, fee, memo }: {
                value: QueryGroupsByAdminResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTallyResultResponse({ value, fee, memo }: {
                value: QueryTallyResultResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMember({ value, fee, memo }: {
                value: Member;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMemberRequest({ value, fee, memo }: {
                value: MemberRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryGroupsRequest({ value, fee, memo }: {
                value: QueryGroupsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupPolicyAdminResponse({ value, fee, memo }: {
                value: MsgUpdateGroupPolicyAdminResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVoteByProposalVoterResponse({ value, fee, memo }: {
                value: QueryVoteByProposalVoterResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGroupMember({ value, fee, memo }: {
                value: GroupMember;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateGroupWithPolicyResponse({ value, fee, memo }: {
                value: MsgCreateGroupWithPolicyResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryProposalResponse({ value, fee, memo }: {
                value: QueryProposalResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVoteByProposalVoterRequest({ value, fee, memo }: {
                value: QueryVoteByProposalVoterRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateGroupPolicyDecisionPolicy({ value, fee, memo }: {
                value: MsgUpdateGroupPolicyDecisionPolicy;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgLeaveGroupResponse({ value }: {
                value: MsgLeaveGroupResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupPoliciesByAdminRequest({ value }: {
                value: QueryGroupPoliciesByAdminRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalsByGroupPolicyResponse({ value }: {
                value: QueryProposalsByGroupPolicyResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupsResponse({ value }: {
                value: QueryGroupsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            groupPolicyInfo({ value }: {
                value: GroupPolicyInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVoteResponse({ value }: {
                value: MsgVoteResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesByProposalResponse({ value }: {
                value: QueryVotesByProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateGroupWithPolicy({ value }: {
                value: MsgCreateGroupWithPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupMetadataResponse({ value }: {
                value: MsgUpdateGroupMetadataResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalRequest({ value }: {
                value: QueryProposalRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventUpdateGroupPolicy({ value }: {
                value: EventUpdateGroupPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
            groupInfo({ value }: {
                value: GroupInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateGroupResponse({ value }: {
                value: MsgCreateGroupResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupInfoRequest({ value }: {
                value: QueryGroupInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTallyResultRequest({ value }: {
                value: QueryTallyResultRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupMembers({ value }: {
                value: MsgUpdateGroupMembers;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupPoliciesByGroupRequest({ value }: {
                value: QueryGroupPoliciesByGroupRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupInfoResponse({ value }: {
                value: QueryGroupInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupPolicyInfoRequest({ value }: {
                value: QueryGroupPolicyInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventVote({ value }: {
                value: EventVote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            decisionPolicyWindows({ value }: {
                value: DecisionPolicyWindows;
            }): import("@cosmjs/proto-signing").EncodeObject;
            vote({ value }: {
                value: Vote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupPolicyDecisionPolicyResponse({ value }: {
                value: MsgUpdateGroupPolicyDecisionPolicyResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesByVoterResponse({ value }: {
                value: QueryVotesByVoterResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventUpdateGroup({ value }: {
                value: EventUpdateGroup;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventSubmitProposal({ value }: {
                value: EventSubmitProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupPoliciesByAdminResponse({ value }: {
                value: QueryGroupPoliciesByAdminResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalsByGroupPolicyRequest({ value }: {
                value: QueryProposalsByGroupPolicyRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventExec({ value }: {
                value: EventExec;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupAdminResponse({ value }: {
                value: MsgUpdateGroupAdminResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupsByMemberResponse({ value }: {
                value: QueryGroupsByMemberResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateGroupPolicy({ value }: {
                value: MsgCreateGroupPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgWithdrawProposal({ value }: {
                value: MsgWithdrawProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupPoliciesByGroupResponse({ value }: {
                value: QueryGroupPoliciesByGroupResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupsByMemberRequest({ value }: {
                value: QueryGroupsByMemberRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventWithdrawProposal({ value }: {
                value: EventWithdrawProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgExecResponse({ value }: {
                value: MsgExecResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgLeaveGroup({ value }: {
                value: MsgLeaveGroup;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesByVoterRequest({ value }: {
                value: QueryVotesByVoterRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventProposalPruned({ value }: {
                value: EventProposalPruned;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateGroupPolicyResponse({ value }: {
                value: MsgCreateGroupPolicyResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateGroup({ value }: {
                value: MsgCreateGroup;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupPolicyMetadata({ value }: {
                value: MsgUpdateGroupPolicyMetadata;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitProposalResponse({ value }: {
                value: MsgSubmitProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgExec({ value }: {
                value: MsgExec;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupMembersRequest({ value }: {
                value: QueryGroupMembersRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventCreateGroup({ value }: {
                value: EventCreateGroup;
            }): import("@cosmjs/proto-signing").EncodeObject;
            thresholdDecisionPolicy({ value }: {
                value: ThresholdDecisionPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupMembersResponse({ value }: {
                value: QueryGroupMembersResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventLeaveGroup({ value }: {
                value: EventLeaveGroup;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgWithdrawProposalResponse({ value }: {
                value: MsgWithdrawProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupAdmin({ value }: {
                value: MsgUpdateGroupAdmin;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitProposal({ value }: {
                value: MsgSubmitProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            percentageDecisionPolicy({ value }: {
                value: PercentageDecisionPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupMembersResponse({ value }: {
                value: MsgUpdateGroupMembersResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupPolicyAdmin({ value }: {
                value: MsgUpdateGroupPolicyAdmin;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupPolicyMetadataResponse({ value }: {
                value: MsgUpdateGroupPolicyMetadataResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventCreateGroupPolicy({ value }: {
                value: EventCreateGroupPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupMetadata({ value }: {
                value: MsgUpdateGroupMetadata;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupPolicyInfoResponse({ value }: {
                value: QueryGroupPolicyInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVotesByProposalRequest({ value }: {
                value: QueryVotesByProposalRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            proposal({ value }: {
                value: Proposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            tallyResult({ value }: {
                value: TallyResult;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgVote({ value }: {
                value: MsgVote;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupsByAdminRequest({ value }: {
                value: QueryGroupsByAdminRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupsByAdminResponse({ value }: {
                value: QueryGroupsByAdminResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTallyResultResponse({ value }: {
                value: QueryTallyResultResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            member({ value }: {
                value: Member;
            }): import("@cosmjs/proto-signing").EncodeObject;
            memberRequest({ value }: {
                value: MemberRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryGroupsRequest({ value }: {
                value: QueryGroupsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupPolicyAdminResponse({ value }: {
                value: MsgUpdateGroupPolicyAdminResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVoteByProposalVoterResponse({ value }: {
                value: QueryVoteByProposalVoterResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            groupMember({ value }: {
                value: GroupMember;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateGroupWithPolicyResponse({ value }: {
                value: MsgCreateGroupWithPolicyResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryProposalResponse({ value }: {
                value: QueryProposalResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVoteByProposalVoterRequest({ value }: {
                value: QueryVoteByProposalVoterRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateGroupPolicyDecisionPolicy({ value }: {
                value: MsgUpdateGroupPolicyDecisionPolicy;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosMintV1Beta1: {
        query: any;
        tx: {
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAnnualProvisionsRequest({ value, fee, memo }: {
                value: QueryAnnualProvisionsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryInflationRequest({ value, fee, memo }: {
                value: QueryInflationRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAnnualProvisionsResponse({ value, fee, memo }: {
                value: QueryAnnualProvisionsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMinter({ value, fee, memo }: {
                value: Minter;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryInflationResponse({ value, fee, memo }: {
                value: QueryInflationResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAnnualProvisionsRequest({ value }: {
                value: QueryAnnualProvisionsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryInflationRequest({ value }: {
                value: QueryInflationRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAnnualProvisionsResponse({ value }: {
                value: QueryAnnualProvisionsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            minter({ value }: {
                value: Minter;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryInflationResponse({ value }: {
                value: QueryInflationResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosNftV1Beta1: {
        query: any;
        tx: {
            sendMsgSendResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").MsgSendResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNFTsRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendClass({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").Class;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNFTsResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNFTResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryOwnerRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryOwnerRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventSend({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").EventSend;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventMint({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").EventMint;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySupplyRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QuerySupplyRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNFTRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEntry({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").Entry;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySupplyResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QuerySupplyResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClassRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClassResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClassesRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClassesResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSend({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").MsgSend;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendNFT({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").NFT;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryBalanceRequest({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryBalanceRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryBalanceResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryBalanceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendEventBurn({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").EventBurn;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryOwnerResponse({ value, fee, memo }: {
                value: import("./cosmos.nft.v1beta1/module").QueryOwnerResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgSendResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").MsgSendResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNftsRequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            class({ value }: {
                value: import("./cosmos.nft.v1beta1/module").Class;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNftsResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNftresponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryOwnerRequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryOwnerRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventSend({ value }: {
                value: import("./cosmos.nft.v1beta1/module").EventSend;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventMint({ value }: {
                value: import("./cosmos.nft.v1beta1/module").EventMint;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySupplyRequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QuerySupplyRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNftrequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryNFTRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            entry({ value }: {
                value: import("./cosmos.nft.v1beta1/module").Entry;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySupplyResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QuerySupplyResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClassRequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClassResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClassesRequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClassesResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryClassesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSend({ value }: {
                value: import("./cosmos.nft.v1beta1/module").MsgSend;
            }): import("@cosmjs/proto-signing").EncodeObject;
            nft({ value }: {
                value: import("./cosmos.nft.v1beta1/module").NFT;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryBalanceRequest({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryBalanceRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryBalanceResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryBalanceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            eventBurn({ value }: {
                value: import("./cosmos.nft.v1beta1/module").EventBurn;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: import("./cosmos.nft.v1beta1/module").GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryOwnerResponse({ value }: {
                value: import("./cosmos.nft.v1beta1/module").QueryOwnerResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosParamsV1Beta1: {
        query: any;
        tx: {
            sendQuerySubspacesRequest({ value, fee, memo }: {
                value: QuerySubspacesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySubspacesResponse({ value, fee, memo }: {
                value: QuerySubspacesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSubspace({ value, fee, memo }: {
                value: Subspace;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParamChange({ value, fee, memo }: {
                value: ParamChange;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParameterChangeProposal({ value, fee, memo }: {
                value: ParameterChangeProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            querySubspacesRequest({ value }: {
                value: QuerySubspacesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySubspacesResponse({ value }: {
                value: QuerySubspacesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            subspace({ value }: {
                value: Subspace;
            }): import("@cosmjs/proto-signing").EncodeObject;
            paramChange({ value }: {
                value: ParamChange;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            parameterChangeProposal({ value }: {
                value: ParameterChangeProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosSlashingV1Beta1: {
        query: any;
        tx: {
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUnjail({ value, fee, memo }: {
                value: MsgUnjail;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySigningInfoRequest({ value, fee, memo }: {
                value: QuerySigningInfoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySigningInfosRequest({ value, fee, memo }: {
                value: QuerySigningInfosRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySigningInfosResponse({ value, fee, memo }: {
                value: QuerySigningInfosResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorMissedBlocks({ value, fee, memo }: {
                value: ValidatorMissedBlocks;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSigningInfo({ value, fee, memo }: {
                value: SigningInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendValidatorSigningInfo({ value, fee, memo }: {
                value: ValidatorSigningInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUnjailResponse({ value, fee, memo }: {
                value: MsgUnjailResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQuerySigningInfoResponse({ value, fee, memo }: {
                value: QuerySigningInfoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMissedBlock({ value, fee, memo }: {
                value: MissedBlock;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUnjail({ value }: {
                value: MsgUnjail;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySigningInfoRequest({ value }: {
                value: QuerySigningInfoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySigningInfosRequest({ value }: {
                value: QuerySigningInfosRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySigningInfosResponse({ value }: {
                value: QuerySigningInfosResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorMissedBlocks({ value }: {
                value: ValidatorMissedBlocks;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            signingInfo({ value }: {
                value: SigningInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            validatorSigningInfo({ value }: {
                value: ValidatorSigningInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUnjailResponse({ value }: {
                value: MsgUnjailResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            querySigningInfoResponse({ value }: {
                value: QuerySigningInfoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            missedBlock({ value }: {
                value: MissedBlock;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosTxV1Beta1: {
        query: any;
        tx: {
            sendModeInfo({ value, fee, memo }: {
                value: ModeInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetTxsEventRequest({ value, fee, memo }: {
                value: GetTxsEventRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxDecodeAminoRequest({ value, fee, memo }: {
                value: TxDecodeAminoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSignDocDirectAux({ value, fee, memo }: {
                value: SignDocDirectAux;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAuthInfo({ value, fee, memo }: {
                value: AuthInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendFee({ value, fee, memo }: {
                value: Fee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetTxsEventResponse({ value, fee, memo }: {
                value: GetTxsEventResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxDecodeResponse({ value, fee, memo }: {
                value: TxDecodeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxEncodeRequest({ value, fee, memo }: {
                value: TxEncodeRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxRaw({ value, fee, memo }: {
                value: TxRaw;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendModeInfo_Multi({ value, fee, memo }: {
                value: ModeInfo_Multi;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetTxRequest({ value, fee, memo }: {
                value: GetTxRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetBlockWithTxsRequest({ value, fee, memo }: {
                value: GetBlockWithTxsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendModeInfo_Single({ value, fee, memo }: {
                value: ModeInfo_Single;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTip({ value, fee, memo }: {
                value: Tip;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxBody({ value, fee, memo }: {
                value: TxBody;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSimulateResponse({ value, fee, memo }: {
                value: SimulateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSimulateRequest({ value, fee, memo }: {
                value: SimulateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetTxResponse({ value, fee, memo }: {
                value: GetTxResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBroadcastTxResponse({ value, fee, memo }: {
                value: BroadcastTxResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSignerInfo({ value, fee, memo }: {
                value: SignerInfo;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxEncodeAminoRequest({ value, fee, memo }: {
                value: TxEncodeAminoRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTx({ value, fee, memo }: {
                value: Tx;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSignDoc({ value, fee, memo }: {
                value: SignDoc;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxDecodeRequest({ value, fee, memo }: {
                value: TxDecodeRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxEncodeResponse({ value, fee, memo }: {
                value: TxEncodeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxEncodeAminoResponse({ value, fee, memo }: {
                value: TxEncodeAminoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAuxSignerData({ value, fee, memo }: {
                value: AuxSignerData;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGetBlockWithTxsResponse({ value, fee, memo }: {
                value: GetBlockWithTxsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBroadcastTxRequest({ value, fee, memo }: {
                value: BroadcastTxRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTxDecodeAminoResponse({ value, fee, memo }: {
                value: TxDecodeAminoResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            modeInfo({ value }: {
                value: ModeInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getTxsEventRequest({ value }: {
                value: GetTxsEventRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txDecodeAminoRequest({ value }: {
                value: TxDecodeAminoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            signDocDirectAux({ value }: {
                value: SignDocDirectAux;
            }): import("@cosmjs/proto-signing").EncodeObject;
            authInfo({ value }: {
                value: AuthInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            fee({ value }: {
                value: Fee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getTxsEventResponse({ value }: {
                value: GetTxsEventResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txDecodeResponse({ value }: {
                value: TxDecodeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txEncodeRequest({ value }: {
                value: TxEncodeRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txRaw({ value }: {
                value: TxRaw;
            }): import("@cosmjs/proto-signing").EncodeObject;
            modeInfoMulti({ value }: {
                value: ModeInfo_Multi;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getTxRequest({ value }: {
                value: GetTxRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getBlockWithTxsRequest({ value }: {
                value: GetBlockWithTxsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            modeInfoSingle({ value }: {
                value: ModeInfo_Single;
            }): import("@cosmjs/proto-signing").EncodeObject;
            tip({ value }: {
                value: Tip;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txBody({ value }: {
                value: TxBody;
            }): import("@cosmjs/proto-signing").EncodeObject;
            simulateResponse({ value }: {
                value: SimulateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            simulateRequest({ value }: {
                value: SimulateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getTxResponse({ value }: {
                value: GetTxResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            broadcastTxResponse({ value }: {
                value: BroadcastTxResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            signerInfo({ value }: {
                value: SignerInfo;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txEncodeAminoRequest({ value }: {
                value: TxEncodeAminoRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            tx({ value }: {
                value: Tx;
            }): import("@cosmjs/proto-signing").EncodeObject;
            signDoc({ value }: {
                value: SignDoc;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txDecodeRequest({ value }: {
                value: TxDecodeRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txEncodeResponse({ value }: {
                value: TxEncodeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txEncodeAminoResponse({ value }: {
                value: TxEncodeAminoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            auxSignerData({ value }: {
                value: AuxSignerData;
            }): import("@cosmjs/proto-signing").EncodeObject;
            getBlockWithTxsResponse({ value }: {
                value: GetBlockWithTxsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            broadcastTxRequest({ value }: {
                value: BroadcastTxRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            txDecodeAminoResponse({ value }: {
                value: TxDecodeAminoResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosUpgradeV1Beta1: {
        query: any;
        tx: {
            sendMsgCancelUpgrade({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgCancelUpgrade;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryUpgradedConsensusStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryUpgradedConsensusStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAuthorityRequest({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAuthorityRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendModuleVersion({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").ModuleVersion;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSoftwareUpgrade({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgSoftwareUpgrade;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAppliedPlanRequest({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAppliedPlanRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryModuleVersionsRequest({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryModuleVersionsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryModuleVersionsResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryModuleVersionsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAuthorityResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAuthorityResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryAppliedPlanResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAppliedPlanResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPlan({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").Plan;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendSoftwareUpgradeProposal({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").SoftwareUpgradeProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryCurrentPlanRequest({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryCurrentPlanRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryCurrentPlanResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryCurrentPlanResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSoftwareUpgradeResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgSoftwareUpgradeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCancelUpgradeResponse({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgCancelUpgradeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCancelSoftwareUpgradeProposal({ value, fee, memo }: {
                value: import("./cosmos.upgrade.v1beta1/module").CancelSoftwareUpgradeProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgCancelUpgrade({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgCancelUpgrade;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradedConsensusStateRequest({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryUpgradedConsensusStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradedConsensusStateResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryUpgradedConsensusStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAuthorityRequest({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAuthorityRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            moduleVersion({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").ModuleVersion;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSoftwareUpgrade({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgSoftwareUpgrade;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAppliedPlanRequest({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAppliedPlanRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryModuleVersionsRequest({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryModuleVersionsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryModuleVersionsResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryModuleVersionsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAuthorityResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAuthorityResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryAppliedPlanResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryAppliedPlanResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            plan({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").Plan;
            }): import("@cosmjs/proto-signing").EncodeObject;
            softwareUpgradeProposal({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").SoftwareUpgradeProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryCurrentPlanRequest({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryCurrentPlanRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryCurrentPlanResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").QueryCurrentPlanResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSoftwareUpgradeResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgSoftwareUpgradeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCancelUpgradeResponse({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").MsgCancelUpgradeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            cancelSoftwareUpgradeProposal({ value }: {
                value: import("./cosmos.upgrade.v1beta1/module").CancelSoftwareUpgradeProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    CosmosVestingV1Beta1: {
        query: any;
        tx: {
            sendMsgCreatePeriodicVestingAccountResponse({ value, fee, memo }: {
                value: MsgCreatePeriodicVestingAccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateVestingAccountResponse({ value, fee, memo }: {
                value: MsgCreateVestingAccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateVestingAccount({ value, fee, memo }: {
                value: MsgCreateVestingAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreatePermanentLockedAccountResponse({ value, fee, memo }: {
                value: MsgCreatePermanentLockedAccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendContinuousVestingAccount({ value, fee, memo }: {
                value: ContinuousVestingAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPeriodicVestingAccount({ value, fee, memo }: {
                value: PeriodicVestingAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPeriod({ value, fee, memo }: {
                value: Period;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendBaseVestingAccount({ value, fee, memo }: {
                value: BaseVestingAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreatePermanentLockedAccount({ value, fee, memo }: {
                value: MsgCreatePermanentLockedAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreatePeriodicVestingAccount({ value, fee, memo }: {
                value: MsgCreatePeriodicVestingAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDelayedVestingAccount({ value, fee, memo }: {
                value: DelayedVestingAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPermanentLockedAccount({ value, fee, memo }: {
                value: PermanentLockedAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgCreatePeriodicVestingAccountResponse({ value }: {
                value: MsgCreatePeriodicVestingAccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateVestingAccountResponse({ value }: {
                value: MsgCreateVestingAccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateVestingAccount({ value }: {
                value: MsgCreateVestingAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreatePermanentLockedAccountResponse({ value }: {
                value: MsgCreatePermanentLockedAccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            continuousVestingAccount({ value }: {
                value: ContinuousVestingAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            periodicVestingAccount({ value }: {
                value: PeriodicVestingAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            period({ value }: {
                value: Period;
            }): import("@cosmjs/proto-signing").EncodeObject;
            baseVestingAccount({ value }: {
                value: BaseVestingAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreatePermanentLockedAccount({ value }: {
                value: MsgCreatePermanentLockedAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreatePeriodicVestingAccount({ value }: {
                value: MsgCreatePeriodicVestingAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            delayedVestingAccount({ value }: {
                value: DelayedVestingAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            permanentLockedAccount({ value }: {
                value: PermanentLockedAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsFeeV1: {
        query: any;
        tx: {
            sendMsgPayPacketFee({ value, fee, memo }: {
                value: MsgPayPacketFee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendRegisteredPayee({ value, fee, memo }: {
                value: RegisteredPayee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryIncentivizedPacketResponse({ value, fee, memo }: {
                value: QueryIncentivizedPacketResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryCounterpartyPayeeRequest({ value, fee, memo }: {
                value: QueryCounterpartyPayeeRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRegisterPayeeResponse({ value, fee, memo }: {
                value: MsgRegisterPayeeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRegisterCounterpartyPayee({ value, fee, memo }: {
                value: MsgRegisterCounterpartyPayee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendFee({ value, fee, memo }: {
                value: Fee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendRegisteredCounterpartyPayee({ value, fee, memo }: {
                value: RegisteredCounterpartyPayee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendForwardRelayerAddress({ value, fee, memo }: {
                value: ForwardRelayerAddress;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryIncentivizedPacketsResponse({ value, fee, memo }: {
                value: QueryIncentivizedPacketsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalAckFeesResponse({ value, fee, memo }: {
                value: QueryTotalAckFeesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryFeeEnabledChannelRequest({ value, fee, memo }: {
                value: QueryFeeEnabledChannelRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryFeeEnabledChannelResponse({ value, fee, memo }: {
                value: QueryFeeEnabledChannelResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRegisterPayee({ value, fee, memo }: {
                value: MsgRegisterPayee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPayPacketFeeAsync({ value, fee, memo }: {
                value: MsgPayPacketFeeAsync;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPacketFee({ value, fee, memo }: {
                value: PacketFee;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendIdentifiedPacketFees({ value, fee, memo }: {
                value: IdentifiedPacketFees;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalRecvFeesRequest({ value, fee, memo }: {
                value: QueryTotalRecvFeesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalRecvFeesResponse({ value, fee, memo }: {
                value: QueryTotalRecvFeesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalTimeoutFeesResponse({ value, fee, memo }: {
                value: QueryTotalTimeoutFeesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryFeeEnabledChannelsResponse({ value, fee, memo }: {
                value: QueryFeeEnabledChannelsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPayPacketFeeAsyncResponse({ value, fee, memo }: {
                value: MsgPayPacketFeeAsyncResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryIncentivizedPacketRequest({ value, fee, memo }: {
                value: QueryIncentivizedPacketRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalTimeoutFeesRequest({ value, fee, memo }: {
                value: QueryTotalTimeoutFeesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRegisterCounterpartyPayeeResponse({ value, fee, memo }: {
                value: MsgRegisterCounterpartyPayeeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPayPacketFeeResponse({ value, fee, memo }: {
                value: MsgPayPacketFeeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendIncentivizedAcknowledgement({ value, fee, memo }: {
                value: IncentivizedAcknowledgement;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendFeeEnabledChannel({ value, fee, memo }: {
                value: FeeEnabledChannel;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryIncentivizedPacketsForChannelRequest({ value, fee, memo }: {
                value: QueryIncentivizedPacketsForChannelRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryIncentivizedPacketsForChannelResponse({ value, fee, memo }: {
                value: QueryIncentivizedPacketsForChannelResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryFeeEnabledChannelsRequest({ value, fee, memo }: {
                value: QueryFeeEnabledChannelsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMetadata({ value, fee, memo }: {
                value: Metadata;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryIncentivizedPacketsRequest({ value, fee, memo }: {
                value: QueryIncentivizedPacketsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPayeeResponse({ value, fee, memo }: {
                value: QueryPayeeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPacketFees({ value, fee, memo }: {
                value: PacketFees;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalAckFeesRequest({ value, fee, memo }: {
                value: QueryTotalAckFeesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPayeeRequest({ value, fee, memo }: {
                value: QueryPayeeRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryCounterpartyPayeeResponse({ value, fee, memo }: {
                value: QueryCounterpartyPayeeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            msgPayPacketFee({ value }: {
                value: MsgPayPacketFee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            registeredPayee({ value }: {
                value: RegisteredPayee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryIncentivizedPacketResponse({ value }: {
                value: QueryIncentivizedPacketResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryCounterpartyPayeeRequest({ value }: {
                value: QueryCounterpartyPayeeRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRegisterPayeeResponse({ value }: {
                value: MsgRegisterPayeeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRegisterCounterpartyPayee({ value }: {
                value: MsgRegisterCounterpartyPayee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            fee({ value }: {
                value: Fee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            registeredCounterpartyPayee({ value }: {
                value: RegisteredCounterpartyPayee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            forwardRelayerAddress({ value }: {
                value: ForwardRelayerAddress;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryIncentivizedPacketsResponse({ value }: {
                value: QueryIncentivizedPacketsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalAckFeesResponse({ value }: {
                value: QueryTotalAckFeesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryFeeEnabledChannelRequest({ value }: {
                value: QueryFeeEnabledChannelRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryFeeEnabledChannelResponse({ value }: {
                value: QueryFeeEnabledChannelResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRegisterPayee({ value }: {
                value: MsgRegisterPayee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPayPacketFeeAsync({ value }: {
                value: MsgPayPacketFeeAsync;
            }): import("@cosmjs/proto-signing").EncodeObject;
            packetFee({ value }: {
                value: PacketFee;
            }): import("@cosmjs/proto-signing").EncodeObject;
            identifiedPacketFees({ value }: {
                value: IdentifiedPacketFees;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalRecvFeesRequest({ value }: {
                value: QueryTotalRecvFeesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalRecvFeesResponse({ value }: {
                value: QueryTotalRecvFeesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalTimeoutFeesResponse({ value }: {
                value: QueryTotalTimeoutFeesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryFeeEnabledChannelsResponse({ value }: {
                value: QueryFeeEnabledChannelsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPayPacketFeeAsyncResponse({ value }: {
                value: MsgPayPacketFeeAsyncResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryIncentivizedPacketRequest({ value }: {
                value: QueryIncentivizedPacketRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalTimeoutFeesRequest({ value }: {
                value: QueryTotalTimeoutFeesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRegisterCounterpartyPayeeResponse({ value }: {
                value: MsgRegisterCounterpartyPayeeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPayPacketFeeResponse({ value }: {
                value: MsgPayPacketFeeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            incentivizedAcknowledgement({ value }: {
                value: IncentivizedAcknowledgement;
            }): import("@cosmjs/proto-signing").EncodeObject;
            feeEnabledChannel({ value }: {
                value: FeeEnabledChannel;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryIncentivizedPacketsForChannelRequest({ value }: {
                value: QueryIncentivizedPacketsForChannelRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryIncentivizedPacketsForChannelResponse({ value }: {
                value: QueryIncentivizedPacketsForChannelResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryFeeEnabledChannelsRequest({ value }: {
                value: QueryFeeEnabledChannelsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            metadata({ value }: {
                value: Metadata;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryIncentivizedPacketsRequest({ value }: {
                value: QueryIncentivizedPacketsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPayeeResponse({ value }: {
                value: QueryPayeeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            packetFees({ value }: {
                value: PacketFees;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalAckFeesRequest({ value }: {
                value: QueryTotalAckFeesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPayeeRequest({ value }: {
                value: QueryPayeeRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryCounterpartyPayeeResponse({ value }: {
                value: QueryCounterpartyPayeeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsInterchainAccountsControllerV1: {
        query: any;
        tx: {
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRegisterInterchainAccount({ value, fee, memo }: {
                value: MsgRegisterInterchainAccount;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryInterchainAccountRequest({ value, fee, memo }: {
                value: QueryInterchainAccountRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryInterchainAccountResponse({ value, fee, memo }: {
                value: QueryInterchainAccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSendTx({ value, fee, memo }: {
                value: MsgSendTx;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSendTxResponse({ value, fee, memo }: {
                value: MsgSendTxResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRegisterInterchainAccountResponse({ value, fee, memo }: {
                value: MsgRegisterInterchainAccountResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRegisterInterchainAccount({ value }: {
                value: MsgRegisterInterchainAccount;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryInterchainAccountRequest({ value }: {
                value: QueryInterchainAccountRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryInterchainAccountResponse({ value }: {
                value: QueryInterchainAccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSendTx({ value }: {
                value: MsgSendTx;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSendTxResponse({ value }: {
                value: MsgSendTxResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRegisterInterchainAccountResponse({ value }: {
                value: MsgRegisterInterchainAccountResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsInterchainAccountsHostV1: {
        query: any;
        tx: {
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgModuleQuerySafeResponse({ value, fee, memo }: {
                value: MsgModuleQuerySafeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgModuleQuerySafe({ value, fee, memo }: {
                value: MsgModuleQuerySafe;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryRequest({ value, fee, memo }: {
                value: QueryRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgModuleQuerySafeResponse({ value }: {
                value: MsgModuleQuerySafeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgModuleQuerySafe({ value }: {
                value: MsgModuleQuerySafe;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryRequest({ value }: {
                value: QueryRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcApplicationsTransferV1: {
        query: any;
        tx: {
            sendQueryDenomHashResponse({ value, fee, memo }: {
                value: QueryDenomHashResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTransferResponse({ value, fee, memo }: {
                value: MsgTransferResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryEscrowAddressResponse({ value, fee, memo }: {
                value: QueryEscrowAddressResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalEscrowForDenomRequest({ value, fee, memo }: {
                value: QueryTotalEscrowForDenomRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTransfer({ value, fee, memo }: {
                value: MsgTransfer;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAllocation({ value, fee, memo }: {
                value: Allocation;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTransferAuthorization({ value, fee, memo }: {
                value: TransferAuthorization;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryEscrowAddressRequest({ value, fee, memo }: {
                value: QueryEscrowAddressRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendDenomTrace({ value, fee, memo }: {
                value: DenomTrace;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomTracesResponse({ value, fee, memo }: {
                value: QueryDenomTracesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomHashRequest({ value, fee, memo }: {
                value: QueryDenomHashRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomTraceRequest({ value, fee, memo }: {
                value: QueryDenomTraceRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomTracesRequest({ value, fee, memo }: {
                value: QueryDenomTracesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsRequest({ value, fee, memo }: {
                value: QueryParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryParamsResponse({ value, fee, memo }: {
                value: QueryParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryTotalEscrowForDenomResponse({ value, fee, memo }: {
                value: QueryTotalEscrowForDenomResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryDenomTraceResponse({ value, fee, memo }: {
                value: QueryDenomTraceResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryDenomHashResponse({ value }: {
                value: QueryDenomHashResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTransferResponse({ value }: {
                value: MsgTransferResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryEscrowAddressResponse({ value }: {
                value: QueryEscrowAddressResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalEscrowForDenomRequest({ value }: {
                value: QueryTotalEscrowForDenomRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTransfer({ value }: {
                value: MsgTransfer;
            }): import("@cosmjs/proto-signing").EncodeObject;
            allocation({ value }: {
                value: Allocation;
            }): import("@cosmjs/proto-signing").EncodeObject;
            transferAuthorization({ value }: {
                value: TransferAuthorization;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryEscrowAddressRequest({ value }: {
                value: QueryEscrowAddressRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            denomTrace({ value }: {
                value: DenomTrace;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomTracesResponse({ value }: {
                value: QueryDenomTracesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomHashRequest({ value }: {
                value: QueryDenomHashRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomTraceRequest({ value }: {
                value: QueryDenomTraceRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomTracesRequest({ value }: {
                value: QueryDenomTracesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsRequest({ value }: {
                value: QueryParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryParamsResponse({ value }: {
                value: QueryParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryTotalEscrowForDenomResponse({ value }: {
                value: QueryTotalEscrowForDenomResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryDenomTraceResponse({ value }: {
                value: QueryDenomTraceResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcCoreChannelV1: {
        query: any;
        tx: {
            sendQueryChannelsRequest({ value, fee, memo }: {
                value: QueryChannelsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeInit({ value, fee, memo }: {
                value: MsgChannelUpgradeInit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeTimeout({ value, fee, memo }: {
                value: MsgChannelUpgradeTimeout;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendChannel({ value, fee, memo }: {
                value: Channel;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelConsensusStateResponse({ value, fee, memo }: {
                value: QueryChannelConsensusStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelParamsResponse({ value, fee, memo }: {
                value: QueryChannelParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenInit({ value, fee, memo }: {
                value: MsgChannelOpenInit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPacket({ value, fee, memo }: {
                value: Packet;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUnreceivedAcksRequest({ value, fee, memo }: {
                value: QueryUnreceivedAcksRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUnreceivedAcksResponse({ value, fee, memo }: {
                value: QueryUnreceivedAcksResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeConfirm({ value, fee, memo }: {
                value: MsgChannelUpgradeConfirm;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeOpenResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeOpenResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelRequest({ value, fee, memo }: {
                value: QueryChannelRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketCommitmentsResponse({ value, fee, memo }: {
                value: QueryPacketCommitmentsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketAcknowledgementRequest({ value, fee, memo }: {
                value: QueryPacketAcknowledgementRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelCloseInit({ value, fee, memo }: {
                value: MsgChannelCloseInit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelCloseConfirm({ value, fee, memo }: {
                value: MsgChannelCloseConfirm;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTimeoutResponse({ value, fee, memo }: {
                value: MsgTimeoutResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeCancelResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeCancelResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradeResponse({ value, fee, memo }: {
                value: QueryUpgradeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCounterparty({ value, fee, memo }: {
                value: Counterparty;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPacketSequence({ value, fee, memo }: {
                value: PacketSequence;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelClientStateResponse({ value, fee, memo }: {
                value: QueryChannelClientStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionChannelsRequest({ value, fee, memo }: {
                value: QueryConnectionChannelsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketReceiptResponse({ value, fee, memo }: {
                value: QueryPacketReceiptResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketAcknowledgementsRequest({ value, fee, memo }: {
                value: QueryPacketAcknowledgementsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradeRequest({ value, fee, memo }: {
                value: QueryUpgradeRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenConfirm({ value, fee, memo }: {
                value: MsgChannelOpenConfirm;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTimeoutOnCloseResponse({ value, fee, memo }: {
                value: MsgTimeoutOnCloseResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPruneAcknowledgements({ value, fee, memo }: {
                value: MsgPruneAcknowledgements;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendUpgrade({ value, fee, memo }: {
                value: Upgrade;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendIdentifiedChannel({ value, fee, memo }: {
                value: IdentifiedChannel;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradeErrorRequest({ value, fee, memo }: {
                value: QueryUpgradeErrorRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenAckResponse({ value, fee, memo }: {
                value: MsgChannelOpenAckResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTimeout({ value, fee, memo }: {
                value: MsgTimeout;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgAcknowledgementResponse({ value, fee, memo }: {
                value: MsgAcknowledgementResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeInitResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeInitResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionChannelsResponse({ value, fee, memo }: {
                value: QueryConnectionChannelsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNextSequenceReceiveRequest({ value, fee, memo }: {
                value: QueryNextSequenceReceiveRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenInitResponse({ value, fee, memo }: {
                value: MsgChannelOpenInitResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRecvPacketResponse({ value, fee, memo }: {
                value: MsgRecvPacketResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNextSequenceSendResponse({ value, fee, memo }: {
                value: QueryNextSequenceSendResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenTry({ value, fee, memo }: {
                value: MsgChannelOpenTry;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelCloseConfirmResponse({ value, fee, memo }: {
                value: MsgChannelCloseConfirmResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgAcknowledgement({ value, fee, memo }: {
                value: MsgAcknowledgement;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgPruneAcknowledgementsResponse({ value, fee, memo }: {
                value: MsgPruneAcknowledgementsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendUpgradeFields({ value, fee, memo }: {
                value: UpgradeFields;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgTimeoutOnClose({ value, fee, memo }: {
                value: MsgTimeoutOnClose;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPacketId({ value, fee, memo }: {
                value: PacketId;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelConsensusStateRequest({ value, fee, memo }: {
                value: QueryChannelConsensusStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelCloseInitResponse({ value, fee, memo }: {
                value: MsgChannelCloseInitResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeConfirmResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeConfirmResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeOpen({ value, fee, memo }: {
                value: MsgChannelUpgradeOpen;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendErrorReceipt({ value, fee, memo }: {
                value: ErrorReceipt;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketAcknowledgementResponse({ value, fee, memo }: {
                value: QueryPacketAcknowledgementResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUnreceivedPacketsResponse({ value, fee, memo }: {
                value: QueryUnreceivedPacketsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNextSequenceSendRequest({ value, fee, memo }: {
                value: QueryNextSequenceSendRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeAck({ value, fee, memo }: {
                value: MsgChannelUpgradeAck;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeAckResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeAckResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendAcknowledgement({ value, fee, memo }: {
                value: Acknowledgement;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelResponse({ value, fee, memo }: {
                value: QueryChannelResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketReceiptRequest({ value, fee, memo }: {
                value: QueryPacketReceiptRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketAcknowledgementsResponse({ value, fee, memo }: {
                value: QueryPacketAcknowledgementsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeTryResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeTryResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeCancel({ value, fee, memo }: {
                value: MsgChannelUpgradeCancel;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryNextSequenceReceiveResponse({ value, fee, memo }: {
                value: QueryNextSequenceReceiveResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendTimeout({ value, fee, memo }: {
                value: Timeout;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendPacketState({ value, fee, memo }: {
                value: PacketState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketCommitmentResponse({ value, fee, memo }: {
                value: QueryPacketCommitmentResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelParamsRequest({ value, fee, memo }: {
                value: QueryChannelParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenTryResponse({ value, fee, memo }: {
                value: MsgChannelOpenTryResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenConfirmResponse({ value, fee, memo }: {
                value: MsgChannelOpenConfirmResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketCommitmentRequest({ value, fee, memo }: {
                value: QueryPacketCommitmentRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUnreceivedPacketsRequest({ value, fee, memo }: {
                value: QueryUnreceivedPacketsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradeErrorResponse({ value, fee, memo }: {
                value: QueryUpgradeErrorResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelOpenAck({ value, fee, memo }: {
                value: MsgChannelOpenAck;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeTry({ value, fee, memo }: {
                value: MsgChannelUpgradeTry;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelsResponse({ value, fee, memo }: {
                value: QueryChannelsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryChannelClientStateRequest({ value, fee, memo }: {
                value: QueryChannelClientStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryPacketCommitmentsRequest({ value, fee, memo }: {
                value: QueryPacketCommitmentsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRecvPacket({ value, fee, memo }: {
                value: MsgRecvPacket;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgChannelUpgradeTimeoutResponse({ value, fee, memo }: {
                value: MsgChannelUpgradeTimeoutResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryChannelsRequest({ value }: {
                value: QueryChannelsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeInit({ value }: {
                value: MsgChannelUpgradeInit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeTimeout({ value }: {
                value: MsgChannelUpgradeTimeout;
            }): import("@cosmjs/proto-signing").EncodeObject;
            channel({ value }: {
                value: Channel;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelConsensusStateResponse({ value }: {
                value: QueryChannelConsensusStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelParamsResponse({ value }: {
                value: QueryChannelParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenInit({ value }: {
                value: MsgChannelOpenInit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            packet({ value }: {
                value: Packet;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUnreceivedAcksRequest({ value }: {
                value: QueryUnreceivedAcksRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUnreceivedAcksResponse({ value }: {
                value: QueryUnreceivedAcksResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeConfirm({ value }: {
                value: MsgChannelUpgradeConfirm;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeOpenResponse({ value }: {
                value: MsgChannelUpgradeOpenResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelRequest({ value }: {
                value: QueryChannelRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketCommitmentsResponse({ value }: {
                value: QueryPacketCommitmentsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketAcknowledgementRequest({ value }: {
                value: QueryPacketAcknowledgementRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelCloseInit({ value }: {
                value: MsgChannelCloseInit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelCloseConfirm({ value }: {
                value: MsgChannelCloseConfirm;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTimeoutResponse({ value }: {
                value: MsgTimeoutResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeCancelResponse({ value }: {
                value: MsgChannelUpgradeCancelResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradeResponse({ value }: {
                value: QueryUpgradeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            counterparty({ value }: {
                value: Counterparty;
            }): import("@cosmjs/proto-signing").EncodeObject;
            packetSequence({ value }: {
                value: PacketSequence;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelClientStateResponse({ value }: {
                value: QueryChannelClientStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionChannelsRequest({ value }: {
                value: QueryConnectionChannelsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketReceiptResponse({ value }: {
                value: QueryPacketReceiptResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketAcknowledgementsRequest({ value }: {
                value: QueryPacketAcknowledgementsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradeRequest({ value }: {
                value: QueryUpgradeRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenConfirm({ value }: {
                value: MsgChannelOpenConfirm;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTimeoutOnCloseResponse({ value }: {
                value: MsgTimeoutOnCloseResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPruneAcknowledgements({ value }: {
                value: MsgPruneAcknowledgements;
            }): import("@cosmjs/proto-signing").EncodeObject;
            upgrade({ value }: {
                value: Upgrade;
            }): import("@cosmjs/proto-signing").EncodeObject;
            identifiedChannel({ value }: {
                value: IdentifiedChannel;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradeErrorRequest({ value }: {
                value: QueryUpgradeErrorRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenAckResponse({ value }: {
                value: MsgChannelOpenAckResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTimeout({ value }: {
                value: MsgTimeout;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgAcknowledgementResponse({ value }: {
                value: MsgAcknowledgementResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeInitResponse({ value }: {
                value: MsgChannelUpgradeInitResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionChannelsResponse({ value }: {
                value: QueryConnectionChannelsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNextSequenceReceiveRequest({ value }: {
                value: QueryNextSequenceReceiveRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenInitResponse({ value }: {
                value: MsgChannelOpenInitResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRecvPacketResponse({ value }: {
                value: MsgRecvPacketResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNextSequenceSendResponse({ value }: {
                value: QueryNextSequenceSendResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenTry({ value }: {
                value: MsgChannelOpenTry;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelCloseConfirmResponse({ value }: {
                value: MsgChannelCloseConfirmResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgAcknowledgement({ value }: {
                value: MsgAcknowledgement;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgPruneAcknowledgementsResponse({ value }: {
                value: MsgPruneAcknowledgementsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            upgradeFields({ value }: {
                value: UpgradeFields;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgTimeoutOnClose({ value }: {
                value: MsgTimeoutOnClose;
            }): import("@cosmjs/proto-signing").EncodeObject;
            packetId({ value }: {
                value: PacketId;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelConsensusStateRequest({ value }: {
                value: QueryChannelConsensusStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelCloseInitResponse({ value }: {
                value: MsgChannelCloseInitResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeConfirmResponse({ value }: {
                value: MsgChannelUpgradeConfirmResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeOpen({ value }: {
                value: MsgChannelUpgradeOpen;
            }): import("@cosmjs/proto-signing").EncodeObject;
            errorReceipt({ value }: {
                value: ErrorReceipt;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketAcknowledgementResponse({ value }: {
                value: QueryPacketAcknowledgementResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUnreceivedPacketsResponse({ value }: {
                value: QueryUnreceivedPacketsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNextSequenceSendRequest({ value }: {
                value: QueryNextSequenceSendRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeAck({ value }: {
                value: MsgChannelUpgradeAck;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeAckResponse({ value }: {
                value: MsgChannelUpgradeAckResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            acknowledgement({ value }: {
                value: Acknowledgement;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelResponse({ value }: {
                value: QueryChannelResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketReceiptRequest({ value }: {
                value: QueryPacketReceiptRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketAcknowledgementsResponse({ value }: {
                value: QueryPacketAcknowledgementsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeTryResponse({ value }: {
                value: MsgChannelUpgradeTryResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeCancel({ value }: {
                value: MsgChannelUpgradeCancel;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryNextSequenceReceiveResponse({ value }: {
                value: QueryNextSequenceReceiveResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            timeout({ value }: {
                value: Timeout;
            }): import("@cosmjs/proto-signing").EncodeObject;
            packetState({ value }: {
                value: PacketState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketCommitmentResponse({ value }: {
                value: QueryPacketCommitmentResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelParamsRequest({ value }: {
                value: QueryChannelParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenTryResponse({ value }: {
                value: MsgChannelOpenTryResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenConfirmResponse({ value }: {
                value: MsgChannelOpenConfirmResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketCommitmentRequest({ value }: {
                value: QueryPacketCommitmentRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUnreceivedPacketsRequest({ value }: {
                value: QueryUnreceivedPacketsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradeErrorResponse({ value }: {
                value: QueryUpgradeErrorResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelOpenAck({ value }: {
                value: MsgChannelOpenAck;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeTry({ value }: {
                value: MsgChannelUpgradeTry;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelsResponse({ value }: {
                value: QueryChannelsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryChannelClientStateRequest({ value }: {
                value: QueryChannelClientStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryPacketCommitmentsRequest({ value }: {
                value: QueryPacketCommitmentsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRecvPacket({ value }: {
                value: MsgRecvPacket;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgChannelUpgradeTimeoutResponse({ value }: {
                value: MsgChannelUpgradeTimeoutResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcCoreClientV1: {
        query: any;
        tx: {
            sendQueryConsensusStatesRequest({ value, fee, memo }: {
                value: QueryConsensusStatesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientParamsRequest({ value, fee, memo }: {
                value: QueryClientParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpgradeClientResponse({ value, fee, memo }: {
                value: MsgUpgradeClientResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientStatesRequest({ value, fee, memo }: {
                value: QueryClientStatesRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConsensusStateResponse({ value, fee, memo }: {
                value: QueryConsensusStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConsensusStatesResponse({ value, fee, memo }: {
                value: QueryConsensusStatesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientStatusRequest({ value, fee, memo }: {
                value: QueryClientStatusRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradedConsensusStateRequest({ value, fee, memo }: {
                value: QueryUpgradedConsensusStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendClientUpdateProposal({ value, fee, memo }: {
                value: ClientUpdateProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendClientConsensusStates({ value, fee, memo }: {
                value: ClientConsensusStates;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConsensusStateRequest({ value, fee, memo }: {
                value: QueryConsensusStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVerifyMembershipRequest({ value, fee, memo }: {
                value: QueryVerifyMembershipRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgIBCSoftwareUpgradeResponse({ value, fee, memo }: {
                value: MsgIBCSoftwareUpgradeResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendUpgradeProposal({ value, fee, memo }: {
                value: UpgradeProposal;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateClient({ value, fee, memo }: {
                value: MsgCreateClient;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRecoverClient({ value, fee, memo }: {
                value: MsgRecoverClient;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendIdentifiedClientState({ value, fee, memo }: {
                value: IdentifiedClientState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgRecoverClientResponse({ value, fee, memo }: {
                value: MsgRecoverClientResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitMisbehaviourResponse({ value, fee, memo }: {
                value: MsgSubmitMisbehaviourResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientStatusResponse({ value, fee, memo }: {
                value: QueryClientStatusResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradedConsensusStateResponse({ value, fee, memo }: {
                value: QueryUpgradedConsensusStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgCreateClientResponse({ value, fee, memo }: {
                value: MsgCreateClientResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateClientResponse({ value, fee, memo }: {
                value: MsgUpdateClientResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientStatesResponse({ value, fee, memo }: {
                value: QueryClientStatesResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgIBCSoftwareUpgrade({ value, fee, memo }: {
                value: MsgIBCSoftwareUpgrade;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientStateRequest({ value, fee, memo }: {
                value: QueryClientStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendHeight({ value, fee, memo }: {
                value: Height;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryVerifyMembershipResponse({ value, fee, memo }: {
                value: QueryVerifyMembershipResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateClient({ value, fee, memo }: {
                value: MsgUpdateClient;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientStateResponse({ value, fee, memo }: {
                value: QueryClientStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendIdentifiedGenesisMetadata({ value, fee, memo }: {
                value: IdentifiedGenesisMetadata;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConsensusStateHeightsRequest({ value, fee, memo }: {
                value: QueryConsensusStateHeightsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendConsensusStateWithHeight({ value, fee, memo }: {
                value: ConsensusStateWithHeight;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisMetadata({ value, fee, memo }: {
                value: GenesisMetadata;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConsensusStateHeightsResponse({ value, fee, memo }: {
                value: QueryConsensusStateHeightsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradedClientStateResponse({ value, fee, memo }: {
                value: QueryUpgradedClientStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpgradeClient({ value, fee, memo }: {
                value: MsgUpgradeClient;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgSubmitMisbehaviour({ value, fee, memo }: {
                value: MsgSubmitMisbehaviour;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientParamsResponse({ value, fee, memo }: {
                value: QueryClientParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryUpgradedClientStateRequest({ value, fee, memo }: {
                value: QueryUpgradedClientStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryConsensusStatesRequest({ value }: {
                value: QueryConsensusStatesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientParamsRequest({ value }: {
                value: QueryClientParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpgradeClientResponse({ value }: {
                value: MsgUpgradeClientResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientStatesRequest({ value }: {
                value: QueryClientStatesRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConsensusStateResponse({ value }: {
                value: QueryConsensusStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConsensusStatesResponse({ value }: {
                value: QueryConsensusStatesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientStatusRequest({ value }: {
                value: QueryClientStatusRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradedConsensusStateRequest({ value }: {
                value: QueryUpgradedConsensusStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            clientUpdateProposal({ value }: {
                value: ClientUpdateProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            clientConsensusStates({ value }: {
                value: ClientConsensusStates;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConsensusStateRequest({ value }: {
                value: QueryConsensusStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVerifyMembershipRequest({ value }: {
                value: QueryVerifyMembershipRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgIbcsoftwareUpgradeResponse({ value }: {
                value: MsgIBCSoftwareUpgradeResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            upgradeProposal({ value }: {
                value: UpgradeProposal;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateClient({ value }: {
                value: MsgCreateClient;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRecoverClient({ value }: {
                value: MsgRecoverClient;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            identifiedClientState({ value }: {
                value: IdentifiedClientState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgRecoverClientResponse({ value }: {
                value: MsgRecoverClientResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitMisbehaviourResponse({ value }: {
                value: MsgSubmitMisbehaviourResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientStatusResponse({ value }: {
                value: QueryClientStatusResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradedConsensusStateResponse({ value }: {
                value: QueryUpgradedConsensusStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgCreateClientResponse({ value }: {
                value: MsgCreateClientResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateClientResponse({ value }: {
                value: MsgUpdateClientResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientStatesResponse({ value }: {
                value: QueryClientStatesResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgIbcsoftwareUpgrade({ value }: {
                value: MsgIBCSoftwareUpgrade;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientStateRequest({ value }: {
                value: QueryClientStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            height({ value }: {
                value: Height;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryVerifyMembershipResponse({ value }: {
                value: QueryVerifyMembershipResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateClient({ value }: {
                value: MsgUpdateClient;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientStateResponse({ value }: {
                value: QueryClientStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            identifiedGenesisMetadata({ value }: {
                value: IdentifiedGenesisMetadata;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConsensusStateHeightsRequest({ value }: {
                value: QueryConsensusStateHeightsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            consensusStateWithHeight({ value }: {
                value: ConsensusStateWithHeight;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisMetadata({ value }: {
                value: GenesisMetadata;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConsensusStateHeightsResponse({ value }: {
                value: QueryConsensusStateHeightsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradedClientStateResponse({ value }: {
                value: QueryUpgradedClientStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpgradeClient({ value }: {
                value: MsgUpgradeClient;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgSubmitMisbehaviour({ value }: {
                value: MsgSubmitMisbehaviour;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientParamsResponse({ value }: {
                value: QueryClientParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryUpgradedClientStateRequest({ value }: {
                value: QueryUpgradedClientStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
} & {
    IbcCoreConnectionV1: {
        query: any;
        tx: {
            sendQueryClientConnectionsResponse({ value, fee, memo }: {
                value: QueryClientConnectionsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParamsResponse({ value, fee, memo }: {
                value: MsgUpdateParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionResponse({ value, fee, memo }: {
                value: QueryConnectionResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendCounterparty({ value, fee, memo }: {
                value: Counterparty;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenTry({ value, fee, memo }: {
                value: MsgConnectionOpenTry;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionConsensusStateRequest({ value, fee, memo }: {
                value: QueryConnectionConsensusStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenInit({ value, fee, memo }: {
                value: MsgConnectionOpenInit;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryClientConnectionsRequest({ value, fee, memo }: {
                value: QueryClientConnectionsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendConnectionEnd({ value, fee, memo }: {
                value: ConnectionEnd;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendClientPaths({ value, fee, memo }: {
                value: ClientPaths;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendParams({ value, fee, memo }: {
                value: Params;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendGenesisState({ value, fee, memo }: {
                value: GenesisState;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenInitResponse({ value, fee, memo }: {
                value: MsgConnectionOpenInitResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionRequest({ value, fee, memo }: {
                value: QueryConnectionRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionsRequest({ value, fee, memo }: {
                value: QueryConnectionsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionParamsRequest({ value, fee, memo }: {
                value: QueryConnectionParamsRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenTryResponse({ value, fee, memo }: {
                value: MsgConnectionOpenTryResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendVersion({ value, fee, memo }: {
                value: Version;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenAck({ value, fee, memo }: {
                value: MsgConnectionOpenAck;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenConfirmResponse({ value, fee, memo }: {
                value: MsgConnectionOpenConfirmResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenConfirm({ value, fee, memo }: {
                value: MsgConnectionOpenConfirm;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgUpdateParams({ value, fee, memo }: {
                value: MsgUpdateParams;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionClientStateRequest({ value, fee, memo }: {
                value: QueryConnectionClientStateRequest;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionClientStateResponse({ value, fee, memo }: {
                value: QueryConnectionClientStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendIdentifiedConnection({ value, fee, memo }: {
                value: IdentifiedConnection;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendConnectionPaths({ value, fee, memo }: {
                value: ConnectionPaths;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionsResponse({ value, fee, memo }: {
                value: QueryConnectionsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionConsensusStateResponse({ value, fee, memo }: {
                value: QueryConnectionConsensusStateResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendQueryConnectionParamsResponse({ value, fee, memo }: {
                value: QueryConnectionParamsResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            sendMsgConnectionOpenAckResponse({ value, fee, memo }: {
                value: MsgConnectionOpenAckResponse;
                fee?: import("@cosmjs/amino").StdFee;
                memo?: string;
            }): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
            queryClientConnectionsResponse({ value }: {
                value: QueryClientConnectionsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParamsResponse({ value }: {
                value: MsgUpdateParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionResponse({ value }: {
                value: QueryConnectionResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            counterparty({ value }: {
                value: Counterparty;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenTry({ value }: {
                value: MsgConnectionOpenTry;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionConsensusStateRequest({ value }: {
                value: QueryConnectionConsensusStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenInit({ value }: {
                value: MsgConnectionOpenInit;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryClientConnectionsRequest({ value }: {
                value: QueryClientConnectionsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            connectionEnd({ value }: {
                value: ConnectionEnd;
            }): import("@cosmjs/proto-signing").EncodeObject;
            clientPaths({ value }: {
                value: ClientPaths;
            }): import("@cosmjs/proto-signing").EncodeObject;
            params({ value }: {
                value: Params;
            }): import("@cosmjs/proto-signing").EncodeObject;
            genesisState({ value }: {
                value: GenesisState;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenInitResponse({ value }: {
                value: MsgConnectionOpenInitResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionRequest({ value }: {
                value: QueryConnectionRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionsRequest({ value }: {
                value: QueryConnectionsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionParamsRequest({ value }: {
                value: QueryConnectionParamsRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenTryResponse({ value }: {
                value: MsgConnectionOpenTryResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            version({ value }: {
                value: Version;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenAck({ value }: {
                value: MsgConnectionOpenAck;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenConfirmResponse({ value }: {
                value: MsgConnectionOpenConfirmResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenConfirm({ value }: {
                value: MsgConnectionOpenConfirm;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgUpdateParams({ value }: {
                value: MsgUpdateParams;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionClientStateRequest({ value }: {
                value: QueryConnectionClientStateRequest;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionClientStateResponse({ value }: {
                value: QueryConnectionClientStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            identifiedConnection({ value }: {
                value: IdentifiedConnection;
            }): import("@cosmjs/proto-signing").EncodeObject;
            connectionPaths({ value }: {
                value: ConnectionPaths;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionsResponse({ value }: {
                value: QueryConnectionsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionConsensusStateResponse({ value }: {
                value: QueryConnectionConsensusStateResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            queryConnectionParamsResponse({ value }: {
                value: QueryConnectionParamsResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
            msgConnectionOpenAckResponse({ value }: {
                value: MsgConnectionOpenAckResponse;
            }): import("@cosmjs/proto-signing").EncodeObject;
        };
        structure: Record<string, unknown>;
        registry: [string, import("@cosmjs/proto-signing").GeneratedType][];
        updateTX(client: IgniteClient): void;
    };
}>;
declare const registry: Registry;
export { Client, registry, MissingWalletError };
