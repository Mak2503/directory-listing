<script>
	import DirectoryPanel from '$lib/components/directory-panel.svelte';
	import { directories } from '$lib/store';

	$: console.log('Directories', $directories);
</script>

<div>
	<DirectoryPanel directory={$directories} />
</div>
