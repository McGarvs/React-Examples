import './App.css';

import People from './People';

import { useState } from 'react';

const initialData = [
    {
        id: "1276",
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: "787",
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];



function App() {
    const [data, setData] = useState(initialData);
    function updateData(deleteid){
        setData(data.filter(element => element.id !== deleteid))
    }
    function updateField(personID, field, value){
        setData(data.map( (element) =>
        (personID === element.id) ? {...element, [field]:value} : {...element}))
        console.log(field, value)
    }
    return <div>
        <People list={data} onDataChange={updateData} onFieldChange={updateField}/></div>;
}

export default App;
