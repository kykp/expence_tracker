import React from "react";

const History = ({data}) => {
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
                        </div>
                    )
                })}
                
            </div>
        )
    
}

export {History}