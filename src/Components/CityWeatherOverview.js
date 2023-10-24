import React from 'react';

function CityWeatherOverview({ data }) {
    if (!data) return <div>Loading...</div>;

    return (
        <div className="city-overview" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>{data.location.name}</h2> {/* Access the city name from data.location */}
            <h1>{data.current.temp_c}°C</h1> {/* Access the current temperature */}
            <p>{data.location.localtime}</p> {/* Access other details like localtime */}
        </div>
    );
}

export default CityWeatherOverview;
