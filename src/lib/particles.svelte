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
		top: 235px;
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

	@media screen and (max-width: 991px) {
		.container {
			width: 100%;
		}
	}

	@media screen and (max-width: 800px) {
		.container {
			transform: scale3d(1, 1, 1);
		}
	}

	@media screen and (max-width: 479px) {
		.container {
			margin-left: auto;
			margin-right: auto;
			left: -31px;
		}
		.particle-8 {
			top: 97px;
			right: 125px;
		}
		.particle-7 {
			top: 187px;
			right: 0;
		}
		.particle-6 {
			top: 226px;
			right: 214px;
		}
		.particle-5 {
			right: 72px;
		}
		.particle-4 {
			right: 215px;
		}
		.particle-3 {
			right: 333px;
		}
		.particle-2 {
			top: 184px;
			right: 302px;
		}
		.particle-1 {
			right: -3px;
		}
	}

	@keyframes rotate {
		to {
			transform: scale3d(4, 4, 1);
		}
	}
</style>
