<template>
	<div
		@click="isOpen = true"
		:class="{ 'px-4 sm:px-24 sm:py-16': isOpen }"
		class="cursor-pointer flex-col bg-antracite drop-shadow-[10px_10px_0_rgba(0,0,0,0.25)] px-16 py-5 uppercase font-bold text-white tracking-widest flex items-center mx-0 sm:mx-6"
	>
		<template v-if="!isSent">
			<div
				class="flex items-center text-center"
				:class="{ 'text-primary mt-6': isOpen }"
			>
				Neem contact met mij op
				<img
					src="/arrow-right.svg"
					class="ml-2"
					:class="{ 'rotate-90 transition-transform duration-500': isOpen }"
				/>
			</div>

			<div
					v-show="isOpen"
					class="normal-case font-normal tracking-normal font-sans mt-10 text-white text-center text-xl cursor-default sm:w-96 w-full">
				<iframe style="width: 100%; height: 610px;" src="https://meeting.teamleader.eu/embed/form/strak-plan/website-bouwcoordinatie/" frameborder="0"></iframe>
			</div>
			
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
