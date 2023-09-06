<script lang="ts">
	import '../../styles/global.css';
	import { goto } from '$app/navigation';
</script>

<header>
	<nav>
		<button class="user" on:click={() => goto('/')}>
			<svg
				class="arrow"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
				/>
			</svg>
		</button>
		<div class="nav-elements">
			<a href="/" class="nav-element">Home</a>
			<a href="/" class="nav-element">Projects</a>
			<a href="/details" class="nav-element">About</a>
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
		border: none;
		border-radius: 50%;
		overflow: hidden;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);

		&:hover {
			cursor: pointer;
		}
		&:active {
			transform: scale(0.95);
		}
	}

	.arrow {
		aspect-ratio: 1;
		width: 60%;
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
</style>
