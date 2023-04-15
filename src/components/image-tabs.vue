<template>
	<!-- TABS -->
	<div class="hidden sm:flex justify-center space-x-28" id="fotos">
		<a
			href=""
			v-on:click.prevent="setCategoty(null)"
			:class="{
				'text-primary border-b-8 border-primary': currentCategory == null,
			}"
			class="uppercase font-bold tracking-widest py-10 hover:underline active:border-transparent active:text-primary active:no-underline"
			>Alle Projecten</a
		>
		<a
			href=""
			v-on:click.prevent="setCategoty('ruwbouw')"
			:class="{
				'text-primary border-b-8 border-primary': currentCategory == 'ruwbouw',
			}"
			class="uppercase font-bold tracking-widest py-10 hover:underline active:border-transparent active:text-primary active:no-underline"
			>Ruwbouw</a
		>
		<a
			href=""
			v-on:click.prevent="setCategoty('interieur')"
			:class="{
				'text-primary border-b-8 border-primary':
					currentCategory == 'interieur',
			}"
			class="uppercase font-bold tracking-widest py-10 hover:underline active:border-transparent active:text-primary active:no-underline"
			>Interieur</a
		>
	</div>

	<!-- LIGHTBOX -->
	<div
		v-if="shownImage"
		class="fixed w-screen h-screen inset-0 z-10 sm:flex items-center justify-center bg-black bg-opacity-80 flex-col sm:space-y-6 select-none"
	>
		<a
			href=""
			@click.prevent="shownImage = null"
			title="Lightbox sluiten"
			class="absolute sm:static z-20 right-0 top-0 p-8 sm:p-6"
		>
			<img src="/lightbox/close.svg" alt="Lightbox sluiten" />
		</a>
		<div class="sm:flex sm:space-x-10 items-center h-full">
			<a
				href=""
				@click.prevent="prevImage"
				title="Vorige"
				class="hidden sm:block"
			>
				<img src="/lightbox/prev.svg" alt="Vorige" />
			</a>
			<div class="relative flex sm:block h-full items-center">
				<img
					:src="shownImage.src"
					:alt="shownImage.title"
					class="sm:max-h-[75vh]"
				/>
				<div
					class="fixed sm:absolute sm:mt-4 p-5 bg-primary text-white flex sm:space-x-10 items-center w-full bottom-0 sm:bottom-auto"
				>
					<div class="w-3/4">
						<p class="font-medium leading-[19px]">
							{{ shownImage.description }}
						</p>
					</div>
					<div class="text-right w-1/4">
						<div class="font-bold mb-2">{{ shownImage.title }}</div>
						<div class="leading-4">{{ shownImage.project }}</div>
					</div>
				</div>
			</div>
			<a
				href=""
				@click.prevent="nextImage"
				title="Volgende"
				class="hidden sm:block"
			>
				<img src="/lightbox/next.svg" alt="Volgende" />
			</a>
		</div>
	</div>

	<div class="3xl:container">
		<!-- IMAGES -->
		<div class="sm:grid sm:grid-cols-3">
			<div
				class="relative overflow-hidden after:content[''] after:block after:pb-[100%] cursor-pointer"
				v-for="img in shownImages"
				@click="openImage(img)"
			>
				<img
					class="absolute w-full h-full object-cover object-center"
					:src="img.src"
					:alt="img.title"
				/>
			</div>
		</div>

		<!-- BUTTON -->
		<div class="py-16 my-2 text-center" v-if="maxShown < filteredImages.length">
			<a
				href=""
				@click.prevent="maxShown += 9"
				class="flex space-x-6 items-center justify-center active:text-primary text-antracite hover:underline"
			>
				<img src="/plus.svg" />
				<span class="uppercase tracking-widest font-bold"
					>Meer foto's laden</span
				>
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Category, GridImage } from "../types";
import { imagesArray } from "../images";

export default defineComponent({
	name: "image-tabs",
	data() {
		return {
			currentCategory: null as Category,
			imagesArray: imagesArray,
			maxShown: 9,
			shownImage: null as GridImage | null,
		};
	},
	methods: {
		setCategoty(cat: Category) {
			this.currentCategory = cat;
		},
		openImage(img: GridImage) {
			this.shownImage = img;
		},
		prevImage(): void {
			const currentIndex = this.shownImages.findIndex(
				(c) => c.src === this.shownImage!.src
			);
			const prevIndex =
				currentIndex == 0 ? this.shownImages.length - 1 : currentIndex - 1;

			this.shownImage = this.shownImages[prevIndex];
		},
		nextImage(): void {
			const currentIndex = this.shownImages.findIndex(
				(c) => c.src === this.shownImage!.src
			);
			const nextIndex =
				currentIndex == this.shownImages.length - 1 ? 0 : currentIndex + 1;

			this.shownImage = this.shownImages[nextIndex];
		},
	},
	computed: {
		filteredImages(): GridImage[] {
			return this.imagesArray.filter(
				(c) =>
					c.category === this.currentCategory || this.currentCategory === null
			);
		},
		shownImages(): GridImage[] {
			return this.filteredImages.slice(0, this.maxShown);
		},
	},
	mounted() {
		const onKeyStroke = (e: KeyboardEvent) => {
			if (this.shownImage !== null) {
				if (e.keyCode === 27) {
					this.shownImage = null;
				} else if (e.keyCode === 39) {
					this.nextImage();
				} else if (e.keyCode === 37) {
					this.prevImage();
				}
			}
		};

		document.addEventListener("keydown", onKeyStroke);
	},
});
</script>
