// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, amountWithdraw} = props
  const {value} = denominationDetails

  const onDebited = () => {
    amountWithdraw(value)
  }
  return (
    <li className="list-style">
      <button type="button" className="button" onClick={onDebited}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
