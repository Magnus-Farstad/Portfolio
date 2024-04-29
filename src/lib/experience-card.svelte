<script lang="ts">
	import type { Employment } from '$lib/store/project-store';
	import { calculateLength } from '$lib/functions';
	export let employment: Employment;
</script>

<div class="container">
	<div class="logo-container">
		<img src={employment.logo} alt="Logo" />
	</div>
	<div class="content">
		<h4>{employment.title}</h4>
		<p>{employment.subtitle}</p>
		{#if employment.thirdTitle}
			<p class="optional-title">{employment.thirdTitle}</p>
		{/if}
		<p class="optional-title">
			{calculateLength(employment.start, employment.end, employment.offset)}
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.logo-container {
		padding-top: 4px;
	}
	.optional-title {
		font-size: 14px;
	}

	img {
		aspect-ratio: 1;
		width: 60px;
		border-radius: 5px;
	}

	h4 {
		margin: 0;
		font-size: 16px;
		font-weight: 600;
	}
	p {
		margin: 0;
		font-size: 16px;
	}
</style>
