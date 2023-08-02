<ul>
	<li>
		<slot />
	</li>
</ul>

<style lang="postcss">
	ul {
		@apply flex;
	}
	li {
		@apply flex justify-center items-center w-full gap-2;
	}
</style>
