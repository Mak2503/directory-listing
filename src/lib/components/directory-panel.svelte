<script lang="ts">
	import { selectedDirectory, type Directory } from '$lib/store';
	import AddNewModal from './add-new-modal.svelte';
	import DirectoryCard from './directory-card.svelte';

	export let directory: Directory;

	let showModal = false;

	const addNew = () => {
		showModal = true;
	};
</script>

<div class="directory-container">
	<div class="directory-header">
		<h3>{directory.name}</h3>
		<button class="header-icon" on:click={addNew}>
			<img src="/plus.svg" alt="plus" />
		</button>
		{#if directory.name !== 'ROOT'}
			<button class="header-icon">
				<img src="/close.svg" alt="close" />
			</button>
		{/if}
	</div>
	<div class="directory-card-list">
		{#each directory.items as item}
			<DirectoryCard bind:directory={item} />
		{/each}
	</div>
</div>
{#if showModal}
	<AddNewModal bind:showModal />
{/if}

<style>
	.directory-container {
		width: 325px;
		height: 100vh;
		border-right: 1px solid #e9edf2;
	}

	.directory-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 16px;
		border-bottom: 1px solid #e9edf2;
	}
</style>
