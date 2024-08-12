<script>
	import DirectoryPanel from '$lib/components/directory-panel.svelte';
	import { directories } from '$lib/store';
</script>

<div>
	<DirectoryPanel directory={$directories[0]} />
</div>
