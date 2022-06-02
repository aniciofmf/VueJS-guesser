<template>
	<div class="container">
		<ul>
			<li v-for="record in data" :key="record.id" @click="$emit('selectedOpt', record.id)">
				<p>{{ record.name }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
ul {
	list-style-type: none;
}
li {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	width: 250px;
	height: 40px;
}

li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}

li > p {
	margin-top: 10px;
	text-transform: capitalize;
}

.container {
	display: flex;
	justify-content: center;
}
</style>
