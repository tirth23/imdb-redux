import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {
	const [bannerImage, setBannerImage] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/trending/movie/day?api_key=795a170375bd0d0eea11dcb26e4d1813&language=en-US&page=1"
			)
			.then((response) => {
				console.log("Films", response.data);
				const firstMovie = response.data.results[0];
				const firstMovieTitle = firstMovie.title;
				const firstMoviePoster = firstMovie.backdrop_path;
				setBannerImage(
					`https://image.tmdb.org/t/p/original${firstMoviePoster}`
				);
				setTitle(firstMovieTitle);
			});
	}, []);

	return (
		<div
			className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
			style={{
				backgroundImage: `url(${bannerImage})`,
			}}
		>
			<div className="text-white w-full text-center text-2xl">{title}</div>
		</div>
	);
};

export default Banner;
