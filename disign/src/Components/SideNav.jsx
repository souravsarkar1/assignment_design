import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sidbarData } from '../Data/Sidenav';
import { AiOutlineSearch } from "react-icons/ai"
import { Dropdown } from 'react-bootstrap';
import { dropdownData } from '../Data/Dropdown';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="d-flex flex-column" style={{ width: '280px', height: '100vh', alignItems: "center", background: "#0b196b" }}>
            <div style={{ backgroundColor: "#2f9ede", width: "90%", margin: "7px", color: "#fff", padding: "5px" }}>
                <h1>LBMC</h1>
            </div>
            <ul className="nav flex-column"
                style={{
                    background: "#2f9ede",
                    height: "100vh",
                    width: "100%",
                }}
            >
                {sidbarData.map(item => (
                    <li className="nav-item nav-link active" >

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "5px",
                            borderRadius : "5px",
                            background : "#8f9ff7"

                        }}
                            key={item.id}
                        >
                            <div style={{
                                width: "40px"
                            }}>
                                <item.icon color='white' size={20} />
                            </div>
                            <p style={{ margin: 0, marginLeft: "5px", color: "white" }}>{item.title}</p>
                        </div>

                    </li>
                ))}

                <li className="nav-item nav-link active"

                    onClick={toggleDropdown}
                >

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "5px"
                    }}
                    >
                        <div style={{
                            width: "40px"
                        }}>
                            <AiOutlineSearch color='white' size={20} />
                        </div>
                        <p style={{ margin: 0, marginLeft: "5px", color: "white" }}>Search</p>
                    </div>

                </li>
                <Dropdown show={isOpen} onClose={() => setIsOpen(false)}>
                    <Dropdown.Menu style={{
                        background : "#8f9ff7"
    
                    }} >

                        {dropdownData.map(item => (
                            <Dropdown.Item href="#/action-3" key={item.id}>{item.title}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </div>
    );
};

export default Sidebar;
