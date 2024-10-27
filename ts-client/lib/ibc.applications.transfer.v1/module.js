// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { QueryDenomHashResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { MsgTransferResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/tx";
import { QueryEscrowAddressResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { MsgTransfer } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/tx";
import { Allocation } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/authz";
import { TransferAuthorization } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/authz";
import { MsgUpdateParams } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/tx";
import { QueryEscrowAddressRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { MsgUpdateParamsResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/tx";
import { DenomTrace } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/transfer";
import { QueryDenomTracesResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryDenomHashRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryDenomTraceRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryDenomTracesRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryParamsRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryParamsResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { QueryTotalEscrowForDenomResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
import { GenesisState } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/genesis";
import { Params } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/transfer";
import { QueryDenomTraceResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/transfer/v1/query";
export { QueryDenomHashResponse, MsgTransferResponse, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, MsgTransfer, Allocation, TransferAuthorization, MsgUpdateParams, QueryEscrowAddressRequest, MsgUpdateParamsResponse, DenomTrace, QueryDenomTracesResponse, QueryDenomHashRequest, QueryDenomTraceRequest, QueryDenomTracesRequest, QueryParamsRequest, QueryParamsResponse, QueryTotalEscrowForDenomResponse, GenesisState, Params, QueryDenomTraceResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendQueryDenomHashResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDenomHashResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDenomHashResponse({ value: QueryDenomHashResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDenomHashResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgTransferResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgTransferResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgTransferResponse({ value: MsgTransferResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgTransferResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryEscrowAddressResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryEscrowAddressResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryEscrowAddressResponse({ value: QueryEscrowAddressResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryEscrowAddressResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryTotalEscrowForDenomRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryTotalEscrowForDenomRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryTotalEscrowForDenomRequest({ value: QueryTotalEscrowForDenomRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryTotalEscrowForDenomRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgTransfer({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgTransfer: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgTransfer({ value: MsgTransfer.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgTransfer: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAllocation({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAllocation: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.allocation({ value: Allocation.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAllocation: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendTransferAuthorization({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendTransferAuthorization: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.transferAuthorization({ value: TransferAuthorization.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendTransferAuthorization: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryEscrowAddressRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryEscrowAddressRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryEscrowAddressRequest({ value: QueryEscrowAddressRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryEscrowAddressRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendDenomTrace({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendDenomTrace: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.denomTrace({ value: DenomTrace.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendDenomTrace: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryDenomTracesResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDenomTracesResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDenomTracesResponse({ value: QueryDenomTracesResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDenomTracesResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryDenomHashRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDenomHashRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDenomHashRequest({ value: QueryDenomHashRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDenomHashRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryDenomTraceRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDenomTraceRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDenomTraceRequest({ value: QueryDenomTraceRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDenomTraceRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryDenomTracesRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDenomTracesRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDenomTracesRequest({ value: QueryDenomTracesRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDenomTracesRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryTotalEscrowForDenomResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryTotalEscrowForDenomResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryTotalEscrowForDenomResponse({ value: QueryTotalEscrowForDenomResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryTotalEscrowForDenomResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryDenomTraceResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDenomTraceResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDenomTraceResponse({ value: QueryDenomTraceResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDenomTraceResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        queryDenomHashResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse", value: QueryDenomHashResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDenomHashResponse: Could not create message: ' + e.message);
            }
        },
        msgTransferResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse", value: MsgTransferResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgTransferResponse: Could not create message: ' + e.message);
            }
        },
        queryEscrowAddressResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse", value: QueryEscrowAddressResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryEscrowAddressResponse: Could not create message: ' + e.message);
            }
        },
        queryTotalEscrowForDenomRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest", value: QueryTotalEscrowForDenomRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryTotalEscrowForDenomRequest: Could not create message: ' + e.message);
            }
        },
        msgTransfer({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.MsgTransfer", value: MsgTransfer.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgTransfer: Could not create message: ' + e.message);
            }
        },
        allocation({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.Allocation", value: Allocation.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Allocation: Could not create message: ' + e.message);
            }
        },
        transferAuthorization({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization", value: TransferAuthorization.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:TransferAuthorization: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        queryEscrowAddressRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest", value: QueryEscrowAddressRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryEscrowAddressRequest: Could not create message: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        denomTrace({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.DenomTrace", value: DenomTrace.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:DenomTrace: Could not create message: ' + e.message);
            }
        },
        queryDenomTracesResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse", value: QueryDenomTracesResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDenomTracesResponse: Could not create message: ' + e.message);
            }
        },
        queryDenomHashRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest", value: QueryDenomHashRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDenomHashRequest: Could not create message: ' + e.message);
            }
        },
        queryDenomTraceRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest", value: QueryDenomTraceRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDenomTraceRequest: Could not create message: ' + e.message);
            }
        },
        queryDenomTracesRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest", value: QueryDenomTracesRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDenomTracesRequest: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        queryTotalEscrowForDenomResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse", value: QueryTotalEscrowForDenomResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryTotalEscrowForDenomResponse: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        queryDenomTraceResponse({ value }) {
            try {
                return { typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse", value: QueryDenomTraceResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDenomTraceResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            IbcApplicationsTransferV1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
