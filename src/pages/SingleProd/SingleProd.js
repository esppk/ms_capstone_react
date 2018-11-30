import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { D_URL } from "../../constants/constants";
import {
  mapDispatchToProps,
  mapStateToProps
} from "../../reducers/receivedData";
import "./singleprod.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: {}
    };
  }
  async componentDidMount() {
    if (!this.props.products[this.props.match.params.id]) {
      let data = await axios.get(D_URL);
      let products = [];
      data.data.forEach(d => {
        d.subcategories.forEach(dd => {
          dd.items.forEach(ddd => {
            products.push(ddd);
          });
        });
      });
      this.setState({ prod: products[this.props.match.params.id] });
    } else {
      this.setState({ prod: this.props.products[this.props.match.params.id] });
    }
  }

  render() {
    // console.log(props);
    //const prod = this.props.products[this.props.match.params.id];

    return (
      <div>
        <div className="mainframe">
          <div className="left">
            <img
              src={this.state.prod.imagelink}
              alt=""
              width="500"
              height="400"
            />
          </div>
          <div className="right">
            <h1>Product {this.state.prod.name}</h1>
            <span>Price: ${this.state.prod.price} </span>
            <br />
            <span>Rating: {this.state.prod.rating} </span>
            <br />
            <span> {this.state.prod.stock} still in stocks</span>
          </div>
        </div>

        <p>{this.state.prod.description}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
