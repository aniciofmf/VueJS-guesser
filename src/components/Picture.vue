<template>
	<div class="container">
		<img :src="imgSrc" class="hidden" />
		<img v-if="show" :src="imgSrc" class="fade-in" />
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
		show: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	computed: {
		imgSrc() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
		},
	},
};
</script>

<style scoped>
.hidden {
	filter: brightness(0);
}

.container {
	height: 220px;
}

img {
	height: 200px;
	position: absolute;
	right: 35%;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
}
</style>
