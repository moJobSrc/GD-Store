import React, { useEffect, useState } from 'react';
import styles from "./index.module.css";
import { useParams } from 'react-router-dom';
import { db } from '../firebaseInstance';
import { collection, addDoc, getDocs, doc, getDoc } from "firebase/firestore"


function Index() {

    // const { id } = useParams();
    const [drinks, setDrink] = useState([]);
    const [iceCream, setIceCream] = useState([]);

    useEffect(() => {
        const getDrink = async () => {
            const querySnapshot = await getDocs(collection(db, "drinks"));
            setDrink(querySnapshot.docs.map((doc) => ({ ...doc.data()})))
        }
        const getIceCream = async () => {
            const querySnapshot = await getDocs(collection(db, "icecream"));
            setIceCream(querySnapshot.docs.map((doc) => ({ ...doc.data()})))
        }
        getDrink()
        getIceCream()
    })

    return (
        <div className={styles.container}>
            <section className={ styles.containerSection }>
                <h2 className="category">ICE CREAM</h2>
                <ul className={ styles.itemlist }>
                    {/* <li class="item selected">
                        <img class="item_image" src="./images/ice1.png" alt="빠삐코"/>
                        <div class="item_tag">                        
                            <p class="item_name">빠삐코</p>
                            <p class="item_price">1000원</p>
                        </div>
                    </li> */}
                    {iceCream.map((item) => {
                        return (
                            <li key={item.name} className={styles.item}>
                                <img className={styles.item_image} src={item.imageUrl} alt={item.name}/>
                                <div className={styles.item_tag}>                        
                                    <p className={styles.item_name}>{item.name}</p>
                                    <p className={styles.item_price}>{item.price}원</p>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </section>

            <section>
                <h2 className="category">DRINK</h2>
                <ul className={ styles.itemlist }>
                    {drinks.map((item) => {
                        return (
                            <li key={item.name} className={styles.item}>
                                <img className={styles.item_image} src={item.imageUrl} alt={item.name}/>
                                <div className={styles.item_tag}>                        
                                    <p className={styles.item_name}>{item.name}</p>
                                    <p className={styles.item_price}>{item.price}원</p>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </section>

        </div>
    );
  }
  
  export default Index;
  