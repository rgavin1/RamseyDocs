import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
    return (
        <Layout title="Projects" description="Projects Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <h1>
                    Project Page
                </h1>
                <br />
                <div>
                
                    <ul>
                        <h3>Future Projects</h3>
                        <ul>
                            <li>Raspberry PI - Weather Monitor</li>
                            <li>NBA stats Application</li>
                            <li>Workout App</li>
                            <li>Global Weather Application</li>
                            <li>Arduino Project - Aquaponics</li>
                        </ul>
                    
                    <h3>Current Projects</h3>
                    <ul>
                        <li>Weather Application **Not Hosted</li>
                        <li>Movie Application **Not Hosted</li>
                        <li>Twitter Clone Application **Not Hosted</li>
                    </ul>
                </ul>
                </div>
            </div>
        </Layout>
    );
}