import React, { Component } from "react";

export default class CatInputs extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem = idx => {
    this.props.deleteItem(idx);
  };
  render() {
    return (
      <div>
        {this.props.accountBankDTOList.map((val, idx) => {
          let bankaccountId = `bankaccount-${idx}`,
            accountnameId = `accountname-${idx}`,
            banknameId = `bankname-${idx}`,
            bankbranchId = `bankbranch-${idx}`;
          return (
            <div key={idx}>
              <label htmlFor={bankaccountId}>
                {/* {`Cat #${idx + 1}`} */}
                Số tài khoản
              </label>
              <input
                type="text"
                name={bankaccountId}
                data-id={idx}
                id={bankaccountId}
                value={this.props.accountBankDTOList[idx].bankaccount}
                className="bankaccount"
              />
              <label htmlFor={accountnameId}>Tên tài khoản</label>
              <input
                type="text"
                name={accountnameId}
                data-id={idx}
                id={accountnameId}
                value={this.props.accountBankDTOList[idx].accountname}
                className="accountname"
              />
              <label htmlFor={banknameId}>Tên ngân hàng</label>
              <input
                type="text"
                name={banknameId}
                data-id={idx}
                id={banknameId}
                value={this.props.accountBankDTOList[idx].bankname}
                className="bankname"
              />
              <label htmlFor={bankbranchId}>Chi nhánh</label>
              <input
                type="text"
                name={bankbranchId}
                data-id={idx}
                id={bankbranchId}
                value={this.props.accountBankDTOList[idx].bankbranch}
                className="bankbranch"
              />
              <button value="Remove" onClick={() => this.deleteItem(val.idx)}>
                Xóa
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
