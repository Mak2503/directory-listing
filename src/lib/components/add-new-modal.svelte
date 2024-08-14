<script lang="ts">
	import { directories, type Directory } from '$lib/store';
	import Modal from './modal.svelte';

	export let showModal = false;

	const form = {
		type: 'file',
		name: ''
	};

	const onSubmit = () => {
		console.log('Form submitted', form);

		const data: Directory = {
			id: $directories.children.length + 1,
			name: form.name,
			is_directory: form.type === 'directory',
			children: []
		};

		// Adding children to directory
		directories.set({
			...$directories,
			children: [...$directories.children, data]
		});
		showModal = false;
	};
</script>

<Modal bind:showModal>
	<div class="modal-title" slot="header">Add New</div>
	<div>
		<form class="form" on:submit|preventDefault={onSubmit}>
			<div class="form-group">
				<label for="type">Type:</label>
				<div class="radio-group">
					<label>
						<input
							type="radio"
							name="type"
							checked={form.type === 'file'}
							on:change={() => (form.type = 'directory')}
							bind:value={form.type}
						/>
						File
					</label>
					<label>
						<input
							type="radio"
							name="type"
							checked={form.type === 'directory'}
							on:change={() => (form.type = 'directory')}
							bind:value={form.type}
						/>
						Directory
					</label>
				</div>
			</div>
			<div class="form-group">
				<label for="name">Name:</label>
				<input type="text" id="name" name="name" bind:value={form.name} />
			</div>
			<div class="form-buttons">
				<button class="secondary">Cancel</button>
				<button type="submit" class="primary">Add</button>
			</div>
		</form>
	</div>
</Modal>

<style>
	.modal-title {
		font-weight: bold;
		color: #5b6179;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.form-group {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		color: #5b6179;
		font-size: 14px;
	}

	.form-group label {
		display: flex;
		align-items: center;
		margin-right: 10px;
	}

	.form-group input[type='text'] {
		width: 100%;
		padding: 8px;
		border: 1px solid #32323229;
		border-radius: 4px;
	}

	.form-group input[type='radio'] {
		margin: 0;
		margin-right: 10px;
		accent-color: #5b6179;
	}

	.radio-group {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.form-group div {
		margin: 10px 0px;
		margin-right: 10px;
	}

	.form-buttons {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 20px;
	}

	.form-buttons button {
		cursor: pointer;
		font-size: 16px;
		padding: 8px 24px;
		border: 1px solid #5b6179;
		border-radius: 8px;
	}

	.primary {
		color: white;
		background-color: #5b6179;
	}

	.secondary {
		color: #5b6179;
		background-color: white;
	}
</style>
