// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {remainingAmount: 2000}

  amountWithdraw = value => {
    this.setState(prevState => ({
      remainingAmount: prevState.remainingAmount - value,
    }))
  }

  render() {
    const {remainingAmount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="card">
          <div className="s-container">
            <p className="s">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="rupees-container">
            <p className="para2">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{remainingAmount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="amount">Withdraw</p>
          <p className="para2">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container">
            {denominationsList.map(eachButton => (
              <DenominationItem
                key={eachButton.id}
                denominationDetails={eachButton}
                amountWithdraw={this.amountWithdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
