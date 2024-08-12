import { writable } from 'svelte/store';

export type Directory = {
	name: string;
	is_directory: boolean;
	children: File[];
};

export const directories = writable<Directory[]>([
	{
		name: 'ROOT',
		is_directory: true,
		children: []
	}
]);
