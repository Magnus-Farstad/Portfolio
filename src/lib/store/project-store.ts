import { writable } from 'svelte/store';

export type Project = {
	title: string;
	subtitle: string;
	description: string;
	img: string;
	logo: string;
	platform: string;
	isLive: boolean;
	id: string;
	techStack: string;
	text: string;
	detailedImage: string;
	linkToSite: string;
};

export const projectStore = writable<Project>();
