import {
  CollateralDeposit as CollateralDepositEvent,
  GHODelegate as GHODelegateEvent,
  MintedGHO as MintedGHOEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Withdrawal as WithdrawalEvent
} from "../generated/ChainGHOn/ChainGHOn"
import {
  CollateralDeposit,
  GHODelegate,
  MintedGHO,
  OwnershipTransferred,
  Withdrawal
} from "../generated/schema"

export function handleCollateralDeposit(event: CollateralDepositEvent): void {
  let entity = new CollateralDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.totalOfCollateralDeposited = event.params.totalOfCollateralDeposited

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGHODelegate(event: GHODelegateEvent): void {
  let entity = new GHODelegate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.delegate = event.params.delegate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintedGHO(event: MintedGHOEvent): void {
  let entity = new MintedGHO(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.totalOfGHOMinted = event.params.totalOfGHOMinted

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawal(event: WithdrawalEvent): void {
  let entity = new Withdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount
  entity.totalOfCollateralDeposited = event.params.totalOfCollateralDeposited

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
