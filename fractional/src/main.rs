// main.rs
use cosmwasm_std::{Binary, DepsMut, Env, MessageInfo, Response, StdResult};
use cw721_base::ContractError;
use cw721_base::{execute as cw721_execute, msg::InstantiateMsg as Cw721InstantiateMsg};

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: Cw721InstantiateMsg,
) -> StdResult<Response> {
    cw721_execute(deps, env, info, msg)
}
