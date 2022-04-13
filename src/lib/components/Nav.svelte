<script>
	import { dropdownActive } from '$lib/functions/stores';
	import ConnectWallet from './ConnectWallet.svelte';
	import Timer from './Timer.svelte';
</script>

<div class="p-4 lg:p-6 bg-white flex justify-between relative" on:mouseleave={() => $dropdownActive = false}>
	<div class="hidden md:flex lg:w-1/3">
		<Timer />
	</div>
	<div class="flex items-center space-x-20">
		<a href="/">
			<img src="/img/icons/twitter.svg" alt="Twitter link" />
		</a>
		<a href="/">
			<img src="/img/icons/discord.svg" alt="Discord link" />
		</a>
	</div>
	<div class="lg:w-1/3 flex flex-none justify-end">
		<ConnectWallet />
	</div>
</div>
