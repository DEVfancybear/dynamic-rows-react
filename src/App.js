import React from "react";
import CatInputs from "./CatInputs";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBankDTOList: [
        {
          idx: 1,
          bankaccount: "",
          accountname: "",
          bankname: "",
          bankbranch: ""
        }
      ]
    };
  }

  handleChange = e => {
    if (
      ["bankaccount", "accountname", "bankname", "bankbranch"].includes(
        e.target.className
      )
    ) {
      let accountBankDTOList = [...this.state.accountBankDTOList];
      accountBankDTOList[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ accountBankDTOList }, () =>
        console.log(this.state.accountBankDTOList)
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
  addCat = e => {
    this.setState({
      accountBankDTOList: [
        ...this.state.accountBankDTOList,
        {
          idx: this.state.accountBankDTOList.length + 1,
          bankaccount: "",
          accountname: "",
          bankname: "",
          bankbranch: ""
        }
      ]
    });
  };
  deleteItem = idx => {
    console.log(idx);
    // var index = -1;
    // var clength = this.state.accountBankDTOList.length;
    // for (var i = 0; i < clength; i++) {
    //   if (this.state.accountBankDTOList[i].idx === idx) {
    //     index = i;
    //     break;
    //   }
    // }
    // this.state.accountBankDTOList.splice(index, 1);
    // this.setState({ accountBankDTOList: this.state.accountBankDTOList });
    let test = [...this.state.accountBankDTOList];
    let test1 = test.filter(item=>item.idx !==idx);
    this.setState({
      accountBankDTOList: test1
    })
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    let { accountBankDTOList } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <button onClick={this.addCat}>Add new cat</button>
        <CatInputs
          deleteItem={idx => this.deleteItem(idx)}
          accountBankDTOList={accountBankDTOList}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
