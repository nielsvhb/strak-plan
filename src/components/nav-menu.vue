<template>
	<nav class="absolute right-10 top-10 font-sans">
		<Box v-if="isOpen">
			<a class="text-right ml-auto" href="" @click.prevent="toggle">
				<img class="ml-auto" src="/hamburger.png" alt="Hamburger" />
			</a>
			<ul
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
        <a v-else class="text-right ml-auto p-10 block" href="" @click.prevent="toggle">
            <img class="ml-auto" src="/hamburger-white.png" alt="Hamburger" />
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
			isOpen: window.outerWidth >= 450,
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
