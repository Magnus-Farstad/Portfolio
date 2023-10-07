<script lang="ts">
	import ProjectSubtitle from '$lib/project-subtitle.svelte';
	import ProjectButton from '$lib/project-button.svelte';
	import { type Project, projectStore } from '$lib/store/project-store';
	export let title: string;
	export let subtitle: string;
	export let description: string;
	export let img = 'Missing';
	export let logo = 'missing';
	export let platform: string;
	export let isLive: boolean;
	export let id: string;
	export let techStack: string;
	export let text: string;
	export let detailedImage: string;
	export let linkToSite: string;

	const handleSetStore = () => {
		const project: Project = {
			title: title,
			subtitle: subtitle,
			description: description,
			img: img,
			logo: logo,
			platform: platform,
			isLive: isLive,
			id: id,
			techStack: techStack,
			text: text,
			detailedImage: detailedImage,
			linkToSite: linkToSite
		};
		console.log(project);
		projectStore.set(project);
	};
</script>

<a class="container" href="/projects/{id.toLowerCase()}" on:click={() => handleSetStore()}>
	<div class="info">
		<img src={logo} alt="Project logo" class="logo" />
		<h3>{title}</h3>
		<ProjectSubtitle {subtitle} {platform} />
		<p class="description">
			{description}
		</p>
		<ProjectButton {linkToSite} {isLive} />
	</div>
	<div class="img-container">
		<img src={img} alt="Project preview" class="image" />
	</div>
</a>

<style>
	.container {
		background-color: #eceff1;
		text-decoration: none;
		padding-top: 77px;
		padding-left: 64px;
		border-radius: 24px;
		display: flex;
		width: 100%;
		max-width: calc(900px - 64px);
		height: calc(440px - 77px);
		overflow: hidden;
		gap: 130px;
		transition: all 0.2s ease-out;

		&:hover {
			background-color: #f6f6f6;
			transform: scale(1.02);
			box-shadow: 0 0 #e6ebef, 0 4px 24px rgba(0, 0, 0, 0.08);
			cursor: pointer;
		}
	}
	.info {
		text-align: left;
		width: 285px;
	}
	h3 {
		font-size: 36px;
		font-weight: 700;
		background: linear-gradient(351deg, #323235 0%, #5e5e63 100%);
		background-clip: text;
		width: fit-content;
		margin: 16px 0 4px 0;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	p {
		margin: 0;
	}
	.description {
		color: #5e5e63;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 170%;
	}
	.img-container {
		width: 420px;
	}

	@media screen and (max-width: 991px) {
		.container {
			flex-direction: column;
			width: 80%;
			height: auto;
			min-width: auto;
			align-items: stretch;
			margin-left: auto;
			margin-right: auto;
			padding-top: 32px;
			padding-left: 32px;
			padding-right: 32px;
			gap: 50px;
		}
		.info {
			width: auto;
		}
		.img-container {
			margin-left: auto;
		}
	}

	@media screen and (max-width: 584px) {
		.img-container {
			width: 100%;
			height: auto;
		}
		.image {
			width: 100%;
			height: auto;
		}
		h3 {
			font-size: 30px;
		}
	}
</style>
