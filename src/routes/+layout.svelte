<script>
	import Profile from '$lib/assets/profile-img.jpg';
	import '../styles/global.css';
</script>

<header>
	<nav>
		<div class="user">
			<img src={Profile} alt="Profile" />
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
<footer />

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
	img {
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

		&:hover {
			cursor: pointer;
		}
	}
</style>
