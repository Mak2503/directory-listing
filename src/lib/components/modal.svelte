<script lang="ts">
	export let showModal: boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<div class="header">
			<slot name="header" />
			<button class="header-icon" on:click={() => dialog.close()}>
				<img src="/close.svg" alt="close" />
			</button>
		</div>
		<div class="content">
			<slot />
		</div>
	</div>
</dialog>

<style>
	dialog {
		min-width: 24em;
		max-width: 32em;
		border-radius: 18px;
		border: none;
		padding: 0;
		box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.3);
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 32px;
		border-bottom: 1px solid #f0f3ff;
	}

	.content {
		padding: 32px;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.header-icon img {
		padding: 8px;
	}
</style>
