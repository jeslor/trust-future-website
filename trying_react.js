

class LikeButton extends React.Component {
    state = {
        remainingAmount: 1000,
        addedAmount: 4
    }


    onChangehandler = event => {
        this.setState({
            ...this.state,
            addedAmount: event.target.value
        })
    }

    onSubmitHandler = event => {
        prevent.default()
        const enteredAmount = this.state.addedAmount;
        this.setState({
            ...this.state,
            remainingAmount: remainingAmount - enteredAmount
        })
    }



    render() {

        return (
            <div>
                <from onSubmit={this.onSubmitHandler}>
                    <h3>Remaining = {this.state.remainingAmount}</h3>
                    <input type="number" placeholder="Enter Amount" onChange={this.onChangehandler} value={this.state.addedAmount} />
                    <button> Donate</button>
                </from>
            </div>
        )
    }



}
ReactDOM.render(<LikeButton />, document.getElementById('react-button'))