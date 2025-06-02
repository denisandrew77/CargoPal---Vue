<script setup>
const props = defineProps({
  plateNumber:String,
})
</script>
<template>
<div class="collapse collapse-arrow  border border-base-300">
  <input type="radio" name="my-accordion-2"/>
  <div class="collapse-title font-semibold text-3xl">{{props.plateNumber}}</div>
  <div class="collapse-content text-sm flex-col space-y-3">
    <input type="text" class="focus:bg-zinc-200 focus:outline-none px-4 py-2 rounded-lg bg-zinc-100 placeholder-stone-500 text-base w-full" placeholder="Oras">
    <input type="text" class="focus:bg-zinc-200 focus:outline-none px-4 py-2 rounded-lg bg-zinc-100 placeholder-stone-500 text-base w-full" placeholder="Tara">
    <input type="text" class="focus:bg-zinc-200 focus:outline-none px-4 py-2 rounded-lg bg-zinc-100 placeholder-stone-500 text-base w-full" placeholder="Cod Postal">
    <button class="rounded-md px-4 py-2 bg-green-600 active:bg-green-700 text-white font-bold border-0 text-base w-full">Save</button>
  </div>
</div>
</template>