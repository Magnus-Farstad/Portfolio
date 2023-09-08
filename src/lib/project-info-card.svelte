<script lang="ts">
	import type { Project } from '$lib/store/project-store';
	import ProjectSubtitle from '$lib/project-subtitle.svelte';
	import ProjectButton from '$lib/project-button.svelte';

	export let project: Project;
</script>

<div class="container">
	<h1 class="title">
		{project.title}
	</h1>
	<h4>
		{project.techStack}
	</h4>
	<ProjectSubtitle subtitle={project.subtitle} platform={project.platform} />
	<p class="text">
		{@html project.text}
	</p>
	{#if project.isLive}
		<ProjectButton isLive={project.isLive} linkToSite={project.linkToSite} background={'#f1f1f1'} />
	{/if}
</div>

<style>
	.container {
		text-align: left;
		flex-direction: column;
		border-radius: 50px;
		padding: 30px 40px;
		background-color: white;
	}

	h1 {
		font-size: 48px;
		font-weight: 700;
		background: linear-gradient(351deg, #323235 0%, #5e5e63 100%);
		background-clip: text;
		width: fit-content;
		margin: 0;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h4 {
		font-size: 24px;
		font-weight: 600;
		color: rgba(50, 50, 53, 0.88);
		margin: 10px 0 0 0;
	}

	.text {
		color: #5e5e63;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>
