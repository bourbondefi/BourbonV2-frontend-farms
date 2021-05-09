import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useBrrlTokenBalance'
import useI18n from 'hooks/useI18n'
import { getBrrlAddress } from 'utils/addressHelpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import CardValue from './CardValue'
import { useFarms, usePriceBrrlBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
`

const RowHighlighted = styled(Row)`
  background-color: ${({ theme }) => (theme.isDark ? '#36343c' : '#fbfbfb')};
  padding: 10px 5px;
  border-radius: 5px;
`

const BrrlStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getBrrlAddress())
  const farms = useFarms()
  const rbtPrice = usePriceBrrlBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = rbtPrice.times(circSupply)

  let rbtPerBlock = 0
  if (farms && farms[0] && farms[0].rbtPerBlock) {
    rbtPerBlock = new BigNumber(farms[0].rbtPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="lg" mb="24px">
          Bourbon Barrel Stats
        </Heading>
        <RowHighlighted>
          <Text fontSize="14px">
            <strong>
              {TranslateString(10004, 'Circulating Supply')}{' '}
              <span data-tip data-for="circulatingSupplyTooltip">
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            </strong>
            <ReactTooltip id="circulatingSupplyTooltip" effect="solid">
              <span>
                = {TranslateString(536, 'Total Minted')} - {TranslateString(10007, 'Total of token burned')}
              </span>
            </ReactTooltip>
          </Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </RowHighlighted>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">
            Total Burned
          </Text>
          <ReactTooltip id="totalBurnedTooltip" effect="solid">
            <span>{TranslateString(10007, 'Total of token burned')}</span>
          </ReactTooltip>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">New BRRL/block</Text>
          <Text bold fontSize="14px">
            1.5
          </Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default BrrlStats