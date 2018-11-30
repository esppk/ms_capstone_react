import React, { Component } from "react";
import Card from "../../extraComponents/Card";
import "./prodList.css";

class ProdList extends Component {
  async componentDidMount() {
    let prods = await this.props.products;
    console.log(prods);
  }

  render() {
    return (
      <div>
        <h1>ProdList</h1>
        <div className="prodContainer">
          <div className="sidebar">siderbar function</div>

          <div className="prodGrid">
            {this.props.products.slice(0, 10).map(prod => {
              return <Card name={prod.name} imagelink={prod.imagelink} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProdList;
