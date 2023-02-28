<template>
	<div
		@click="isOpen = true"
		:class="{ '!px-24 !py-16': isOpen }"
		class="cursor-pointer flex-col bg-antracite drop-shadow-[10px_10px_0_rgba(0,0,0,0.25)] px-16 py-5 uppercase font-bold text-white tracking-widest flex items-center"
	>
		<template v-if="!isSent">
			<div class="flex items-center" :class="{ 'text-primary mt-6': isOpen }">
				Neem contact met mij op
				<img
					src="/arrow-right.svg"
					class="ml-2"
					:class="{ 'rotate-90 transition-transform duration-500': isOpen }"
				/>
			</div>

			<form
				v-show="isOpen"
				class="normal-case font-normal tracking-normal font-sans mt-10 text-white text-center text-xl cursor-default"
				name="contact"
				method="POST"
				data-netlify-honeypot="bot-field"
				data-netlify="true"
				enctype="application/x-www-form-urlencoded"
				@submit.prevent="handleFormSubmit"
			>
				<input type="hidden" name="form-name" value="contact" />

				<p>
					Laat ons een e-mailadres of telefoonnummer<br />
					en we nemen zo snel mogelijk contact op.
				</p>

				<div class="mt-10 flex">
					<input
						v-model="formData.phoneOrEmail"
						id="phoneOrEmail"
						name="phoneOrEmail"
						type="text"
						class="py-4 px-6 text-lg w-72 font-bold text-antracite"
					/>
					<button
						type="submit"
						class="bg-primary text-white hover:underline font-native py-3 px-6 text-center text-4xl"
					>
						sturen!
					</button>
				</div>
			</form>
		</template>
		<div v-else>
			<div class="uppercase text-primary tracking-widest text-left mb-2">
				Bedankt!
			</div>
			<p class="text-white font-normal normal-case">
				We nemen zo snel mogelijk contact op!
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
	name: "contact",
	data() {
		return {
			isOpen: false,
			isSent: false,
			formData: {
				phoneOrEmail: "",
			},
		};
	},
	methods: {
		encode(data: any) {
			const formData = new FormData();

			for (const key of Object.keys(data)) {
				formData.append(key, data[key]);
			}

			return formData;
		},
		async handleFormSubmit(e: Event) {
			await axios.post(
				location.href,
				this.encode({
					"form-name": (e!.target! as HTMLFormElement).getAttribute("name"),
					...this.formData,
				}),
				{
					headers: { "Content-Type": "application/x-www-form-urlencoded" },
				}
			);

			this.isSent = true;
		},
	},
});
</script>
