<template>

	<!-- LIGHTBOX -->
	<div
		v-if="shownImage"
		class="fixed  h-screen inset-0 z-10 sm:flex items-center justify-center bg-black bg-opacity-90 flex-col  select-none"
	>
		<a
			href=""
			@click.prevent="shownImage = null"
			title="Lightbox sluiten"
			class="absolute sm:static z-20 right-0 top-0 p-8 sm:p-6"
		>
			<img src="/lightbox/close.svg" alt="Lightbox sluiten" class="w-8" />
		</a>
		<div class="flex sm:space-x-10 items-center h-full w-full">
			<a
				href=""
				@click.prevent="prevImage"
				title="Vorige"
				class="p-6"
			>
				<img src="/lightbox/prev.svg" alt="Vorige" class="w-4" />
			</a>
			<div class="relative flex h-full items-center justify-center grow">
				<img
					:src="shownImage"
					alt=""
					class="sm:max-h-[70vh] max-w-[70vw]"
				/>
				<div
					class="fixed sm:absolute sm:mt-4 p-5 bg-primary text-white hidden sm:space-x-10 items-center w-full bottom-0 sm:bottom-auto "
				>
				</div>
			</div>
			<a
				href=""
				@click.prevent="nextImage"
				title="Volgende"
				class="p-6"
			>
				<img src="/lightbox/next.svg" alt="Volgende" class="w-4" />
			</a>
		</div>
	</div>

	<div class="3xl:container">
		<!-- IMAGES -->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
			<div
				class="relative overflow-hidden after:content[''] after:block after:pb-[100%] cursor-pointer"
				v-for="img in images"
				@click="openImage(img)"
			>
				<img
					class="absolute w-full h-full object-cover object-center"
					:src="img"
				/>
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "image-tabs",
  props: {
    images: {
      type: Array as () => string[],
      required: true
    }
  },
	data() {
		return {
			shownImage: null as string | null,
		};
	},
	methods: {
		openImage(img: string) {
			this.shownImage = img;
		},
		prevImage(): void {
			const currentIndex = this.images.findIndex(
				(c) => c === this.shownImage!
			);
			const prevIndex =
				currentIndex == 0 ? this.images.length - 1 : currentIndex - 1;

			this.shownImage = this.images[prevIndex];
		},
		nextImage(): void {
			const currentIndex = this.images.findIndex(
				(c) => c === this.shownImage!
			);
			const nextIndex =
				currentIndex == this.images.length - 1 ? 0 : currentIndex + 1;

			this.shownImage = this.images[nextIndex];
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
