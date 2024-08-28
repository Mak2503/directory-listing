<script lang="ts">
	import DirectoryPanel from '$lib/components/directory-panel.svelte';
	import type { Directory } from '$lib/store';
	import { directories, selectedDirectory } from '$lib/store';

	$: console.log('Directories', $directories, $selectedDirectory);

	let selectedDirectories: Directory[];

	$: selectedDirectories = $directories.items.filter((directory) => {
		return $selectedDirectory.includes(directory);
	});
</script>

<div class="container">
	<DirectoryPanel bind:directory={$directories} />
	{#each selectedDirectories as directory}
		<DirectoryPanel bind:directory />
	{/each}
</div>

<style>
	.container {
		display: flex;
		overflow-x: scroll;
	}
</style>
