<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus';
import { fileUpload, sendEmail, zhaopin } from '@/api';
import { useRouter } from 'vue-router';
import Condition from '@/components/condition.vue';

const router = useRouter();






const email = ref('');

const goTwitter = () => {
    window.open('https://x.com/Alaya_AI', '_blank');
}
const goTelegram = () => {
    window.open('https://t.me/Alaya_AI', '_blank');
}
const goMedium = () => {
    
    window.open('https://medium.com/@alaya-ai', '_blank');
}
const goGithub = () => {
    window.open('https://github.com/', '_blank');
}
const goContent = () => {
    window.open('https://alaya-ai.gitbook.io/alaya-ai', '_blank');
}


const goDistributedData = () => {
    router.push('/annotation');
}
const goOpenDataPlatform = () => {
    router.push('/platform')
}
const goAIAutoLabellingToolset = () => {
    router.push('/labeling')
}
const goDocumentation = () => {
    window.open('https://alaya-ai.gitbook.io/alaya-ai', '_blank');
}
const goMediaKit = () => {
    window.open('https://drive.google.com/file/d/1uyvcg8UfA9JYZCYOmXm8f3oTfT57tbzB/view', '_blank');
}

const dialogFormVisible = ref(false)
const formLabelWidth = '100px'
const form = reactive({
    post:'',
    resume:'',
    name:'',
    email:'',
    phone:'',
    other:'',
})

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/


const formRef = ref(null)


const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input Activity email', trigger: 'blur' },
    { pattern: emailPattern, message: 'Please enter the correct email address', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: 'Please input Activity phone', trigger: 'blur' },
  ],
  resume: [
    { required: true, message: 'Please upload your resume', trigger: 'change' },
  ]
})

const dialogConfirmVisible = ref(false)
const closeConfirm = () => {
    dialogConfirmVisible.value = false
    dialogFormVisible.value = false
}






const handleFileChange = async (file) => {

  const isValidType = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip', 'application/x-zip-compressed'].includes(file.raw.type)

  const isLt5M = file.raw.size / 1024 / 1024 < 50

  if (!isValidType) {
    ElMessage.error('Please upload PDF, Word or ZIP document')
    return false
  }

  if (!isLt5M) {
    ElMessage.error('File size cannot exceed 50MB!')
    return false
  }


  const formData = new FormData()
  formData.append('file', file.raw)
  
  try {
    const response = await fileUpload(formData)
    console.log(response);
    
    if (response.data.code === 200) {
      form.resume = response.data.data.url
      ElMessage.success('File uploaded successfully')
    } else {
      ElMessage.error(response.message || 'File upload failed')
    }
  } catch (error) {
    ElMessage.error('Upload failed, please try again')
  }
  
  return false 
}


const uploadConfig = {
  action: '#', 
  autoUpload: false,
  showFileList: true,
  limit: 1
}

const conditionRef = ref(null)


const goTerms = () => {
  conditionRef.value.openDialog()
}



const postSubmit = async () => {
  if (!formRef.value) return
  
  try {

    await formRef.value.validate()

    const submitData = {
      post: form.post,
      resume: form.resume,
      full_name: form.name,
      email: form.email,
      phone: form.phone,
      other: form.other,
    }


    const response = await zhaopin(submitData)
    if (response.data.code === 200) {
      ElMessage.success('Submit successfully')
      dialogFormVisible.value = false

      formRef.value.resetFields()
    } else {
      ElMessage.error(response.message || 'Submit failed')
    }
  } catch (error) {
    console.error('Submit error:', error)
    ElMessage.error('Please complete all required fields')
  }
}


const postEmail = async () => {

  if (!email.value) {
    ElMessage.error('Please input your email')
    return
  }
  
  if (!emailPattern.test(email.value)) {
    ElMessage.error('Please enter valid email')
    return
  }

  try {
    const response = await sendEmail({ email: email.value })
    if (response.data.code === 200) {
      ElMessage.success('Subscribe successfully')

      email.value = ''
    } else {
      ElMessage.error(response.data.message || 'Subscribe failed')
    }
  } catch (error) {
    console.error('Subscribe error:', error)
    ElMessage.error('Subscribe failed, please try again')
  }
}


const baseWidth = 1200 
const scale = ref(1)

const updateScale = () => {
  const width = window.innerWidth
  scale.value = Math.min(width / baseWidth, 1)
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})

