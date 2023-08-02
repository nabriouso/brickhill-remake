<script lang="ts">
	export let active: boolean = false;
</script>

<button class:!border-primary-500={active}><slot /></button>

<style lang="postcss">
	button {
		@apply flex justify-center items-center border-b-4 border-b-blend-500 flex-grow min-h-[38px] py-[6px] text-lg font-semibold text-typography w-full text-center;
	}
</style>
