<script lang="ts">
	import Experience from '$lib/assets/experience.json';
	import Profile from '$lib/assets/Profilbilde-stort.png';
	import ExperienceCard from '$lib/experience-card.svelte';
	import ExtendedCard from '$lib/experience-card-extended.svelte';

	let last = (a: object[], i: number) => i === a.length - 1;
</script>

<div class="container">
	<div class="hero">
		<img src={Profile} alt="Profile" />
		<div>
			<h1>Hi again, I'm Magnus</h1>
			<p>
				I’m an enthusiastic developer, always seeking new challenges. I have a <span
					>Bachelor’s degree in computer science</span
				>
				and I am currently pursuing a <span>Master’s degree</span> in the same field. If you want to
				get in touch, please do not hesitate to send me a message on one of my socials!
			</p>
		</div>
	</div>
	<div class="content">
		<div class="employment">
			<h4>Employment & Experience</h4>
			<hr class="main" />
			{#each Experience.employment as employment, index}
				{#if employment.extended}
					<ExtendedCard {employment} />
				{:else}
					<ExperienceCard {employment} />
				{/if}
				{#if !last(Experience.employment, index)}
					<hr class="divider" />
				{/if}
			{/each}
		</div>
		<div class="education">
			<h4>Education</h4>
			<hr class="main" />
			{#each Experience.education as education, index}
				{#if education.extended}
					<ExtendedCard employment={education} />
				{:else}
					<ExperienceCard employment={education} />
				{/if}
				{#if !last(Experience.education, index)}
					<hr class="divider" />
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1000px;
		margin: 75px auto 0;
		gap: 65px;
	}
	.hero {
		display: flex;
		align-items: center;
		gap: 115px;
	}

	img {
		aspect-ratio: 1;
		width: 230px;
	}

	h1 {
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;

		background: linear-gradient(115deg, #ffc734 15.97%, #f98947 54.23%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.employment {
		margin-bottom: 45px;
	}

	p {
		max-width: 638px;
		color: #000;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	span {
		background: linear-gradient(90deg, #ffc734 15.36%, #f98947 43.5%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 700;
	}

	.content {
		width: 100%;
	}

	h4 {
		font-size: 32px;
		font-weight: 300;
		margin: 0 0 2px 0;
	}

	.main {
		border-top: 2px solid #5e5e63;
		margin-bottom: 16px;
	}

	.divider {
		margin-block: 15px;
		border-top: 1px solid #969699;
	}
</style>
