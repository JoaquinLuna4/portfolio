import React from "react";
import UseAnimations from "react-useanimations";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import arrowDown from "react-useanimations/lib/arrowDown";
import ImgMediaCard from "./components/ImgMediaCard";
import Navbar from "./components/navbar.js";

import FadeIn from "./utils/FadeIn";

//SKILLS LOGOS
import reactlogo from "./assets/images/react.svg";
import htmllogo from "./assets/images/html.svg";
import javascriptlogo from "./assets/images/javascript.svg";
import csslogo from "./assets/images/css.svg";
import apilogo from "./assets/images/api.svg";
// SCREENSHOTS PROYECTS
import screenshot_Countdown from "./assets/images/Captura-de-pantalla .png";
import screenshot_Advicegenerator from "./assets/images/screenshot_Advicegenerator.png";
import screenshot_Linktreeclone from "./assets/images/screenshot_Linktreeclone.png";
import screenshot_Todolist from "./assets/images/screenshot_Todolist.png";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<div className="home" id="home">
				<div className="container">
					<div className="welcome">
						<h1>Welcome to my portfolio </h1>
					</div>
					<div className="personal-info">
						<h2>Frontend Developer</h2>
						<h3>Joaquin Luna</h3>
					</div>
					<div className="bg-diagonal"></div>
					<footer className="nextpage">
						<a href="#projects">
							<UseAnimations animation={arrowDown} size={30} />
						</a>
					</footer>
				</div>
			</div>
			<FadeIn>
				<div className="projects" id="projects">
					<div className="projects_container">
						<a
							className="projects_card"
							href="https://countdown-timer-qneszs6ui-joaquinluna4.vercel.app/"
						>
							<ImgMediaCard
								title="Countdown Timer"
								description="Este proyecto es un challenge de Frontend Mentor el cual consiste en una web
										con un contador de tiempo regresivo intentando igualar el diseño propuesto lo mas similar posible"
								img={screenshot_Countdown}
							/>
						</a>
						<a
							className="projects_card"
							href="https://advice-generator-app-liart-pi.vercel.app/"
						>
							<ImgMediaCard
								title="Advice Generator"
								description="Este proyecto es un challenge de Frontend Mentor el cual consume una API y genera consejos aleatorios
									 intentando igualar el diseño propuesto lo mas similar posible"
								img={screenshot_Advicegenerator}
							/>
						</a>
						<a
							className="projects_card"
							href="https://linktree-clone-joaquinluna4.vercel.app/"
						>
							<ImgMediaCard
								title="LinkTree Clone"
								description="Este proyecto es una web de links importantes de un usuario en el cual se
									implementó utilizando NextJs y GoogleSheet como base de datos"
								img={screenshot_Linktreeclone}
							/>
						</a>
						<a className="projects_card" href="https://taskiemanager.web.app/">
							<ImgMediaCard
								title="To do list"
								description="Este proyecto es un To do list el cual fue implementado en ReactJs utilizando localstorage para
									el registro de cada To do"
								img={screenshot_Todolist}
							/>
						</a>
					</div>
				</div>
			</FadeIn>
			<FadeIn>
				<div className="projects" id="about">
					<div className="about_container">
						<h1>ABOUT ME</h1>
						<div className="about_body">
							<main>
								<h2>Joaquin Luna</h2>
								<h3>Desarrollador Frontend</h3>

								<p className="about_content">
									¡Hola! Soy un desarrollador de Frontend apasionado por crear
									experiencias de usuario atractivas y funcionales utilizando
									tecnologías modernas como ReactJS, HTML, CSS y JavaScript. He
									trabajado en varios proyectos web y móviles, lo que me ha
									permitido obtener una amplia experiencia en el desarrollo de
									aplicaciones responsivas y escalables. Me encanta trabajar en
									equipo y colaborar con otros desarrolladores para llevar
									nuestras ideas a la realidad. También me gusta estar al tanto
									de las últimas tendencias y tecnologías en el mundo del
									desarrollo web, por lo que siempre estoy buscando
									oportunidades para aprender y mejorar mis habilidades. Soy una
									persona curiosa y apasionada por mi trabajo, y creo que esto
									se refleja en mi capacidad para resolver problemas y entregar
									resultados de alta calidad.
								</p>
								<Divider>
									<Chip label="CONTACTO" size="large" />
								</Divider>
								<footer className="about_footer">
									<a href="https://www.linkedin.com/in/joaquin-luna/">
										{/* <LinkedInIcon fontSize="large" /> */}
										<p>LinkedIn</p>
									</a>
									<Divider />

									<a href="https://github.com/JoaquinLuna4">
										{/* <GitHubIcon fontSize="large" /> */}
										<p>Github</p>
									</a>
									<Divider />

									<a href="mailto:joaquinfluna4@gmail.com?Subject=Vi%20tu%20portfolio">
										{/* <ContactMailIcon fontSize="large" /> */}
										<p>joaquinfluna4@gmail.com</p>
									</a>
									<Divider />
								</footer>
							</main>
							<Divider orientation="vertical" flexItem></Divider>
							<aside>
								<h3>SKILLS </h3>
								<ul>
									<li>
										<img
											src={reactlogo}
											alt="skill-logo"
											className="aside_logos"
										></img>
										ReactJs
									</li>
									<li>
										<img
											src={javascriptlogo}
											alt="skill-logo"
											className="aside_logos"
										></img>
										Javascript
									</li>
									<li>
										<img
											src={htmllogo}
											alt="skill-logo"
											className="aside_logos"
										></img>
										HTML
									</li>
									<li>
										<img
											src={csslogo}
											alt="skill-logo"
											className="aside_logos"
										></img>
										CSS
									</li>
									<li>
										<img
											src={apilogo}
											alt="skill-logo"
											className="aside_logos"
										></img>
										API
									</li>
								</ul>
							</aside>
						</div>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}

export default App;
