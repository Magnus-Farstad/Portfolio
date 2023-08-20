<script lang="ts">
	import Particles from '$lib/particles.svelte';
	import ProjectCard from '$lib/project-card.svelte';
	import projects from '$lib/assets/projects.json';
	import ElectionLogo from '$lib/assets/Election-logo.png';
	import ElectionPreview from '$lib/assets/Election-preview.png';
	import ProperateLogo from '$lib/assets/Properate-logo.png';
	import ProperatePreview from '$lib/assets/Properate-preview.png';
	import SpotifyLogo from '$lib/assets/Spotify_Logo_RGB_Green_1.png';
	import SpotifyPreview from '$lib/assets/Stats-for-spotify.png';
	import Location from '$lib/assets/location.png';

	const logoArray = [
		{ logo: SpotifyLogo, preview: SpotifyPreview },
		{ logo: ElectionLogo, preview: ElectionPreview },
		{ logo: ProperateLogo, preview: ProperatePreview }
	];
</script>

<div class="container">
	<div class="hero-container">
		<Particles />
		<h1>Hi, I'm <span>Magnus</span></h1>
		<div class="location">
			<img src={Location} alt="Location indicator" />
			<div>Oslo/Trondheim, Norway</div>
		</div>
		<p>Computer scientist student and developer <br />who loves to create cool stuff!</p>
	</div>
	<div class="project-container">
		{#each projects.projects as project, index}
			<ProjectCard
				logo={logoArray[index].logo}
				image={logoArray[index].preview}
				title={project.title}
				subtitle={project.subtitle}
				description={project.description}
				platform={project.platform}
				isLive={project.isLive}
			/>
		{/each}
	</div>
</div>

<style>
	.container {
		position: relative;
		text-align: center;
	}
	.hero-container {
		margin-block: 170px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 32px;
	}
	h1 {
		font-size: 70px;
		font-weight: 700;
		background: linear-gradient(27deg, #969699, #1e1e22);
		background-clip: text;
		color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		width: fit-content;
		margin: 0;
	}
	.location {
		color: #5e5e63;
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 5px;
	}
	p {
		color: #5e5e63;
		text-align: center;
		font-weight: 400;
		line-height: normal;
		margin: 0;
	}
	.project-container {
		margin-top: 150px;
		align-items: center;
		padding: 0 30px;
		display: flex;
		flex-direction: column;
		gap: 90px;
	}
</style>
