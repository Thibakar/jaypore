import React, { Component } from "react";

class SpecialHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPrice:false,
    }
  }


  togglePrice=()=>{
    this.setState({
      showPrice:!this.state.showPrice
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="topNavMain cl-shadow cl-nav">
          <div className="innerTopNav">
            <div className="container">
              <div className="menuCategoriesColumn cl-ml-0">
                <div>
                  <h5 className="category-listing-header-title">Dresses</h5>
                  <span className="category-listing-header-subtitle">
                    Dresses with delicate prints breathable fabrics and a range of
                    colors
                </span>
                </div>
              </div>
              <div className="menuProfileColumn p-t-10">
                <ul>
                  <li>
                  <a href="#" className='a-rel'>
                    <div className="m-l-10 bg-white dropdown-btn select-middle cl-header-dropdown d-in-blk"
                    style={{width:138}} onClick={()=>this.togglePrice()}
                    > 
                      Price Range
                      </div>
                      <div className={this.state.showPrice?'price-range':'d-none'}>
                      <input type="range" id="price" name="price" min="0" max="1000" className='price-range-filter'/>
                      <div className='a-14-txt a-r-txt a-colr-21 a-txt-left a-mt-16 '>Rs. 696 - Rs. 20750</div>
                      <button className='apply-price a-14-txt'>Apply</button>
                      </div>
                  
                    </a>
                  </li>
                  <li>
                    <select className=" bg-white dropdown-btn ">
                      <option value="">Sort By</option>
                      <option value="new">Newest First</option>
                      <option value="old">Oldest First</option>
                      <option value="priceLow">Price (Low to High)</option>
                      <option value="priceHigh">Price (High to Low)</option>
                      <option value="discountHigh">Discount (High to Low)</option>
                      <option value="discountLow">Discount (Low to High)</option>
                      
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SpecialHeader;
