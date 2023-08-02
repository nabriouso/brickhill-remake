<script lang="ts">
	export let kind: string | 'input' | 'textarea';
	export let icon: any | undefined = undefined;
</script>

<div class="form-wrapper flex-grow">
	<div class="form relative flex-grow">
		{#if icon}
			<div
				class="absolute h-full w-10 flex justify-center items-center text-blend-600 pointer-events-none"
			>
				<svelte:component this={icon} size={18} weight="bold" />
			</div>
		{/if}
		<svelte:element
			this={kind}
			class="form-{kind}"
			class:px-3={!icon}
			class:form-has-icon-left={icon}
			{...$$restProps}
		/>
	</div>
</div>

<style lang="postcss">
	.form-has-icon-left {
		@apply pl-10;
	}
	.form-input {
		@apply border border-blend-500 bg-transparent outline-none rounded-sm w-full h-10 placeholder-blend-500;
	}
</style>
