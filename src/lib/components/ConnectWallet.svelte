<script lang="ts">
	import { dropdownActive } from '$lib/functions/stores';
	import { redusedAddress } from '$lib/functions/utils';
	import { fade } from 'svelte/transition';
	import ConnButton from './ConnButton.svelte';
	import { selectedAccount, connected, defaultEvmStores } from 'svelte-web3';
	import Copy from './Copy.svelte';

	let w: number;
	const changeDropdownState = (state: boolean) => {
		if (w > 640) {
			$dropdownActive = state;
		}
	}
</script>

<svelte:window bind:innerWidth={w}  />

<div class="flex gap-6 relative items-center">
	<ConnButton />

	{#key $dropdownActive}
		<img
			class="w-9 h-9 animate-heartbeat cursor-pointer"
			src="https://ik.imagekit.io/soulgenesis/icons/tr:w-64/{$dropdownActive
				? 'red'
				: 'purple'}-orb.png"
			alt=""
			in:fade={{ duration: 300 }}
			on:mouseenter={() => changeDropdownState(true)}
			on:click={() => $dropdownActive = !$dropdownActive}
		/>
	{/key}
	{#if $dropdownActive}
		<div
			on:mouseenter={() => changeDropdownState(true)}
			transition:fade={{ duration: 300 }}
			class="bg-white flex flex-col absolute z-50 top-12 lg:top-16 w-[14.5rem] px-5 pb-3 py-3 gap-6 text-sm"
		>
			{#if $connected}
				<div class="flex space-x-2">
					<div>
						{redusedAddress($selectedAccount)}
					</div>
					<Copy address={$selectedAccount} />
				</div>
			{/if}
			<a href="/about">About the project</a>
			<a href="/">Artist</a>
			<a href="/">Dev team</a>
			<a href="/">FAQ</a>
			{#if $connected}
				<div on:click={() => defaultEvmStores.disconnect()} class="text-red cursor-pointer">
					Disconnect
				</div>
			{/if}
		</div>
	{/if}
</div>
