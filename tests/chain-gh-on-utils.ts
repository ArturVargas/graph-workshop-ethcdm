import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CollateralDeposit,
  GHODelegate,
  MintedGHO,
  OwnershipTransferred,
  Withdrawal
} from "../generated/ChainGHOn/ChainGHOn"

export function createCollateralDepositEvent(
  sender: Address,
  amount: BigInt,
  totalOfCollateralDeposited: BigInt
): CollateralDeposit {
  let collateralDepositEvent = changetype<CollateralDeposit>(newMockEvent())

  collateralDepositEvent.parameters = new Array()

  collateralDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  collateralDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  collateralDepositEvent.parameters.push(
    new ethereum.EventParam(
      "totalOfCollateralDeposited",
      ethereum.Value.fromUnsignedBigInt(totalOfCollateralDeposited)
    )
  )

  return collateralDepositEvent
}

export function createGHODelegateEvent(
  sender: Address,
  amount: BigInt,
  delegate: Address
): GHODelegate {
  let ghoDelegateEvent = changetype<GHODelegate>(newMockEvent())

  ghoDelegateEvent.parameters = new Array()

  ghoDelegateEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  ghoDelegateEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  ghoDelegateEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )

  return ghoDelegateEvent
}

export function createMintedGHOEvent(
  sender: Address,
  amount: BigInt,
  totalOfGHOMinted: BigInt
): MintedGHO {
  let mintedGhoEvent = changetype<MintedGHO>(newMockEvent())

  mintedGhoEvent.parameters = new Array()

  mintedGhoEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintedGhoEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  mintedGhoEvent.parameters.push(
    new ethereum.EventParam(
      "totalOfGHOMinted",
      ethereum.Value.fromUnsignedBigInt(totalOfGHOMinted)
    )
  )

  return mintedGhoEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createWithdrawalEvent(
  receiver: Address,
  amount: BigInt,
  totalOfCollateralDeposited: BigInt
): Withdrawal {
  let withdrawalEvent = changetype<Withdrawal>(newMockEvent())

  withdrawalEvent.parameters = new Array()

  withdrawalEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "totalOfCollateralDeposited",
      ethereum.Value.fromUnsignedBigInt(totalOfCollateralDeposited)
    )
  )

  return withdrawalEvent
}
