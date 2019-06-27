import React from 'react';
import {Col, FormGroup, Label, Input, InputGroupAddon, InputGroup} from 'reactstrap';

import "./index.css"
const Step = ({data, step, onChange, shipping, tax, shippingRegion}) => {
    let inputs = [];
    //check for input type, step1 has text inputs while step2 includes checkbox
    if (step === 1) {
        for (let i in data) {
            inputs.push(
                <FormGroup row className={"inputGroup"} key={i.toString()}>
                    <Col sm={10}>
                        {/*<Label for="exampleSelect">{i}</Label>*/}
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">{i}</InputGroupAddon>
                            <Input type="text" name="tax_id" id="exampleSelect" value={data[i]} onChange={onChange("step1")} name={i}
                               />
                        </InputGroup>
                    </Col>
                </FormGroup>
                )
        }
    }
    return (
        <div>
            {inputs.map(i => i)}
            { step === 2 &&
                <>
                    <FormGroup row className={"inputGroup"}>
                        <Col sm={10}>
                            <Label for="exampleSelect">Select Shipping Methods</Label>
                            <Input type="select" name="shipping_id" id="exampleSelect" value={data.shipping_id} onChange={onChange("step2")}>
                                {  shipping.map( i => {
                                    return  <option value={i.shipping_id} key={i.shipping_id * 13}>{i.shipping_type}</option>
                                })
                                }
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className={"inputGroup"}>
                        <Col sm={10}>
                            <Label for="exampleSelect">Shipping Region</Label>
                            <Input type="select" name="shipping_region" id="exampleSelect" value={data.shipping_region} onChange={onChange("step2")}>
                                {  shippingRegion.map( i => {
                                    if(i.shipping_region_id !== 1)
                                        return  <option value={i.shipping_region_id} key={i.shipping_region_id}>{i.shipping_region}</option>
                                    return null
                                })
                                }
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row className={"inputGroup"}>
                        <Col sm={10}>
                            <Label for="exampleSelect">Tax</Label>
                            <Input type="select" name="tax_id" id="exampleSelect" value={data.tax_id} onChange={onChange("step2")}>
                                {  tax.map( i => {
                                    return  <option value={i.tax_id} key={i.tax_id * 43}>{i.tax_type}</option>
                                })
                                }
                            </Input>
                        </Col>
                    </FormGroup>
                </>}
        </div>
    );
};

export default Step;
