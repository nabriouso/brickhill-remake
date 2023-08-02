<script lang="ts">
	import '$src/app.postcss';
	import Navbar from '$src/components/navigation/Navbar.svelte';
	import Footer from '$src/components/navigation/Footer.svelte';
</script>

<Navbar />
<main class="container">
	<slot />
</main>
<Footer />
