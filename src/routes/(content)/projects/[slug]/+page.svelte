<script lang="ts">
	import ProjectInfoCard from '$lib/project-info-card.svelte';
	import projects from '$lib/assets/projects.json';
	import { page } from '$app/stores';

	console.log($page);
	const project = projects.projects.find((item) => item.id === $page.params.slug);
</script>

<div class="container">
	<img src={project.detailedImage} alt="Detailed" />
	<ProjectInfoCard {project} />
</div>

<style>
	.container {
		max-width: 1000px;
		display: flex;
		justify-content: center;
		margin: 0 auto;
	}
</style>
