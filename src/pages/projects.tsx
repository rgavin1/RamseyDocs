import React from 'react';
import Layout from '@theme/Layout';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Link, Container, Stack, Tooltip } from '@mui/material';

const weatherdashboard = require('../../static/img/weatherdashboard.png')
const movieApplication = require('../../static/img/movieApplication.png')
const twitterClone = require('../../static/img/twitterClone.png')
const defaultImage = require('../../static/img/defaultImage.png')

export type ProjectType = {
    title: string;
    create_date: string | null;
    modify_date: string;
    thumbnail: string;
    links: {
        github: string;
        application: string;
    },
    technologies?: string[];
}
// TODO: Add the tech stack
export const projects: ProjectType[] = [
    {
        title: "Streaming Clone",
        create_date: "",
        modify_date: "",
        thumbnail: movieApplication.default,
        links: {
            github: "https://github.com/rgavin1/MovieCloneTS",
            application: "https://movie-app-2-54538.web.app/"
        },
        technologies: ["ReactJS", "TMDB API", "Firebase"]
    },
    {
        title: "Weather Dashboard",
        create_date: "",
        modify_date: "",
        thumbnail: weatherdashboard.default,
        links: {
            github: "https://github.com/rgavin1/WeatherAppDarkSky",
            application: "https://weatherapplication-126ce.web.app/"
        },
    },
    {
        title: "Co2 Emissions",
        create_date: "",
        modify_date: "",
        thumbnail: null,
        links: {
            github: "https://github.com/rgavin1/co2EmissionsByCountry",
            application: "https://weatherapplication-126ce.web.app/"
        },
    },
    {
        title: "Twitter Clone",
        create_date: "",
        modify_date: "",
        thumbnail: twitterClone.default,
        links: {
            github: "",
            application: "https://weatherapplication-126ce.web.app/"
        },
    },
    {
        title: "Real Estate Clone",
        create_date: "",
        modify_date: "",
        thumbnail: null,
        links: {
            github: "",
            application: "https://weatherapplication-126ce.web.app/"
        },
    }
]

export const ProjectCard = (details: ProjectType) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="295"
                image={details.thumbnail || defaultImage.default}
                alt="weather-dashboard"
                sx={{ objectFit: 'fill' }}
            />
            <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="end">
                    <Typography variant="subtitle1" component="div">
                        {details.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details.create_date}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Tooltip title="Open Application" arrow>
                    <Link
                        // component="button"
                        target="_blank"
                        variant="body2"
                        href={details.links.application}
                    >
                        View Application
                    </Link>
                </Tooltip>
                <Tooltip title="Code" arrow>
                    <Link
                        // component="button"
                        target="_blank"
                        variant="body2"
                        href={details.links.github}
                    >
                        Review Code
                    </Link>
                </Tooltip>
            </CardActions>
        </Card>
    )
}

const ProjectsContainer = () => {
    return (
        <Container maxWidth="xl" style={{ padding: '30px' }}>
            <Grid container spacing={5} columns={12}>
                {
                    projects.map((project: ProjectType) =>
                        <Grid item xs={4}>
                            <ProjectCard title={project.title} create_date={project.create_date} modify_date={project.modify_date} thumbnail={project.thumbnail} links={{
                                github: project.links.github,
                                application: project.links.application
                            }} />
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    )
}

export default function Projects() {

    const itemStyles = {
        flex: '21%',
        textAlign: 'center'
    }
    return (
        <Layout title="Projects" description="Projects Page">
            {/* <div
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
            {/* <header style={{
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
        </div>  */}
            < ProjectsContainer />
        </Layout>
    );
}