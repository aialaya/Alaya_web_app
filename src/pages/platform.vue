<script setup>
import FormBox from '@/components/form.vue'
import oneImg from '@/assets/x2/platform_one.png'
import twoImg from '@/assets/x2/platform_two.png'
import threeImg from '@/assets/x2/platform_three.png'

import normalArrow from '@/assets/x2/platform_arrow.png'
import hoverArrow from '@/assets/x2/platform_arrow_hover.png'

import { ref, onMounted, onUnmounted } from 'vue'
import { dingyue } from '@/api'
import { ElMessage } from 'element-plus'

const arrImg = [{img: oneImg, title: 'Dataset bootstrapping for Web3 Al developers', txt: 'Alaya Al\'s Open Data Platform enables customisable dataset bootstrapping for early-stage small-medium Al developers with limited cash funding, either directly on-chain or off-chain.'}, 
                {img: twoImg, title: 'Custom token support', txt: 'The Open Data Platform is designed toree market dynamics of open data economies to allow Al developers to make custom data requests by setting up custom reward pools for users to select from, similar to a decentralised exchange or an NFT market.'}, 
                {img: threeImg, title: 'Web3 + Al token innovation', txt: 'Custom token rewards improve organic token distribution for Web3 Al projects by aligning user incentives with project ecosystems, enabling simultaneous user acquisition and data collection to incentivise Web3 Al token utility innovation. '}]

const arrowHovered = ref(false)

const toggleWaitlist = (hover) => {
    arrowHovered.value = hover
}

const scrollToForm = () => {
    const formElement = document.querySelector('.form_container')
    if (formElement) {
        formElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        })
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


const handleFormSubmit = async (formData) => {
  console.log(formData, 'formData')
  try {
    const response = await dingyue(formData)
    if (response.data.code === 200) {
      ElMessage.success('Submit successfully')
    } else {
      ElMessage.error(response.data.message || 'Submit failed')
    }
  } catch (error) {
    console.error('Submit error:', error)
    ElMessage.error('Submit failed, please try again')
  }
}

</script>

<template>
    <div class="platform_top"></div>
   <div class="platform_container" style="display: flex; flex-direction: column; justify-content: center;">
        <div class="platform_one"  style="display: flex; flex-direction: column; align-items: center;">
            <div class="platform_title">OPEN DATA PLATFORM</div>
            <div class="platform_txt">
                Your One-Stop Web3<br>
                Custom Data Solution
            </div>
            <div class="platform_one_btn" 
                 @mouseenter="toggleWaitlist(true)" 
                 @mouseleave="toggleWaitlist(false)"
                 @click="scrollToForm">
                <div class="btn_content">
                    Join Waitlist 
                    <img class="platform_arrow" 
                         :src="arrowHovered ? hoverArrow : normalArrow" 
                         :class="{ 'arrow-hover': arrowHovered }"
                         alt="">
                </div>
            </div>
        </div>
        <div class="platform_two">
            <img style="width: 100%;" src="@/assets/x2/platform_bot.png" alt="">
        </div>
        <div class="platform_three">
            <div class="platform_three_container" v-for="(item, index) in arrImg" :key="index">
                <img class="paltform_icon" src="@/assets/x1/paltform_icon.png" alt="">

                <div>
                    <div class="platform_three_title">{{item.title}}</div>
                    <div style="display: flex; justify-content: space-between;">
                        <img class="platform_three_img" :src="item.img" alt="">
                        <div class="platform_three_txt">{{ item.txt }}</div>
                    </div>
                </div>
               
            </div>
        </div>
        <div class="platform_form">
            <FormBox 
                submit-text="Join Waitlist" 
                @submit="handleFormSubmit"
            />
        </div>
   </div>
</template>

<style scoped>
.platform_top {
  padding-top: 88px;
}

.platform_title {
  font-family: 'Arial';
  font-weight: bold;
  padding-top: calc(150px * v-bind(scale));
  font-size: calc(80px * v-bind(scale));
  color: #1ae28e;
}

.platform_txt {
  font-family: 'Arial';
  font-weight: bold;
  font-size: calc(40px * v-bind(scale));
  line-height: 1.5;
  color: #fff;
  padding-top: calc(20px * v-bind(scale));
  padding-bottom: calc(150px * v-bind(scale));
}

.platform_one {
    background-image: url('@/assets/x1/platform_one.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.platform_one_btn {
    font-size: calc(36px * v-bind(scale));
    border: 1px solid #1ae28e;
    border-radius: 50px;
    color: #1ae28e;
    margin-bottom: calc(100px * v-bind(scale));
    padding: calc(10px * v-bind(scale)) calc(20px * v-bind(scale));
    cursor: pointer;
    transition: all 0.3s ease;
}
.platform_one_btn:hover {
    background-color: rgba(26, 226, 142, 0.1);
}
.btn_content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.platform_arrow {
    width: calc(34px * v-bind(scale));
    height: calc(34px * v-bind(scale));
    transition: transform 0.3s ease;
}
.platform_two {
    padding: 0 10%;
}
.platform_three {
    padding: 0 10%;
    .platform_three_container {
        display: flex;
        padding: calc(40px * v-bind(scale));
        background-color: #151334;
        border-radius: calc(20px * v-bind(scale));
        margin-top: calc(80px * v-bind(scale));
    }
    .paltform_icon {
        width: calc(40px * v-bind(scale));
        height: calc(40px * v-bind(scale));
        margin-right: calc(30px * v-bind(scale));
    }
    .platform_three_title {
        font-size: calc(36px * v-bind(scale));
        color: #1ae28e;
        padding-bottom: calc(20px * v-bind(scale));
    }
    .platform_three_img {
        width: calc(252px * v-bind(scale));
        height: calc(300px * v-bind(scale));
        margin-right: calc(60px * v-bind(scale));
    }
    .platform_three_txt {
        font-size: calc(26px * v-bind(scale));
    }
}


@media screen and (max-width: 1440px) {
  
}

@media screen and (max-width: 1200px) {
  /* :root {
    --title-size: 60px;
    --subtitle-size: 30px;
    --content-size: 18px;
  } */
}

@media screen and (max-width: 719px) {
  /* :root {
    --title-size: 40px;
    --subtitle-size: 24px;
    --content-size: 16px;
  } */
  
  .platform_three {
    padding: 0 5%;
  }
}

@media screen and (max-width: 480px) {
  /* :root {
    --title-size: 32px;
    --subtitle-size: 20px;
    --content-size: 14px;
  } */
}

.platform_form {
  width: 100%;
  /* padding: 50px 0; */
  padding-top: 50px;
}

@media screen and (max-width: 440px) {
  .platform_form {
    padding-top: 30px;
  }
}
</style>