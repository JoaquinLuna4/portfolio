import React, { useState } from "react";
import UseAnimations from "react-useanimations";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import HtmlOutlinedIcon from "@mui/icons-material/HtmlOutlined";
import CssOutlinedIcon from "@mui/icons-material/CssOutlined";
import JavascriptOutlinedIcon from "@mui/icons-material/JavascriptOutlined";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import arrowDown from "react-useanimations/lib/arrowDown";
import ImgMediaCard from "./components/ImgMediaCard";
import screenshot_Countdown from "./assets/images/Captura-de-pantalla .png";
import screenshot_Advicegenerator from "./assets/images/screenshot_Advicegenerator.png";
import screenshot_Linktreeclone from "./assets/images/screenshot_Linktreeclone.png";
import screenshot_Todolist from "./assets/images/screenshot_Todolist.png";

function App() {
	return (
		<div className="App">
			<div className="home">
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
			<div className="projects" id="projects">
				<div className="projects_container">
					<a href="https://countdown-timer-qneszs6ui-joaquinluna4.vercel.app/">
						<ImgMediaCard
							title="Countdown Timer"
							description="Este proyecto es un challenge de Frontend Mentor el cual consiste en una web
										con un contador de tiempo regresivo intentando igualar el diseño propuesto lo mas similar posible"
							img={screenshot_Countdown}
						/>
					</a>
					<a href="https://advice-generator-app-liart-pi.vercel.app/">
						<ImgMediaCard
							title="Advice Generator"
							description="Este proyecto es un challenge de Frontend Mentor el cual consume una API y genera consejos aleatorios
									 intentando igualar el diseño propuesto lo mas similar posible"
							img={screenshot_Advicegenerator}
						/>
					</a>
					<a href="https://linktree-clone-joaquinluna4.vercel.app/">
						<ImgMediaCard
							title="LinkTree Clone"
							description="Este proyecto es una web de links importantes de un usuario en el cual se
									implementó utilizando NextJs y GoogleSheet como base de datos"
							img={screenshot_Linktreeclone}
						/>
					</a>
					<a href="https://taskiemanager.web.app/">
						<ImgMediaCard
							title="To do list"
							description="Este proyecto es un To do list el cual fue implementado en ReactJs utilizando localstorage para
									el registro de cada To do"
							img={screenshot_Todolist}
						/>
					</a>
				</div>
			</div>
			<div className="projects" id="about">
				<div className="about_container">
					<h1>ABOUT ME</h1>
					<body>
						<main>
							<h2>Joaquin Luna</h2>
							<h3>Desarrollador Frontend</h3>

							<p>
								¡Hola! Soy un desarrollador de Frontend apasionado por crear
								experiencias de usuario atractivas y funcionales utilizando
								tecnologías modernas como ReactJS, HTML, CSS y JavaScript. He
								trabajado en varios proyectos web y móviles, lo que me ha
								permitido obtener una amplia experiencia en el desarrollo de
								aplicaciones responsivas y escalables. Me encanta trabajar en
								equipo y colaborar con otros desarrolladores para llevar
								nuestras ideas a la realidad. También me gusta estar al tanto de
								las últimas tendencias y tecnologías en el mundo del desarrollo
								web, por lo que siempre estoy buscando oportunidades para
								aprender y mejorar mis habilidades. Soy una persona curiosa y
								apasionada por mi trabajo, y creo que esto se refleja en mi
								capacidad para resolver problemas y entregar resultados de alta
								calidad.
							</p>
							<Divider>
								<Chip label="SOCIAL" />
							</Divider>
							<footer>
								<a href="https://www.linkedin.com/in/joaquin-luna/">
									<LinkedInIcon fontSize="large" />
								</a>
								<a href="https://github.com/JoaquinLuna4">
									<GitHubIcon fontSize="large" />
								</a>
								<a href="mailto:joaquinfluna4@gmail.com?Subject=Vi%20tu%20portfolio">
									<ContactMailIcon fontSize="large" />
								</a>
							</footer>
						</main>
						<Divider orientation="vertical" flexItem></Divider>
						<aside>
							<h3>Tecnologías </h3>
							<ul>
								<li>
									<ApiOutlinedIcon fontSize="large" />
									ReactJs
								</li>
								<li>
									<JavascriptOutlinedIcon fontSize="large" />
									Javascript
								</li>
								<li>
									<HtmlOutlinedIcon fontSize="large" />
									HTML
								</li>
								<li>
									<CssOutlinedIcon fontSize="large" />
									CSS
								</li>
								<li>
									<ApiOutlinedIcon fontSize="large" />
									API
								</li>
							</ul>
						</aside>
					</body>
				</div>
			</div>
		</div>
	);
}

export default App;
