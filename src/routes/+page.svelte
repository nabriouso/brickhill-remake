<script>
	import Button from '$src/components/Button.svelte';
	import TextField from '$src/components/TextField.svelte';
	import TabHead from '$src/components/navigation/tabs/TabHead.svelte';
	import TabHeadItem from '$src/components/navigation/tabs/TabHeadItem.svelte';
	import TabContent from '$src/components/navigation/tabs/TabContent.svelte';
	import TabContentItem from '$src/components/navigation/tabs/TabContentItem.svelte';
	import { HandWaving, MagnifyingGlass, Star, House } from 'phosphor-svelte';
</script>

<div class="text-2xl font-semibold mb-2">
	Brick Hill Frontend Remake (TailwindCSS and SvelteKit)
</div>

<div class="text-blend-700 uppercase font-semibold mb-1">Buttons</div>
<div class="flex gap-2 flex-wrap">
	<Button variant="primary">Example Blue</Button>
	<Button variant="success">Example Green</Button>
	<Button variant="warning">Example Yellow</Button>
	<Button variant="danger">Example Red</Button>
	<Button variant="clear">Example Clear</Button>
</div>
<div class="h-px bg-blend-500 my-6" />
<div class="text-blend-700 uppercase font-semibold mb-1">Inputs</div>
<div class="flex flex-wrap -mx-1 gap-y-2">
	<div class="w-full lg:w-1/2 px-1">
		<TextField kind="input" placeholder="Input Example..." />
	</div>
	<div class="w-full lg:w-1/2 px-1">
		<TextField kind="input" placeholder="Input Example (with icon)..." icon={MagnifyingGlass} />
	</div>
</div>
<div class="h-px bg-blend-500 my-6" />
<div class="text-blend-700 uppercase font-semibold mb-1">Tabs</div>
<div class="mb-3">
	<TabHead>
		<TabHeadItem active={true}><Star size={20} weight="bold" class="mr-2" />Tab 1</TabHeadItem>
		<TabHeadItem><House size={20} weight="bold" class="mr-2" />Tab 2</TabHeadItem>
		<TabHeadItem><HandWaving size={20} weight="bold" class="mr-2" />Tab 3</TabHeadItem>
	</TabHead>
</div>
<TabContent>
	<TabContentItem>hello</TabContentItem>
</TabContent>
