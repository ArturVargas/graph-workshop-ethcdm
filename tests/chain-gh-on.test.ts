import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CollateralDeposit } from "../generated/schema"
import { CollateralDeposit as CollateralDepositEvent } from "../generated/ChainGHOn/ChainGHOn"
import { handleCollateralDeposit } from "../src/chain-gh-on"
import { createCollateralDepositEvent } from "./chain-gh-on-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let totalOfCollateralDeposited = BigInt.fromI32(234)
    let newCollateralDepositEvent = createCollateralDepositEvent(
      sender,
      amount,
      totalOfCollateralDeposited
    )
    handleCollateralDeposit(newCollateralDepositEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CollateralDeposit created and stored", () => {
    assert.entityCount("CollateralDeposit", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CollateralDeposit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CollateralDeposit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "CollateralDeposit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalOfCollateralDeposited",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
