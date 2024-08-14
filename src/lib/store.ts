import { writable } from 'svelte/store';

export type Directory = {
	id: number;
	name: string;
	is_directory: boolean;
	children: Directory[];
};

export const directories = writable<Directory>({
	id: 1,
	name: 'ROOT',
	is_directory: true,
	children: []
});
