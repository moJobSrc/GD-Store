import React, { useEffect, useState } from 'react';
import styles from "./orderProcess.module.css";
import { useParams } from 'react-router-dom';
import { db } from '../firebaseInstance';
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore"


function OrderProcess() {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [exist, setExist] = useState(false);

    useEffect(() => {
        const getOrder = async () => {
            const docRef = doc(db, "orderRequest", id);
            const docSnap = await getDoc(docRef);
            setOrder(docSnap.data())
            setExist(docSnap.exists())
        }
        getOrder()
    })

    function getStatus() {
        switch (order.status) {
            case "wait":
                return "준비중"
            default:
                break;
        }
    }

    return (
        <div id="container" className={styles.container}>
            <h1>주문 확인</h1>
            <div id="orderContent" className={styles.orderContent}>
                {
                    (function() {
                        if (exist === false) {
                            // console.log("false")
                            return <p>정보가 없습니다.</p>
                        } else {
                            return (
                                <div className={ styles.p }>
                                    <p>주문 번호 : { id }</p>
                                    <p>금액 : { order.price }</p>
                                    <p>학번 : { order.student }</p>
                                    <p>상태 : { getStatus() }</p>
                                </div>
                            )
                        }
                    })()
                }
            </div>
            <p id="comment"></p>
        </div>
    );
  }
  
  export default OrderProcess;
  