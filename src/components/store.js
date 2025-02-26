

import { reactive } from 'vue'


export const Patients = reactive({
	Patient1: {
		idcard: '3623301',
		name: '张华',
		sex: '女',
		age: '30',
		doc: '王医生',
		menZhenHao: '000012',
		chuFangHao: '00004',
		thisTimeMedicalRecord: {},
		thisTimePrescription: {}
	},
	Patient2: {
		idcard: '3623302',
		name: '方华',
		sex: '男',
		age: '25',
		doc: '王医生',
		menZhenHao: '000013',
		chuFangHao: '00005',
		thisTimeMedicalRecord: {},
		thisTimePrescription: {}
	},
	Patient3: {
		idcard: '3623303',
		name: '刘建国',
		sex: '男',
		age: '28',
		doc: '王医生',
		menZhenHao: '000014',
		chuFangHao: '00006',
		thisTimeMedicalRecord: {},
		thisTimePrescription: {}
	}
})

export const CurrentPatients = reactive( [ Patients.Patient1, Patients.Patient2, Patients.Patient3 ] )
export const TreatedPatients = reactive( [] )














