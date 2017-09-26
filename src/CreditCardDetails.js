var React = require('react')
var MaskedInput = require('react-maskedinput')

var CreditCardDetails = React.createClass({
  state: {
    card: '',
    expiry: '',
    ccv: ''
  },

  _onChange(e) {
    var stateChange = {}
    stateChange[e.target.name] = e.target.value
    this.setState(stateChange)
  },

  render() {
    return <div className="CreditCardDetails">
      <label>
        Card Number:{' '}
        <MaskedInput mask="1111 1111 1111 1111" name="card" size="20" onChange={this._onChange}/>
      </label>
      <label>
        Expiry Date:{' '}
        <MaskedInput mask="11/1111" name="expiry" placeholder="mm/yyyy" onChange={this._onChange}/>
      </label>
      <label>
        CCV:{' '}
        <MaskedInput mask="111" name="ccv" onChange={this._onChange}/>
      </label>
    </div>
  }
})

export default CreditCardDetails;