</script>
<template>
    <div class="footer_box">
        <div class="footer_content">
            <img class="footer_logo" src="@/assets/x2/aia_logo.png" alt="">
            <div class="footer_content_center">
                <div class="footer_content_left">
                    <div class="title">Follow us</div>
                    <div class="footer_icon_content">
                        <img class="img_icon" src="@/assets/footer/twitter.png" alt="" @click="goTwitter">
                        <img class="img_icon" src="@/assets/footer/telegram.png" alt="" @click="goTelegram">
                        <img class="img_icon" src="@/assets/footer/medium_logo.png" alt="" @click="goMedium">
                        <img class="img_icon" src="@/assets/footer/content.png" alt="" @click="goContent">
                    </div>
                    <div class="title">Subscribe to our newsletter</div>
                    <el-input 
                        class="footer_input" 
                        v-model="email" 
                        placeholder="Enter your e-mail"
                        @keyup.enter="postEmail"
                    >
                        <template #suffix>
                            <img 
                                class="footer_input_icon" 
                                src="@/assets/email.svg" 
                                alt="" 
                                @click="postEmail"
                            >
                        </template>
                    </el-input>
                </div>
                <div class="footer_content_right">
                    <div class="footer_content_right_small">
                        <div class="title">About Alaya Al</div>
                        <div class="guidance pointer_txt" style="display: flex;">
                            <div>
                                <div class="guidance_right" @click="goDistributedData">Distributed Data</div>
                                <div class="guidance_right" @click="goOpenDataPlatform">Open Data Platform</div>
                                <div class="guidance_right" @click="goAIAutoLabellingToolset">AI auto-labelling toolset</div>
                                <div class="guidance_right" @click="dialogFormVisible = true">Careers</div>
                                <div class="guidance_right" @click="goContactUs">
                                    <a href="mailto:alaya-ai@aialaya.io" class="custom-link">Contact Us</a>
                                </div>
                            </div>
                            <div class="guidance_left">
                                <div @click="goDocumentation">Documentation</div>
                                <div>
                                    <a href="/media/mediakit.zip" download="media_kit.zip" class="custom-link">Media Kit</a>
                                </div>
                                <div @click="goTerms">Terms & Conditions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    <el-dialog v-model="dialogFormVisible" style="min-width: 350px; max-width: 800px;">
        <template #header>
            <div class="form_padding" style="color: #1ae28e; font-size: 20px; font-weight: 700;">Careers</div>
        </template>
        <div class="form_padding" style="padding-bottom: 30px;">SUBMIT YOUR APPLICATION</div>
    <el-form
      ref="formRef"
      class="dialog_form form_padding"
      :model="form"
      :rules="rules"
      label-position="left"
    >
      <el-form-item label="Position:" prop="post" :label-width="formLabelWidth">
        <el-select v-model="form.post" placeholder="Temporary vacancy">
        </el-select>
      </el-form-item>
      <el-form-item label="Resume/CV:" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            v-bind="uploadConfig"
            :on-change="handleFileChange"
            :limit="1"
          >
            <div class="upload-trigger">Upload your resume/CV</div>
          </el-upload>
      </el-form-item>
      <el-form-item label="Full name:" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Email:" :label-width="formLabelWidth" prop="email">
        <el-input v-model="form.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Phone:" :label-width="formLabelWidth" prop="phone">
        <el-input v-model="form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Other:" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.other" autosize placeholder="Tell us more about yourself and why you are interested in working with us" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer" style="display: flex; justify-content: center; padding-bottom: 20px;">
        <div class="pointer_txt" style="background-color: #1ae28e; color: #000; padding: 10px 20px; border-radius: 50px;
         width: 90px; text-align: center;"  @click="postSubmit">
         Submit
        </div>
      </div>
    </template>
  </el-dialog>

  <!-- 确认弹窗 -->
  <Condition ref="conditionRef" />
  <el-dialog v-model="dialogConfirmVisible" width="350" position="center" :show-close="false">
    <div>
        <div style="font-weight: 700; font-size: 20px; text-align: center; color: #000;">Application form submitted</div>
    </div>
    <template #footer>
        <div class="dialog-footer" style="display: flex; justify-content: center; padding-bottom: 20px;">
            <div class="pointer_txt" style="color: #1ae28e; font-size: 20px; font-weight: 700;" @click="closeConfirm">
                OK
            </div>
        </div>
    </template>
  </el-dialog>
    <div class="footer_bottom">
            © 2025 Alaya Al.All Rights Reserved.
        </div>
</template>
<style scoped>
.custom-link {
    text-decoration: none; 
    color: inherit; 
  }
