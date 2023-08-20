<script lang="ts">
	import Arrowright from '$lib/assets/ArrowRightOutline.png';
	import Arrowdiagonal from '$lib/assets/ArrowDiagonalOutline.png';
	export let title: string;
	export let subtitle: string;
	export let description: string;
	export let image = 'Missing';
	export let logo = 'missing';
	export let platform: string;
	export let isLive: boolean;
</script>

<div class="container">
	<div class="info">
		<img src={logo} alt="Project logo" class="logo" />
		<h3>{title}</h3>
		<div class="subtitle-container">
			<p class="subtitle">
				{subtitle}
			</p>
			<p class="small-caps">•</p>
			<p class="subtitle">{platform}</p>
		</div>
		<p class="description">
			{description}
		</p>
		{#if isLive}
			<button
				><span>See the Live Site</span>
				<img src={Arrowright} alt="Arrow pointing to the right" /></button
			>
		{:else}
			<button>
				<span>See the Project</span>
				<img src={Arrowdiagonal} alt="Arrow pointing diagonal upwards to the right" />
			</button>
		{/if}
	</div>
	<div class="img-container">
		<img src={image} alt="Project preview" class="image" />
	</div>
</div>

<style>
	.container {
		background-color: #eceff1;
		padding-top: 77px;
		padding-left: 64px;
		border-radius: 24px;
		display: flex;
		width: 100%;
		max-width: calc(900px - 64px);
		height: calc(440px - 77px);
		overflow: hidden;
		gap: 130px;
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
	.subtitle-container {
		display: flex;
		gap: 5px;
		align-items: center;
		margin-bottom: 24px;
	}
	p {
		margin: 0;
	}
	.subtitle {
		color: #5e5e63;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
	.small-caps {
		color: #5e5e63;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 600;
		line-height: 160%;
	}
	.description {
		color: #5e5e63;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 170%;
	}
	button {
		display: flex;
		align-items: center;
		gap: 7px;
		margin-top: 24px;
		padding: 15px 24px;
		border: none;
		border-radius: 12px;
		background-color: white;
		text-decoration: none;
	}
	span {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		background: linear-gradient(130deg, #74747a 0%, #323235 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.img-container {
		width: 420px;
	}
</style>
