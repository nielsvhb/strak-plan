<template>
	<!-- TABS -->
	<div class="flex justify-center space-x-28" id="fotos">
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
		class="fixed w-screen h-screen inset-0 p-10 z-10 flex items-center justify-center bg-black bg-opacity-80 flex-col space-y-6 select-none"
	>
		<a href="" @click.prevent="shownImage = null" title="Lightbox sluiten">
			<img src="/lightbox/close.svg" alt="Lightbox sluiten" />
		</a>
		<div class="flex space-x-10 items-center">
			<a href="" @click.prevent="prevImage" title="Vorige">
				<img src="/lightbox/prev.svg" alt="Vorige" />
			</a>
			<div class="relative">
				<img :src="shownImage.src" :alt="shownImage.title" />
				<div
					class="absolute mt-4 p-4 bg-primary text-white flex space-x-10 items-center w-full"
				>
					<div class="w-3/4">
						<p class="font-semibold leading-[19px]">
							{{ shownImage.description }}
						</p>
					</div>
					<div class="text-right">
						<div class="font-bold mb-2">{{ shownImage.title }}</div>
						<div class="leading-4">{{ shownImage.project }}</div>
					</div>
				</div>
			</div>
			<a href="" @click.prevent="nextImage" title="Volgende">
				<img src="/lightbox/next.svg" alt="Volgende" />
			</a>
		</div>
	</div>

	<div class="3xl:container">
		<!-- IMAGES -->
		<div class="grid grid-cols-3">
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
		<div class="my-8 text-center" v-if="maxShown < shownImages.length">
			<a
				href=""
				@click.prevent="maxShown += 9"
				class="inline-flex space-x-6 items-center justify-center active:text-primary text-antracite hover:underline"
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
import type { Category } from "../types";

interface GridImage {
	src: string;
	title: string;
	description: string;
	project: string;
	category: Category;
}

const imagesArray: GridImage[] = [
	{
		src: "/images/1.jpg",
		title: "test",
		description:
			"Nachtraven interior, funderingen, poolhouse, cement, keyword, vrij in te vullen tekst naar believen. Maximale ruimte wel ietwat in te perken tot een redelijk aantal karakters.",
		project: "Project Villa bekaert",
		category: "interieur",
	},
	{
		src: "/images/2.jpg",
		title: "test",
		description:
			"Nachtraven interior, funderingen, poolhouse, cement, keyword, vrij in te vullen tekst naar believen. Maximale ruimte wel ietwat in te perken tot een redelijk aantal karakters.",
		project: "Project Villa bekaert",
		category: "interieur",
	},
	{
		src: "/images/3.jpg",
		title: "test",
		description:
			"Nachtraven interior, funderingen, poolhouse, cement, keyword, vrij in te vullen tekst naar believen. Maximale ruimte wel ietwat in te perken tot een redelijk aantal karakters.",
		project: "Project Villa bekaert",
		category: "ruwbouw",
	},
	{
		src: "/images/4.jpg",
		title: "test",
		description:
			"Nachtraven interior, funderingen, poolhouse, cement, keyword, vrij in te vullen tekst naar believen. Maximale ruimte wel ietwat in te perken tot een redelijk aantal karakters.",
		project: "Project Villa bekaert",
		category: "ruwbouw",
	},
	{
		src: "/images/5.jpg",
		title: "test",
		description:
			"Nachtraven interior, funderingen, poolhouse, cement, keyword, vrij in te vullen tekst naar believen. Maximale ruimte wel ietwat in te perken tot een redelijk aantal karakters.",
		project: "Project Villa bekaert",
		category: "ruwbouw",
	},
	{
		src: "/images/6.jpg",
		title: "test",
		description:
			"Nachtraven interior, funderingen, poolhouse, cement, keyword, vrij in te vullen tekst naar believen. Maximale ruimte wel ietwat in te perken tot een redelijk aantal karakters.",
		project: "Project Villa bekaert",
		category: "ruwbouw",
	},
];

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
		shownImages(): GridImage[] {
			return this.imagesArray
				.filter(
					(c) =>
						c.category === this.currentCategory || this.currentCategory === null
				)
				.slice(0, this.maxShown);
		},
	},
	mounted() {
		const onKeyStroke = (e: KeyboardEvent) => {
			if (this.shownImage !== null) {
                if(e.keyCode === 27) {
                    this.shownImage = null;
                } else if(e.keyCode === 39) {
                    this.nextImage();
                } else if(e.keyCode === 37) {
                    this.prevImage();
                }
            }
		};

		document.addEventListener("keydown", onKeyStroke);
	},
});
</script>