.footer_box {
    /* height: 600px; */
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1;
    border-top: 1px solid #f1f1f1;
    padding: 100px 0 50px 0;
    color: #000;
    box-sizing: border-box;
}
.footer_logo {
    width: 150px;
}
.footer_content {
    width: calc(1280px * v-bind(scale));
    margin: 0 auto;
}
.footer_content_center {
    display: flex; 
    justify-content: space-between; 
    padding-top: calc(50px * v-bind(scale));
}

.footer_icon_content {
    display: flex; 
    gap: calc(20px * v-bind(scale)); 
    padding: calc(40px * v-bind(scale)) 0;
}
.img_icon {
    width: calc(50px * v-bind(scale));
}
.title {
    font-family: 'Enter';
    font-size: 20px;
    font-weight: 700;
}
.footer_content_left {
    flex: 1;
}
.footer_content_right {
    flex: 1;
    display: flex;
    padding-left: calc(100px * v-bind(scale));
}
.guidance {
    display: flex;
    font-size: calc(22px * v-bind(scale));
    line-height: 2;
    padding-top: calc(10px * v-bind(scale));
    color: #3d3d3d;
}
.guidance_left {
    margin-left: calc(100px * v-bind(scale));
}
.footer_bottom {
    height: 60px;
    line-height: 60px;
    font-size: calc(14px * v-bind(scale));
    text-align: center;
    color: #999;
    background-color: #fff;
}
.footer_input {
    max-width: calc(350px * v-bind(scale));
    height: calc(60px * v-bind(scale));
    margin-top: 20px;
}

.footer_input_icon {
    width: 30px;
    cursor: pointer;
}
.form_padding {
    padding: 0 30px;
}
::v-deep .el-input__wrapper {
    font-family: 'PingFangSC';
    font-size: 20px;
}
:deep(.el-input__wrapper input::placeholder) {
  font-family: 'PingFangSC';
  color: #5d5d5b !important;
  font-weight: normal !important;
}
.gui_top {
    margin-top: 20px;
}

::v-deep .el-dialog__title {
    color: #1ae28e;
}


 @media screen and (max-width: 1267px) {
  .footer_content {
      width: calc(1100px * v-bind(scale));
      margin: 0 auto;
  }
  .footer_content_right {
    padding-left: calc(50px * v-bind(scale));
  }
  .guidance {
      font-size: calc(20px * v-bind(scale));  
    }
  .footer_input {
      max-width: 280px;
  }
 }
@media screen and (max-width: 719px) { 
    .footer_box {
        padding: 100px 50px 50px 50px;
    }
    .footer_content {
        width: 100%;
    }
    .footer_content_center {
        display: block;
    }
    .footer_content_right {
        padding-left: 0;
    }
    .guidance {
        font-size: 18px;  
    }
    .footer_content_right_small {
        padding-top: 50px;
    }
    .footer_input {
        height: 50px;
    }
    :deep(.el-input__wrapper input::placeholder) {
        font-size: 14px;
    }
 }
 @media screen and (max-width: 440px) {
    .footer_box {
        padding: 100px 20px 50px 20px;
    }
    .img_icon {
        width: 40px;
    }
    .pointer_txt {
        font-size: 12px;
    }
    .footer_input {
        height: 40px;
    }
    .form_padding {
        padding: 0;
    }
 }

.upload-trigger {
  border: 1px solid #dcdfe6;
  padding: 0 10px;
  width: 198px;
  border-radius: 3px;
  color: #a8abb2;
  font-size: 13px;
  cursor: pointer;
}

.el-upload__tip {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
}


:deep(.el-input__wrapper),
:deep(.el-textarea__inner) {
  font-family: 'PingFangSC';
  font-size: 14px !important;
  color: #333;
}


:deep(.el-input__wrapper input::placeholder),
:deep(.el-textarea__inner::placeholder) {
  font-family: 'PingFangSC';
  color: #909399 !important;
  font-size: 14px !important;
  font-weight: normal !important;
}

:deep(.el-select .el-input__wrapper) {
  font-family: 'PingFangSC';
  font-size: 14px !important;
}

@media screen and (max-width: 440px) {
  :deep(.el-input__wrapper),
  :deep(.el-textarea__inner) {
    font-size: 12px !important;
  }
  
  :deep(.el-input__wrapper input::placeholder),
  :deep(.el-textarea__inner::placeholder) {
    font-size: 12px !important;
  }
}

</style>

