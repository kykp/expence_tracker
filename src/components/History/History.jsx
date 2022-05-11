import React from "react";
import {RiDeleteBin7Line} from "react-icons/ri"

const History = ({data, onDeleteItem = Function.prototype}) => {

        return (
            <div className="history container">
                <h2>History</h2>
                {data.map(el => {
                    return (
                        <div key={el.id} 
                            className={el.income
                                ? "history__item plus": "history__item minus"}>
                            <h3>{el.name}</h3>
                            <h3>{el.value}</h3>
                            <RiDeleteBin7Line onClick={() => onDeleteItem(el)} className="history__button"/>

                        </div>
                    )
                })}
                
            </div>
        )
    
}

export {History}