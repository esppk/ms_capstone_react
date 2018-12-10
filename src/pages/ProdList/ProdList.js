import React, { Component } from "react";
import Card from "../../extraComponents/Card";
import "./prodList.css";

class ProdList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curPage: 1
    };
    this.goPage = this.goPage.bind(this);
  }

  async componentDidMount() {
    let prods = await this.props.products;
    console.log(prods);
  }

  goPage(page) {
    this.setState({ curPage: page });
  }

  render() {
    const len = this.props.products.length;
    let pages = Math.ceil(len / 12);

    return (
      <div>
        <h1>ProdList</h1>
        <div className="prodContainer">
          <div className="sidebar">siderbar function</div>

          <div className="prodGrid">
            {this.props.products
              .slice((this.state.curPage - 1) * 12, this.state.curPage * 12)
              .map((prod, idx) => {
                return (
                  <Card
                    name={prod.name}
                    imagelink={prod.imagelink}
                    id={(this.state.curPage - 1) * 12 + idx}
                  />
                );
              })}
          </div>
          <div className="pageControl">
            {Array(pages)
              .fill(1)
              .map((x, y) => {
                let numClass = "pageNum";
                if (x + y === this.state.curPage) {
                  numClass = "pageNum active";
                }
                return (
                  <span className={numClass} onClick={() => this.goPage(x + y)}>
                    {x + y}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProdList;
