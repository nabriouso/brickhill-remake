<script lang="ts">
	export let href: string | undefined = undefined;
	export let variant: string | 'primary' | 'success' | 'warning' | 'danger' | 'clear';
	export let size: string = 'md';
</script>

<svelte:element this={href ? 'a' : 'button'} class="btn btn-{variant} btn-{size}"
	><slot /></svelte:element
>

<style lang="postcss">
	.btn {
		@apply inline-flex h-max px-4 rounded-sm items-center justify-center text-white font-semibold uppercase;
	}
	.btn-md {
		@apply min-h-[40px];
	}
	.btn-sm {
		@apply min-h-[34px] py-1 text-sm;
	}
	.btn-primary {
		@apply bg-gradient-to-t from-primary-600 to-primary-500;
	}
	.btn-warning {
		@apply bg-gradient-to-t from-warning-600 to-warning-500;
	}
	.btn-success {
		@apply bg-gradient-to-t from-success-600 to-success-500;
	}
	.btn-danger {
		@apply bg-gradient-to-t from-red-600 to-red-500;
	}
	.btn-clear {
		@apply ring-inset ring-1 ring-blend-500 text-typography;
	}
</style>
