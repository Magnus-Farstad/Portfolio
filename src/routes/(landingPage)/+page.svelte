<script lang="ts">
	import Particles from '$lib/particles.svelte';
	import ProjectCard from '$lib/project-card.svelte';
	import projects from '$lib/assets/projects.json';
	import Location from '$lib/assets/location.png';
</script>

<div class="container">
	<div class="hero-container">
		<Particles />
		<h1>Hi, I'm Magnus</h1>
		<div class="location">
			<img src={Location} alt="Location indicator" />
			<div>Oslo/Trondheim, Norway</div>
		</div>
		<p>
			Computer science student and developer <br />who loves to create cool stuff! Learn more
			<span><a href="/about">about me</a></span>
		</p>
	</div>
	<div class="project-container">
		{#each projects.projects as project}
			<ProjectCard
				logo={project.logo}
				img={project.img}
				title={project.title}
				subtitle={project.subtitle}
				description={project.description}
				platform={project.platform}
				isLive={project.isLive}
				id={project.id}
				techStack={project.techStack}
				text={project.text}
				detailedImage={project.detailedImage}
				linkToSite={project.linkToSite}
			/>
		{/each}
	</div>
</div>

<style>
	.container {
		position: relative;
		text-align: center;
		animation: fadeIn 0.7s linear;
	}
	.hero-container {
		margin-block: 170px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 32px;
		position: relative;
	}

	a {
		text-decoration: none;
		color: #323235;
		transition: border-radius 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
			box-shadow 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
		box-shadow: 0 2px #bdbdc5, inset 0 -1px #bdbdc5;

		&:hover {
			color: #0e0e0f;
			border-radius: 6px;
			box-shadow: 0 0 0 2px rgba(189, 189, 197, 0.3), inset 0 -90px rgba(189, 189, 197, 0.3);
			cursor: pointer;
		}
	}

	h1 {
		font-size: 70px;
		font-weight: 700;
		background: linear-gradient(27deg, #969699, #1e1e22);
		background-clip: text;
		color: transparent;
		letter-spacing: -1.25px;
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

	@media screen and (max-width: 600px) {
		h1 {
			font-size: 50px;
		}
		.hero-container {
			padding-inline: 20px;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
