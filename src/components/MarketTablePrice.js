import React from "react";
import { FormGroup, Radio } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import axios from "axios";
const MarketTablePrice = ({ changedPrice }) => {
  return (
    <div>
      <h5>Order</h5>

      <FormGroup
        onChange={(e) => changedPrice(e.target.value)}
        controlId="formControlsSelect"
      >
        <Radio name="radioGroup" inline value="1h">
          1h
        </Radio>
        <Radio name="radioGroup" inline value="24h">
          24h
        </Radio>
        <Radio name="radioGroup" inline value="7d">
          7d
        </Radio>
        <Radio name="radioGroup" inline value="14d">
          14d
        </Radio>
        <Radio name="radioGroup" inline value="30d">
          30d
        </Radio>
        <Radio name="radioGroup" inline value="200d">
          200d
        </Radio>
        <Radio name="radioGroup" inline value="1y">
          1y
        </Radio>
      </FormGroup>
      {/* ))} */}
    </div>
  );
};

export default MarketTablePrice;
