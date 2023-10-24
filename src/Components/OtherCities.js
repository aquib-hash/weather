import React from 'react';

function OtherCities({ data }) {
    if (!data) return null;

    return (
        <div className="other-cities" style={{ marginTop: '20px', marginLeft: '20px' }}>
            {data.map(city => <div key={city.name} style={{ margin: '5px 0' }}>{city.name}: {city.temp}°C</div>)}
        </div>
    );
}

export default OtherCities;
