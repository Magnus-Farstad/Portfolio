<script lang="ts">
	import type { Employment } from '$lib/store/project-store.js';
	import { calculateLength } from '$lib/functions';
	export let employment: Employment;
	console.log(employment);

	let last = (a: object[], i: number) => i === a.length - 1;
</script>

<div class="container">
	<div class="employment">
		<div class="logo-container">
			<img src={employment.logo} alt="Logo" />
		</div>
		<div class="content">
			<h4>{employment.title}</h4>
			<p>{calculateLength(employment.start, employment.end, employment.offset)}</p>
		</div>
	</div>
	<div class="extended-items">
		{#each employment.items as item, index}
			<div class="extended-item">
				<div class="left">
					<div class="dot" />
					{#if !last(employment.items, index)}
						<div class="line" />
					{/if}
				</div>
				<div class="right">
					<h4>{item.title}</h4>
					<p>{item.subtitle}</p>
					<p>{item.date}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 26px;
		flex-direction: column;
	}
	.extended-items {
		display: flex;
		flex-direction: column;
		gap: 7px;
		margin-left: 23px;
	}
	.employment {
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
	img {
		aspect-ratio: 1;
		width: 60px;
		border-radius: 5px;
	}
	p {
		margin: 0;
		font-size: 16px;
	}
	h4 {
		margin: 0;
		font-size: 16px;
		font-weight: 600;
	}
	.extended-item {
		display: flex;
		gap: 20px;
	}
	.left {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 9px;
		padding-top: 2px;
	}
	.dot {
		border-radius: 50%;
		aspect-ratio: 1;
		width: 14px;
		background-color: #969699;
	}
	.line {
		background-color: #969699;
		width: 2px;
		height: 50px;
	}
</style>
