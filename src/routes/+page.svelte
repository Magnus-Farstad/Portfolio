<script lang="ts">
	import Particles from '$lib/particles.svelte';
</script>

<div class="container">
	<Particles />
	<h1>Hi, I'm <span>Magnus</span></h1>
	<div class="location">Oslo/Trondheim, Norway</div>
	<p>Computer scientist student and developer <br />who love to create cool stuff!</p>
	<div class="test" />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-block: 150px 150px;
		position: relative;
		gap: 32px;
		text-align: center;
	}
	h1 {
		font-size: 70px;
		font-weight: 700;
		background: linear-gradient(27deg, #969699, #1e1e22);
		background-clip: text;
		color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		width: fit-content;
		margin: 0;
	}
	.location {
		color: #5e5e63;
		font-weight: 500;
	}
	p {
		color: #5e5e63;
		text-align: center;
		font-weight: 400;
		line-height: normal;
		margin: 0;
	}
	.test {
		height: 2000px;
	}
</style>
