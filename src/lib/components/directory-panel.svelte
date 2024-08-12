<script lang="ts">
	import type { Directory } from '$lib/store';

	export let directory: Directory;
</script>

<div class="directory-container">
	<div class="directory-header">
		<h3>{directory.name}</h3>
		<button class="header-icon">
			<img src="/plus.svg" alt="plus" />
		</button>
		{#if directory.name !== 'ROOT'}
			<button class="header-icon">
				<img src="/close.svg" alt="close" />
			</button>
		{/if}
	</div>
	{#each directory.children as child}
		<!-- To be created as component -->
		<div>{child.name}</div>
	{/each}
</div>

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

	.header-icon {
		border: 1px solid #f0f3ff;
		border-radius: 4px;
		padding: 4px;
		background-color: transparent;
		cursor: pointer;
	}
</style>
