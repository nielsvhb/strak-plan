<template>
	<nav class="absolute right-10 top-10 font-sans">
		<Box>
			<a class="text-right ml-auto" href="" @click.prevent="toggle">
				<img class="ml-auto" src="/hamburger.png" alt="Hamburger" />
			</a>
			<ul
				v-if="isOpen"
				class="text-white uppercase w-64 font-bold leading-loose tracking-widest mt-16"
			>
				<li>
					<a href="#diensten"> Diensten </a>
				</li>
				<li>
					<a href="#verloop"> Project verloop </a>
				</li>
				<li>
					<a href="#fotos"> Foto's </a>
				</li>
				<li>
					<a href="#contact"> Contact </a>
				</li>
			</ul>
		</Box>
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
