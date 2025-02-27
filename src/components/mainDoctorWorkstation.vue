

<script setup>


import { ref, reactive } from 'vue'
import { Patients, CurrentPatients, TreatedPatients } from './store.js'
import MedicalRecord from './MedicalRecord.vue'
import Prescription from './Prescription.vue'


const witchTabPatients = ref( "TreatingTab" )
const selectedPatient = ref( {name:''} )

const activeName = ref('Home')    //当前标签页

const Tags = reactive( [
	{
		name: 'Home',
		label: '首页'
	},
	{
		name: 'StatisticsQuery',
		label: '统计查询'
	},
	{
		name: 'MedicineRetailManagement',
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
		<el-aside id="daohang">
			<el-row style="border: 2px solid var(--el-border-color); flex: 1,1,500px;">
				<el-col>
					<el-menu>
						<el-text style="color:red">{{ selectedPatient.name || '(未选中病人)'}}</el-text>
						<el-menu-item index="1">
							<span @click="viewMedicalRecord">门诊病历</span>
						</el-menu-item>
						<el-menu-item index="2">
							<span @click="viewPrescription">门诊处方</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
			<el-row justify="center" align="middle">
				<el-col :span="24">
					<el-tabs v-model="witchTabPatients.value">
						<el-tab-pane :name="TreatingTab">现诊</el-tab-pane>
						<el-tab-pane :name="TreatedTab">完诊</el-tab-pane>
					</el-tabs>
				</el-col>
				<el-col :span="24">
					<el-button-group>
					<el-button size="small">挂号</el-button>
					<el-button size="small">接诊</el-button>
					<el-button size="small">完诊</el-button>
					</el-button-group>
				</el-col>
				<el-col :span="24">
					<el-scrollbar v-if="witchTabPatients=='TreatingTab'">
						<el-row v-for="( CurrentPatient, index) in CurrentPatients" :key="CurrentPatient.idcard" @click="clickPatient( CurrentPatient)">
							<el-col style="border: 1px solid var(--el-border-color); padding:9px;"
								>{{index+1}}号：{{CurrentPatient.name}}，年龄：{{CurrentPatient.age}}，性别：{{CurrentPatient.sex}}，门诊号：{{CurrentPatient.menZhenHao}}</el-col>
						</el-row>
					</el-scrollbar>
					<el-scrollbar v-if="witchTabPatients=='TreatedTab'">
						<el-row v-for="( TreatedPatient, index) in TreatedPatients" :key="TreatedPatient.idcard" style="height: 100px;" @click="clickPatient( CurrentPatient)">
							<el-col style="border: 1px solid var(--el-border-color); padding:9px;"
								>{{index+1}}号：{{TreatedPatient.name}}，年龄：{{TreatedPatient.age}}，性别：{{TreatedPatient.sex}}，门诊号：{{TreatedPatient.menZhenHao}}</el-col>
						</el-row>
					</el-scrollbar>
				</el-col>
			</el-row>
		</el-aside>

		<el-container>
			<el-header id="tabMain">
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
	width: 10vw;
	height: 100vh;
}
#tabMain {
	background: #636466;
	width: 90vw;
	height: 10vh;
}
#mainRegion {
	background: #A3A6AD;
	width: 90vw;
	height: 90vh;
}

</style>









