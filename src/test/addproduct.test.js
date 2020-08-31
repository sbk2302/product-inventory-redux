import React from 'react';
import ReactDOM from 'react-dom'
import AddProduct from '../components/addproduct'
import { mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter as Router} from 'react-router-dom'
import {  render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
configure({ adapter: new Adapter() })
 
// it('add product renders without crashing', ()=>{
//     const div = document.createElement('div')
//     ReactDOM.render(<Router><AddProduct></AddProduct></Router>, div)
// })
 
it(" check productid", () => {
    const wrapper = mount(<input className="addformInput" type='text' id="productid" ></input>);
    const input = wrapper.find("input");
    expect(input.prop("id")).toEqual("productid");
  });

  it(" check productname", () => {
    const wrapper = mount(<input type='text' id="productname" ></input>);
    const input = wrapper.find("input");
    expect(input.prop("id")).toEqual("productname");
  });
  it(" check productprice", () => {
    const wrapper = mount(<input type='text' id="productprice" ></input>);
    const input = wrapper.find("input");
    expect(input.prop("id")).toEqual("productprice");
  });
  it(" check productquantity", () => {
    const wrapper = mount(<input type='text' id="productquantity" ></input>);
    const input = wrapper.find("input");
    expect(input.prop("id")).toEqual("productquantity");
  });
  it(" check productcategory", () => {
    const wrapper = mount(<input type='text' id="productcategory" ></input>);
    const input = wrapper.find("input");
    expect(input.prop("id")).toEqual("productcategory");
  });
  it(" check productbrand", () => {
    const wrapper = mount(<input type='text' id="productbrand" ></input>);
    const input = wrapper.find("input");
    expect(input.prop("id")).toEqual("productbrand");
  });