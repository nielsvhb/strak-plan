<template>

         <a 
         href="" 
         @click.prevent="isOpen = true"
          :class="{'!px-24 !py-16': isOpen}"
         class="flex-col bg-antracite drop-shadow-[10px_10px_0_rgba(0,0,0,0.25)] px-16 py-5 uppercase font-bold text-white tracking-widest flex items-center">
         <template v-if="!isSent">
            <div class="flex items-center" :class="{'text-primary mt-6': isOpen}">
                Neem contact met mij op <img src="/arrow-right.svg" class="ml-2" :class="{'rotate-90 transition-transform duration-400': isOpen}"/>
            </div>
            
            <div v-if="isOpen" class="normal-case font-normal tracking-normal font-sans mt-10 text-white text-center text-xl cursor-default">
                <p>
                    Laat ons een e-mailadres of telefoonnummer<br/> en we nemen zo snel mogelijk contact op.
                </p>

                <div class="mt-10 flex">
                    <input type="text" class="py-4 px-6 text-lg w-72 font-bold text-antracite" />
                    <button class="bg-primary text-white underline font-native py-3 px-6 text-center text-4xl" @click.prevent.stop="">Sturen!</button>
                </div>
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
        </a>

</template>

<script lang="ts">
    import { defineComponent } from "vue";


    export default defineComponent({
        name: "contact",
        data() {
            return {
                isOpen: false,
                isSent: false
            }
        }
    });
</script>