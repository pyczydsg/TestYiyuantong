

<script setup>


import { ref, reactive } from 'vue'
import { Patients, CurrentPatients, TreatedPatients } from './store.js'
import Home from './Home.vue'
import StatisticsQuery from './StatisticsQuery.vue'
import MedicineRetailManagement from './MedicineRetailManagement.vue'
import MedicalRecord from './MedicalRecord.vue'
import Prescription from './Prescription.vue'


const witchTabPatients = ref( "TreatingTab" )
const selectedPatient = ref( {name:''} )

const activeName = ref('Home')    //当前标签页

const Tags = reactive( [
	{
		name: Home,
		label: '首页'
	},
	{
		name: StatisticsQuery,
		label: '统计查询'
	},
	{
		name: MedicineRetailManagement,
		label: '药品零售管理'
	}
	
] );

function clickPatient( CurP) {
	selectedPatient.value = CurP;
}
function viewMedicalRecord() {
	if( !selectedPatient.value.name ) {
		alert( "当前未选中病人。" );
	} else {
		const tempTag = {name:'MedicalRecord' ,label:selectedPatient.value.name+'：现诊病历'};
		Tags.push( tempTag );
	}
}
function viewPrescription() {
	if( !selectedPatient.value.name ) {
		alert( "当前未选中病人。" );
	} else {
		const tempTag = {name:'Prescription' ,label:selectedPatient.value.name+'：现诊处方'};
		Tags.push( tempTag );
	}
}

</script>

<template>

	<el-container>
		<el-aside id="daohang" width="13%" height="100%">
			<div>
				<el-scrollbar height="340px">
					<el-text style="color:red">{{ selectedPatient.name || '(未选中病人)'}}</el-text>
					<p>门诊治疗</p>
						<a style="padding-left: 20px;" @click="viewMedicalRecord">门诊病历</a><br/>
						<a style="padding-left: 20px;" @click="viewPrescription">门诊处方</a><br/>
				</el-scrollbar>
			</div>
			<el-divider style="margin: 0;"></el-divider>
			<div>
				<el-radio-group v-model="witchTabPatients">
					<el-radio-button value="TreatingTab">现诊病人</el-radio-button>
					<el-radio-button value="TreatedTab">完诊病人</el-radio-button>
				</el-radio-group>
				<el-button size="small">挂号</el-button>
				<el-button size="small">接诊</el-button>
				<el-button size="small">完诊</el-button>
				<el-scrollbar v-if="witchTabPatients=='TreatingTab'" height="400px">
					<el-card v-for="( CurrentPatient, index) in CurrentPatients" :key="CurrentPatient.idcard" style="height: 100px;" @click="clickPatient( CurrentPatient)">
						<p>{{index+1}}号：{{CurrentPatient.name}}，年龄：{{CurrentPatient.age}}，性别：{{CurrentPatient.sex}}，门诊号：{{CurrentPatient.menZhenHao}}</p>
					</el-card>
				</el-scrollbar>
				<el-scrollbar v-if="witchTabPatients=='TreatedTab'" height="400px">
					<el-card v-for="( TreatedPatient, index) in TreatedPatients" :key="TreatedPatient.idcard" style="height: 100px;" @click="clickPatient( CurrentPatient)">
						<p>{{index+1}}号：{{TreatedPatient.name}}，年龄：{{TreatedPatient.age}}，性别：{{TreatedPatient.sex}}，门诊号：{{TreatedPatient.menZhenHao}}</p>
					</el-card>
				</el-scrollbar>
			</div>
		</el-aside>

		<el-container>
			<el-header id="tabMain" height="6%">
				<el-tabs v-model="activeName">
					<el-tab-pane v-for="( tag, index) in Tags" :key="tag.label" :label="tag.label" :name="tag.name"></el-tab-pane>
				</el-tabs>
			</el-header>

			<el-main id="mainRegion">
				<MedicalRecord v-if="activeName == 'MedicalRecord'" :message="selectedPatient" />
				<Prescription v-if="activeName == 'Prescription'" :message="selectedPatient" />
			</el-main>
		</el-container>
	</el-container>


</template>





<style scoped>

#daohang {
	background: #6C6E72;
}
#tabMain {
	background: #636466;
}
#mainRegion {
	background: #A3A6AD;
}


</style>









