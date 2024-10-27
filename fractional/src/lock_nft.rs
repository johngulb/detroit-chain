use cosmwasm_std::{to_binary, DepsMut, Env, MessageInfo, Response, StdResult, CosmosMsg, WasmMsg};
use cw721::{Cw721ReceiveMsg};
use cw20_base::msg::InstantiateMsg as Cw20InstantiateMsg;

pub fn lock_nft(
    deps: DepsMut,
    info: MessageInfo,
    nft_contract: String,
    token_id: String,
    total_fractions: u64,
) -> StdResult<Response> {
    // Transfer NFT to this contract
    let transfer_msg = WasmMsg::Execute {
        contract_addr: nft_contract,
        msg: to_binary(&Cw721ReceiveMsg {
            sender: info.sender.to_string(),
            token_id: token_id.clone(),
            msg: Binary::default(),
        })?,
        funds: vec![],
    };

    // Mint CW20 tokens representing fractions
    let mint_msg = WasmMsg::Execute {
        contract_addr: deps.api.addr_validate("fractional_token_address")?,
        msg: to_binary(&Cw20InstantiateMsg {
            decimals: 6,
            name: "Fractional Ownership Token".to_string(),
            symbol: "FOT".to_string(),
            initial_balances: vec![(info.sender.clone(), total_fractions)],
            mint: None,
        })?,
        funds: vec![],
    };

    Ok(Response::new().add_messages(vec![
        CosmosMsg::Wasm(transfer_msg),
        CosmosMsg::Wasm(mint_msg),
    ]))
}
