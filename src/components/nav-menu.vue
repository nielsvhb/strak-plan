<template>
	<nav class="absolute right-0 sm:right-10 top-0 sm:top-10 font-sans z-20">
		<Box v-if="isOpen">
			<a class="text-right ml-auto" href="" @click.prevent="toggle">
				<img class="ml-auto" src="/hamburger.png" alt="Hamburger" />
			</a>
			<ul
				class="text-white uppercase w-64 font-bold leading-loose tracking-widest mt-16"
			>
				<li>
					<a href="#projecten"> Projecten </a>
				</li>
				<li>
					<a href="#contact"> Contact </a>
				</li>
			</ul>
		</Box>
		<a
			v-else
			class="text-right ml-auto p-10 block"
			href=""
			@click.prevent="toggle"
		>
			<img class="ml-auto" src="/hamburger-green.png" alt="Hamburger" />
		</a>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "./box.vue";

export default defineComponent({
	name: "nav-menu",
	data() {
		return {
			isOpen: false,
		};
	},
	components: { Box },
	methods: {
		toggle(): void {
			this.isOpen = !this.isOpen;
		},
	},
});
</script>
