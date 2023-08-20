<script lang="ts">
	import Profile from '$lib/assets/profile-img.jpg';
	import '../styles/global.css';
	import Github from '$lib/assets/Github.png';
	import LinkedIn from '$lib/assets/LinkedIn.png';
	import Mail from '$lib/assets/Mail.png';
</script>

<header>
	<nav>
		<div class="user">
			<img class="profile" src={Profile} alt="Profile" />
		</div>
		<div class="nav-elements">
			<button class="nav-element">Home</button>
			<button class="nav-element">Projects</button>
			<button class="nav-element">About</button>
		</div>
	</nav>
</header>
<main>
	<slot />
</main>
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
	nav {
		z-index: 20;
		display: flex;
		justify-content: space-between;
		padding-inline: 70px;
		max-width: 900px;
		margin-inline: auto;
		margin-top: 30px;
	}

	.user {
		width: 60px;
		aspect-ratio: 1;
		border-radius: 50%;
		overflow: hidden;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
	}
	.profile {
		object-fit: cover;
		height: 80%;
		border-radius: 50%;
	}

	.nav-elements {
		background-color: white;
		display: flex;
		padding: 12px 21px;
		justify-content: center;
		align-items: center;
		gap: 51px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
		border-radius: 30px;
	}
	.nav-element {
		text-decoration: none;
		background-color: transparent;
		color: inherit;
		border: none;
		font-size: inherit;
		padding: 0;
		transition: 0.15s ease-in-out;

		&:hover {
			cursor: pointer;
			color: #1f1f21;
		}
		&:active {
			transform: scale(0.95);
		}
	}

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
