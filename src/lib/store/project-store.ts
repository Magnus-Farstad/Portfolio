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

type Extended = {
	title: string;
	subtitle: string;
	date: string;
};

export type Employment = {
	extended: boolean;
	logo: string;
	title: string;
	subtitle: string;
	thirdTitle: string | undefined;
	fourthTitle: string | undefined;
	items: Extended[] | [];
};

export const projectStore = writable<Project>();
