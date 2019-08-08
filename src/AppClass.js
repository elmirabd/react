import React, { useState, useEffect } from 'react';


function App({ xose, click }) {
    const [data, setData] = useState(0);

    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('componenWillUnmount')
        }
    }, []);

    useEffect(() => {
        console.log('data')
    }, [data]);

    return (
        <div>
            I am a child
            { xose }
            { click }
        </div>
    );
}

export default App;


