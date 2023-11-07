import React from 'react'
import { dropdownData } from '../Data/Dropdown'

const Dropdown = () => {
    return (
        <div>
            {dropdownData.map(item => (
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "5px"
                }}
                    key={item.id}
                >
                    <p style={{ margin: 0, marginLeft: "5px" }}>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Dropdown