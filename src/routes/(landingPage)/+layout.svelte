<script lang="ts">
	import Profile from '$lib/assets/Profilbilde-bakgrunn.png';
	import '../../styles/global.css';
</script>

<header>
	<nav>
		<div class="user">
			<img class="profile" src={Profile} alt="Profile" />
		</div>
		<div class="nav-elements">
			<a href="/" class="nav-element">Home</a>
			<!--			<a href="/" class="nav-element">Projects</a>-->
			<a href="/about" class="nav-element">About</a>
		</div>
	</nav>
</header>
<main>
	<slot />
</main>

<style>
	nav {
		z-index: 20;
		display: flex;
		justify-content: space-between;
		padding-inline: 70px;
		max-width: 1000px;
		margin-inline: auto;
		margin-top: 30px;
		animation: slideIn 1s cubic-bezier(1, 0.03, 0.64, -0.01);
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
		height: 100%;
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

	@media screen and (max-width: 700px) {
		nav {
			padding-inline: 10%;
		}
	}

	@keyframes slideIn {
		from {
			transform: translateY(-100px);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
