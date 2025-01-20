<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'


const props = defineProps({
  submitText: {
    type: String,
    default: 'Submit'
  }
})

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const formList = reactive({
  full_name: '',
  company: '',
  email: '',
  data_type: '',
  data_time: '',
  information: ''
})


const emit = defineEmits(['submit'])


const resetForm = () => {
  formList.full_name = ''
  formList.company = ''
  formList.email = ''
  formList.data_type = ''
  formList.data_time = ''
  formList.information = ''
}


const handleSubmit = () => {

  if (!formList.email) {
    ElMessage.error('Please input your email')
    return
  }
  
  if (!emailPattern.test(formList.email)) {
    ElMessage.error('Please enter valid email')
    return
  }

  emit('submit', formList)
  resetForm()
}
</script>

<template>
<div class="form_all_box">
<div class="form_box" style="width: 100%;">
        <div class="form_box_top"></div>
            <div class="form_container" style="">
            <div class="form_title">Data Request Form</div>
            <div class="form_content" style=" ">
                <div class="form_item">
                    <div class="form_item_title">Name: </div>
                    <el-input class="input_item" v-model="formList.full_name" ></el-input>
                </div>
                <div class="form_item">
                    <div class="form_item_title">Company: </div>
                    <el-input class="input_item" v-model="formList.company" ></el-input>
                </div>
                <div class="form_item">
                    <div class="form_item_title">Email: </div>
                    <el-input 
                      class="input_item" 
                      v-model="formList.email"
                      :maxlength="50"
                      placeholder="Please input your email"
                    ></el-input>
                </div>
                <div class="form_item">
                    <div class="form_item_title_two">Requested data types: </div>
                    <el-input class="input_item" v-model="formList.data_type" ></el-input>
                </div>
                <div class="form_item">
                    <div class="form_item_title_two">Data delivery due: </div>
                    <el-input class="input_item" v-model="formList.data_time" ></el-input>
                </div>
                <div >
                    <div class="other_info">Other requests: </div>
                    <el-input class="input_item_box" type="textarea" v-model="formList.information" ></el-input>
                </div>
                <div style="width: 100%; display: flex; justify-content: flex-end;">
                    <div class="submit pointer_txt" @click="handleSubmit">{{ submitText }}</div>
                </div>
                <img class="form_btm" src="@/assets/annotation/form_btm.png" alt="">
            </div>
        </div>

    </div>

    <div class="form_box_mobile">
            <div class="" style="background-color: #fff; padding: 20px; color: #0a091c;">
            <div class="" style="font-size: 18px; color: #1ae28e; padding: 30px 0;">Data Request Form</div>
                <div class="form_item">
                    <div class="mobile_title">Name: </div>
                    <el-input class="input_mobile_item" v-model="formList.uname" ></el-input>
                </div>
                <div class="form_item">
                    <div class="mobile_title">Company: </div>
                    <el-input class="input_mobile_item" v-model="formList.company" ></el-input>
                </div>
                <div class="form_item">
                    <div class="mobile_title">Email: </div>
                    <el-input class="input_mobile_item" v-model="formList.email" ></el-input>
                </div>
                <div class="form_item">
                    <div class="mobile_two">Requested data types: </div>
                    <el-input class="input_mobile_item" v-model="formList.type" ></el-input>
                </div>
                <div class="form_item">
                    <div class="mobile_two" >Data delivery due: </div>
                    <el-input class="input_mobile_item" v-model="formList.duo" ></el-input>
                </div>
                <div >
                    <div class="other_info">Other requests: </div>
                    <el-input class="input_item_box" type="textarea" v-model="formList.information" ></el-input>
                </div>
                <div style="width: 100%; display: flex; justify-content: center;">
                    <div class="mobile_submit pointer_txt" @click="handleSubmit">{{ submitText }}</div>
                </div>
            </div>
    </div>
</div>
</template>

<style scoped>
.form_all_box {
    width: 100%;
}
.form_box {
    display: flex;
    justify-content: center;
    /* height: 1000px; */
    background-image: 
        linear-gradient(to bottom, transparent 50%, #fff 50%);  
    padding-bottom: 50px;
}
.form_container {
    width: 900px;
    padding-top: 100px;
    box-shadow: 0 0 8px  rgba(0, 0, 0, 0.07);
}
.form_content {
    min-width: 415px;
    position: relative;
    background-color: #f9f9f9;
    border-radius: 8px;
    font-size: 26px;
    padding: 47px 64px; 
    border-radius: 8px;
    color: #0a091c;
    box-sizing: border-box;
}
.form_title {
    font-size: 36px;
    color: #1ae28e;
    padding-bottom: 20px;

}
.form_item_title {
    width: 300px;
}
.form_item_title_two {
    width: 380px;
}
.form_item {
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    width: 100%;
    padding-bottom: 25px;
}
.other_info {
    padding-bottom: 20px;
}
.input_item {
    flex: 1;
    height: 40px;
    /* width: 565px; */
}
.input_item_box {
    height: 100px;
    border-radius: 16px;
}
.submit {
    margin-top: 100px;
    width: 240px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background-color: #1ae28e;
    border-radius: 50px;
    transition: all 0.15ms linear;
}
.submit:hover {
    background-color: #1ae28e;
}
.form_btm {
    width: 400px;
    position: absolute;
    bottom: 0;
    left: -100px;
}
.center_top {
    position: absolute;
    top: 35%;
    left: 40%;
    translate: -50%;
    overflow: hidden;
    /* width: 1280px; */
}
.center_btm {
    width: 980px;
}

.form_box_mobile {
    display: none;
    color: #0a091c;
    font-size: 12px;
}
.mobile_title {
    width: 80px;
}
.mobile_two {
    padding-right: 10px; 
    white-space: nowrap;
}
.mobile_submit {
    width: 120px;
    border-radius: 50px;
    background-color: #1ae28e;
    text-align: center;
    padding: 10px 0;
}

@media screen and (max-width: 1200px) {
    .form_container {
        width: 700px;
    }
}
@media screen and (max-width: 768px) {
    .form_box {
        .form_container {
            width: 600px;
        }
        .form_container {
            padding-top: 0;
        }
        .form_item_title {
            font-size: 20px;
            width: 150px;
        }
        .form_item_title_two {
            font-size: 20px;
            width: 250px;
        }
        .other_info {
            font-size: 20px;
        }
        .input_item_box {
            height: 100px;
        }
    }
}
@media screen and (max-width: 440px) {
    .form_container {
        width: 300px;
    }
    .form_box {
        display: none;
    }
    .form_box_mobile {
        display: block;
    }
}
</style>