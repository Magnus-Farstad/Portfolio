<script lang="ts">
	import '../../styles/global.css';
	import Github from '$lib/assets/Github.png';
	import LinkedIn from '$lib/assets/LinkedIn.png';
	import Mail from '$lib/assets/Mail.png';
</script>

<slot />
<footer>
	<div class="links">
		<a href="https://github.com/Magnus-Farstad" target="#">
			<img class="link" src={Github} alt="Github link" /></a
		>
		<a href="https://www.linkedin.com/in/magnusrosvoldfarstad/" target="#"
			><img class="link" src={LinkedIn} alt="LinkedIn link" /></a
		>
		<a href="mailto: magnus.r.farstad@gmail.com"><img class="link" src={Mail} alt="Mail link" /></a>
	</div>
	<p class="byline">Made by Magnus Rosvold Farstad</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-block: 50px;
		background: #f1f1f1;
		gap: 20px;
		margin-top: 90px;
	}

	.links {
		display: flex;
		gap: 45px;
	}

	.link {
		aspect-ratio: 1;
		width: 30px;
	}

	.byline {
		color: #707072;
		font-size: 14px;
	}
</style>
