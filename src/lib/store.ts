import { writable } from 'svelte/store';

export type Directory = {
	id: string;
	name: string;
	is_directory: boolean;
	items: Directory[];
};

export const directories = writable<Directory>({
	id: '1',
	name: 'ROOT',
	is_directory: true,
	items: []
});
