<template>
	<div v-if="match">
		<h1>Make your Guess</h1>
		<Picture :id="match.id" :show="showMatch" />
		<Options :data="dataArr" @selected-opt="check" />

		<template class="fade-in" v-if="answer">
			<h2>{{ message }}</h2>
			<button @click="reset" class="btn-reset">Reset Game</button>
		</template>
	</div>

	<div v-else>
		<h1>Waiting for the info ..</h1>
	</div>
</template>

<script>
import Picture from "@/components/Picture.vue";
import Options from "@/components/Options.vue";

import getOptions from "@/helpers/getOptions";

export default {
	name: "Main",
	components: { Picture, Options },
	data() {
		return {
			dataArr: [],
			match: null,
			showMatch: false,
			answer: false,
			message: null,
		};
	},
	methods: {
		async dataArray() {
			var randomNmb = Math.floor(Math.random() * 4);
			this.dataArr = await getOptions();
			this.match = this.dataArr[randomNmb];
		},
		check(id) {
			this.answer = true;

			if (this.showMatch) {
				this.reset();
			}

			if (id == this.match.id) {
				this.message = `Well done!, its ${this.match.name}`;
			} else {
				this.message = `Mmm nope, its ${this.match.name}`;
			}

			this.showMatch = true;
		},
		reset() {
			this.dataArray();
			this.answer = false;
			this.showMatch = false;
			this.match = null;
		},
	},
	mounted() {
		this.dataArray();
	},
};
</script>

<style scoped>
.btn-reset {
	height: 50px;
	border-radius: 5px;
	background: #f7f7f7;
	border: 2px solid #817f7f;
	cursor: pointer;
	margin-bottom: 10px;
}

button.btn-reset:hover {
	background: #e1e1e1;
	color: black;
}
</style>
