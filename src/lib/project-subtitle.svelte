<script lang="ts">
	export let subtitle: string;
	export let platform: string;
</script>

<div class="subtitle-container">
	<p class="subtitle">
		{subtitle}
	</p>
	<p class="small-caps">•</p>
	<p class="subtitle">{platform}</p>
</div>

<style>
	.subtitle-container {
		display: flex;
		gap: 5px;
		align-items: center;
		margin-bottom: 24px;
	}
	.subtitle {
		color: #5e5e63;
		font-size: 14px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}
	.small-caps {
		color: #5e5e63;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 600;
		line-height: 160%;
	}
	p {
		margin: 0;
	}
</style>
