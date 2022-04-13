<script>
	import { canConnect } from '$lib/functions/stores';

	import { defaultEvmStores, selectedAccount, connected, chainId } from 'svelte-web3';

	const enableBrowser = () => defaultEvmStores.setProvider();
</script>

{#if $connected}
	<div
		class="bg-red hover:bg-mint transition duration-300 text-white text-center py-2.5 px-5 text-xs lg:text-base cursor-pointer font-thin"
	>
		<a href="/assets">My NFT's</a>
	</div>
{:else}
	<div
		disabled={!$canConnect}
		class={$canConnect
			? 'bg-gray text-white text-center py-2.5 px-5 text-xs lg:text-base cursor-pointer font-thin'
			: 'invisible'}
	>
		<a class="md:hidden" href="https://metamask.app.link/dapp/www.soulgenesis.art/">Connect wallet</a>
		<button class="hidden md:inline" on:click={enableBrowser}>Connect wallet</button>
	</div>
{/if}
