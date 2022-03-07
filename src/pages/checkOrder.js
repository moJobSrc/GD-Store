import React, { useState } from 'react';
import "./checkOrder.module.css";
import { useNavigate } from 'react-router-dom';



function CheckOrder() {

    const navigate = useNavigate();

    const [orderNum, setNum] = useState('');
    
    const confirm = (e) => {
        e.preventDefault();
        navigate(`/orderProcess/${orderNum}`)
    }

    const onChange = (e) => {
        setNum(e.target.value);
    };

    return (
        <div id="container" >
            <h1>주문 확인</h1>
            <form action="" onSubmit={confirm}>
                <input type="number" placeholder="주문 번호" onChange={onChange} value={orderNum}/>
                <button type="submit">확인</button>
            </form>
        </div>
    );
  }
  
  export default CheckOrder;
  