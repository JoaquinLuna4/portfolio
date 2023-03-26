import React, { useEffect, useRef } from "react";

const FadeIn = ({ children }) => {
	const fadeInRef = useRef(null);

	const checkFadeIn = () => {
		if (fadeInRef.current) {
			const fadeInPosition = fadeInRef.current.getBoundingClientRect().top;
			const screenPosition = window.innerHeight / 2.3; // La fracción puede ajustarse para que los elementos aparezcan en diferentes momentos.

			if (fadeInPosition < screenPosition) {
				fadeInRef.current.classList.add("appear");
			} else {
				fadeInRef.current.classList.remove("appear");
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkFadeIn);
		return () => {
			window.removeEventListener("scroll", checkFadeIn);
		};
	}, []);

	return (
		<div ref={fadeInRef} className="fade-in">
			{children}
		</div>
	);
};

export default FadeIn;
