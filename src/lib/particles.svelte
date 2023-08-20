<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener(
			'scroll',
			() => {
				document.body.style.setProperty(
					'--scroll',
					(window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString()
				);
			},
			false
		);
	});
</script>

<div class="container">
	<div class="particle-8" />
	<div class="particle-7" />
	<div class="particle-6" />
	<div class="particle-5" />
	<div class="particle-4" />
	<div class="particle-3" />
	<div class="particle-2" />
	<div class="particle-1" />
</div>

<style>
	.container {
		position: absolute;
		z-index: -75;
		width: 700px;
		height: 310px;
		top: -108px;
		transform: scale3d(1.5, 1.5, 1);
		animation: rotate 1s linear infinite;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) * -1s);
	}

	.particle-8 {
		width: 11px;
		height: 11px;
		opacity: 0.15;
		background-color: #323235;
		border-radius: 3px;
		position: absolute;
		top: 111px;
		right: 64px;
		transform: rotate(40deg);
	}
	.particle-7 {
		width: 9px;
		height: 9px;
		opacity: 0.2;
		background-color: #323235;
		border-radius: 2px;
		position: absolute;
		top: 213px;
		right: 104px;
		transform: rotate(-14deg);
	}
	.particle-6 {
		width: 12px;
		height: 12px;
		opacity: 0.2;
		background-color: #323235;
		border-radius: 4px;
		position: absolute;
		top: 251px;
		right: 262px;
		transform: rotate(14deg);
	}
	.particle-5 {
		width: 12px;
		height: 12px;
		opacity: 0.2;
		background-color: #323235;
		border-radius: 4px;
		position: absolute;
		top: 203px;
		right: 448px;
		transform: rotate(-11deg);
	}
	.particle-4 {
		width: 15px;
		height: 15px;
		opacity: 0.2;
		background-color: #000;
		border-radius: 5px;
		position: absolute;
		top: 64px;
		right: 428px;
		transform: rotate(26deg);
	}
	.particle-3 {
		width: 9px;
		height: 9px;
		opacity: 0.4;
		background-color: #323235;
		border-radius: 2px;
		position: absolute;
		top: 94px;
		right: 624px;
		transform: rotate(-17deg);
	}
	.particle-2 {
		width: 24px;
		height: 24px;
		opacity: 0.3;
		background-color: #323235;
		border-radius: 6px;
		position: absolute;
		top: 200px;
		right: 600px;
		transform: rotate(20deg);
	}
	.particle-1 {
		width: 20px;
		height: 20px;
		opacity: 0.4;
		background-color: #323235;
		border-radius: 6px;
		position: absolute;
		top: 90px;
		right: 159px;
		transform: rotate(51deg);
	}

	@keyframes rotate {
		to {
			transform: scale3d(4, 4, 1);
		}
	}
</style>
