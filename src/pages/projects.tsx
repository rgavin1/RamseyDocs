import React from 'react';
import Layout from '@theme/Layout';

export default function Projects() {

    const itemStyles = {
        flex: '21%',
        textAlign: 'center'
    }
    return (
        <Layout title="Projects" description="Projects Page">
            <div
            // style={{
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     height: '50vh',
            //     fontSize: '20px',
            // }}
            >
                {/* <h1>
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
                </div> */}
                <header style={{
                    padding: '7% 14px',
                    background: '#32376b'
                }}>
                    <h1>Projects</h1>
                </header>
                <div style={{
                    display: 'flex', flexWrap: 'wrap', width: '90%',
                    margin: 'auto',
                    marginTop: '15px',
                    gap: '1%'
                }}>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                    <div style={{ flex: '32%', textAlign: 'center', padding: '5%', backgroundImage: 'url("https://open.spotifycdn.com/cdn/images/og-image.860da0d8.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginBottom: '15px' }}></div>
                </div>
            </div>
        </Layout>
    );
}