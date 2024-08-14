<script lang="ts">
	import { selectedDirectory, type Directory } from '$lib/store';

	export let directory: Directory;

	let folderCount;
	let fileCount;

	$: folderCount = directory.items.filter((item) => item.is_directory).length;
	$: fileCount = directory.items.filter((item) => !item.is_directory).length;

	const selectDirectory = () => {
		if (directory.is_directory && !$selectedDirectory.includes(directory)) {
			selectedDirectory.set([...$selectedDirectory, directory]);
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`directory-card ${$selectedDirectory.includes(directory) ? 'selected' : ''}`}
	on:click={selectDirectory}
>
	<div class="directory-content">
		<div class="directory-name">{directory.name}</div>
		<div class="child-count">
			<div>
				<img src="/folder.svg" alt="folder" />
				<span>{folderCount}</span>
			</div>
			<div>
				<img src="/file.svg" alt="file" />
				<span>{fileCount}</span>
			</div>
		</div>
	</div>
	<div class="directory-icons">
		<img class="trash-icon" src="/trash.svg" alt="trash" />
		<img src="/info.svg" alt="info" />
	</div>
</div>

<style>
	.directory-card,
	.child-count,
	.child-count div {
		display: flex;
		align-items: center;
	}

	.directory-card {
		justify-content: space-between;
		padding: 16px;
		border-radius: 8px;
	}

	.directory-card.selected {
		background-color: #f0f3ff;
	}

	.directory-card:hover {
		background-color: #f0f3ff;
	}

	.directory-name {
		text-align: left;
		color: #39405c;
	}

	.directory-content {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.child-count,
	.directory-icons {
		gap: 8px;
	}

	.child-count div {
		color: #6e748c;
		gap: 4px;
	}

	/* .trash-icon {
		display: none;
	} */
</style>
