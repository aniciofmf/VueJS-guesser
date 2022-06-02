import _ from "lodash";
import { SIZE, OPTSTOCUT } from "@/constants/constants";
import axiosApi from "@/api/api";

const getRecords = function getRecords() {
	var optionsArr = Array.from(Array(SIZE));
	return optionsArr.map(function mapIndexes(_, index) {
		return index++;
	});
};

const getOptions = async function getOptions() {
	var mixedRecords = _.shuffle(getRecords());

	var records = await getNames(mixedRecords.splice(0, OPTSTOCUT));

	return records;
};

const getNames = async function getNames(namesArr = []) {
	var [n1, n2, n3, n4] = namesArr;
	var [r1, r2, r3, r4] = await Promise.all([axiosApi.get(`${n1}`), axiosApi.get(`${n2}`), axiosApi.get(`${n3}`), axiosApi.get(`${n4}`)]);

	return [
		{ name: r1.data.name, id: r1.data.id },
		{ name: r2.data.name, id: r2.data.id },
		{ name: r3.data.name, id: r3.data.id },
		{ name: r4.data.name, id: r4.data.id },
	];
};

export default getOptions;
