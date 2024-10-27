import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/mint";
import { MsgUpdateParams } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/tx";
import { QueryAnnualProvisionsRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/query";
import { QueryParamsRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/query";
import { QueryParamsResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/query";
import { GenesisState } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/genesis";
import { QueryInflationRequest } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/query";
import { Minter } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/mint";
import { QueryInflationResponse } from "./types/../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/mint/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.mint.v1beta1.Params", Params],
    ["/cosmos.mint.v1beta1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmos.mint.v1beta1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest", QueryAnnualProvisionsRequest],
    ["/cosmos.mint.v1beta1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.mint.v1beta1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.mint.v1beta1.GenesisState", GenesisState],
    ["/cosmos.mint.v1beta1.QueryInflationRequest", QueryInflationRequest],
    ["/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse", QueryAnnualProvisionsResponse],
    ["/cosmos.mint.v1beta1.Minter", Minter],
    ["/cosmos.mint.v1beta1.QueryInflationResponse", QueryInflationResponse],
    
];

export { msgTypes }