<script lang="ts">
	import Arrowright from '$lib/assets/ArrowRightOutline.png';
	import Arrowdiagonal from '$lib/assets/ArrowDiagonalOutline.png';
	export let linkToSite: string;
	export let isLive: boolean;
</script>

{#if isLive}
	<a href={linkToSite} target="#" class="projectButton"
		><span>See the Live Site</span>
		<img src={Arrowdiagonal} alt="Arrow pointing to the right" /></a
	>
{:else}
	<button class="projectButton">
		<span>See the Project</span>
		<img src={Arrowright} alt="Arrow pointing diagonal upwards to the right" />
	</button>
{/if}

<style>
	.projectButton {
		display: flex;
		align-items: center;
		gap: 7px;
		margin-top: 24px;
		padding: 15px 24px;
		border: 2px solid #fff;
		border-radius: 12px;
		background-color: white;
		text-decoration: none;
		transition: all 0.2s ease;
		width: fit-content;

		&:hover {
			box-shadow: none;
			color: #5e5e63;
			-webkit-text-fill-color: #5e5e63;
			border-radius: 12px;
			cursor: pointer;
			background-color: transparent;
		}

		&:hover > img {
			transform: translate3d(6px, 0, 0);
		}
	}
	.projectButton > img {
		transition: all 0.2s ease;
	}
	span {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		background: linear-gradient(130deg, #74747a 0%, #323235 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
