import React from "react";
import "./boxes.css";
import Button from "./button";
export default class Boxes extends React.Component {
  render() {
    return (
      <div className="boxes-container">
        <div className="box box-1"> <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiU-o3xpcYEks5L0d5NjpsYipv_92RjgEFPLeuo7CX7BLoHl0IJ5ER9log2jQUL7A9U-gFom68L63vX4bY0IKF0hE67rKpTBLZDRck7V4"/><p>Airpod Pro 2+2nd Generation </p> <p>price : 9,000</p> <Button/>    </div>
        <div className="box box-2"><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKYSR9vvI4VJF6793Ic7zVL_HmeyAx0QV1JXyn7SsjAVMh01C3nlNayewY9LGIHZyZgDj-5JwKQw3cXBzz348AE_XMw3QB7REs3xSdZX8XEOI4K9z5spkd"/><p>Airpods Bluetooth Headset</p><p>price : 800</p> <Button/> </div>
        <div className="box box-3"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQA8f6KkrJKk7xOl7urT-MVwL_WXMbxWg26MhijQsVchh-nx0sm856S0_WthvtjtD8rzo0vYZvj0znQumH2Y3DxeXmtRvGP2y1BRNPgT7gs"/> <p>boAt Airdopes Alpha True Wireless </p>  <p>price : 1,500</p><Button/> </div>
        <div className="box box-4"><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS85qlJRFw8iPc2LYIN_hfcFH_YTLWc5fcU_M6BKCdiO77o4KiYDmFst4bVSsxU1raoY7ChP8yJwjSKevgoDrZPcXAvqum8bI1P30rrxnkzoPwyqlS3g3Yg"/>  <p>boAt Airdopes 192 Tws Earbuds</p> <p>price : 2,000</p><Button/> </div>
      </div>
    );
  }
}