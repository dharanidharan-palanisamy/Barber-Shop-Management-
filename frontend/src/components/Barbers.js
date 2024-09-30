import { useEffect, useState } from 'react';

function Barber() {
    const [barbers, setBarbers] = useState([]);

    const changeStatus = async()=>{
        try {
            const response = await fetch("http://127.0.0.1:5000/updateStatus",{
                method : "PATCH",
                body : {
                    "Name":"",
                    "status":""
                }
            });

        } catch (error) {
            
        }
    }

    useEffect(() => {
        async function getBarbers() {
            try {
                const response = await fetch("http://127.0.0.1:5000/getBarbers");
                const data = await response.json();
                setBarbers(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getBarbers();
    }, []);

    return (
        <div>
            <div className="card-container">
                {barbers.map((barber) => (
                    <div key={barber.id} className="card">
                        <h3>{barber.Name}</h3>
                        <p><strong>Services offered:</strong> {barber.Services}</p>
                        <p><strong>Availability:</strong> {barber.isAvailable ? "Available" : "Not Available"}</p>
                        <div className="update-status-button" onClick={changeStatus}>
                            <p>Update status</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Barber;