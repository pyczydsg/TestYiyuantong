
<script setup>

import { ref, reactive } from 'vue'

const props = defineProps( { message: {} } );
const thisPatient = props.message;

const thisMR = reactive( {
    ZhuShu: '',
    JiWangShi: '',
    TiJian: { TiWen:'', MaiBo:'', XinLv:'', XueYa:'', Remark:'' },
    ZhenDuan: '',
    ChuLiYiJian: '',
    isFuZhen: false,
    FuZhenRemark: '',
    FuZhenRiQi: ''
} )



</script>

<template>

<el-row style="background: #6C6E72;">
    <span>病人信息</span>
</el-row>
<el-descriptions column="5" border="true">
    <el-descriptions-item label="门诊号：">{{ thisPatient.menZhenHao }}</el-descriptions-item>
    <el-descriptions-item label="姓名：">{{ thisPatient.name }}</el-descriptions-item>
    <el-descriptions-item label="性别：">{{ thisPatient.sex }}</el-descriptions-item>
    <el-descriptions-item label="年龄：">{{ thisPatient.age }}</el-descriptions-item>
    <el-descriptions-item label="医生：">{{ thisPatient.doc }}</el-descriptions-item>
    <el-descriptions-item label="病人ID：">{{ thisPatient.idcard }}</el-descriptions-item>
    <el-descriptions-item label="登记时间：">略</el-descriptions-item>
    <el-descriptions-item label="支付类型：">略</el-descriptions-item>
    <el-descriptions-item label="状态：">略</el-descriptions-item>
    <el-descriptions-item label="书写：">{{ thisPatient.doc }}</el-descriptions-item>
</el-descriptions>

<el-row style="margin-top:2%">
    <el-col :span="24" style="background: #6C6E72;">
        <span>门诊病历</span>
    </el-col>
    <el-col :span="24">
        <el-button-group>
            <el-button>保存提交</el-button>
            <el-button>选择模板</el-button>
            <el-button>另存模板</el-button>
            <el-button>历史病历</el-button>
            <el-button>打印病历</el-button>
        </el-button-group>
    </el-col>
    <el-col :span="24" style="margin-top:1%">
        <el-text>主述</el-text>
    </el-col>
    <el-col :span="24">
        <el-input v-model="thisMR.ZhuShu" style="width: 100%" :autosize="{ minRows: 3}" type="textarea" placeholder="Please input" />
    </el-col>
    <el-col :span="24" style="margin-top:1%">
        <el-text>既往史</el-text>
    </el-col>
    <el-col :span="24">
        <el-input v-model="thisMR.JiWangShi" style="width: 100%" :autosize="{ minRows: 3}" type="textarea" placeholder="Please input" />
    </el-col>
    <el-col :span="24" style="margin-top:1%">
        <el-text>体检</el-text>
    </el-col>
    <el-col :span="24">
        <el-input v-model="thisMR.TiJian.Remark" style="width: 100%" :autosize="{ minRows: 2}" type="textarea" placeholder="Please input" />
    </el-col>
    <el-col :span="24" style="margin-top:1%">
        <el-text>诊断</el-text>
    </el-col>
    <el-col :span="24">
        <el-input v-model="thisMR.ZhenDuan" style="width: 100%" :autosize="{ minRows: 2}" type="textarea" placeholder="Please input" />
    </el-col>
    <el-col :span="24" style="margin-top:1%">
        <el-text>处理意见</el-text>
    </el-col>
    <el-col :span="24">
        <el-input v-model="thisMR.ChuLiYiJian" style="width: 100%" :autosize="{ minRows: 2}" type="textarea" placeholder="Please input" />
    </el-col>
    <el-col :span="2" style="margin-top:1%">
        <el-text>是否需要复诊</el-text>
    </el-col>
    <el-col :span="1" style="margin-top:1%">
        <el-checkbox v-model="thisMR.isFuZhen" size="small" />
    </el-col>
    <el-col :span="21" style="margin-top:1%">
        <el-date-picker v-model="thisMR.FuZhenRiQi" type="date" placeholder="复诊日期" size="small" />
    </el-col>
    <el-col :span="24">
        <el-input v-model="thisMR.FuZhenRemark" style="width: 100%" :autosize="{ minRows: 2}" type="textarea" placeholder="Please input" />
    </el-col>
</el-row>


</template>

<style scoped>

</style>






