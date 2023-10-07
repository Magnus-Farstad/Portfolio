<script lang="ts">
	import ProjectInfoCard from '$lib/project-info-card.svelte';
	import type { Project } from '$lib/store/project-store';
	import projects from '$lib/assets/projects.json';
	import { page } from '$app/stores';

	console.log($page);
	const project: Project = projects.projects.find(
		(item) => item.id === $page.params.slug
	) as Project;
</script>

<div class="container">
	<img src={project?.detailedImage} alt="Detailed" />
	<ProjectInfoCard {project} />
</div>

<style>
	.container {
		max-width: 1000px;
		padding-inline: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 50px;
		margin: 75px auto 0;
	}

	img {
		object-fit: contain;
		width: 900px;
		margin: 0 auto;
	}

	@media screen and (max-width: 940px) {
		img {
			width: 100%;
		}
	}
</style>
