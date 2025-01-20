<script setup>
import FromBox from '@/components/form.vue'
import { dingyue } from '@/api'
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import coverImageOne from '@/assets/x2/annotation_cover_one.png'
import coverImageTwo from '@/assets/x2/annotation_cover_two.png'

const iconList = [
    {
        title: '1. Customer Identification',
        desc: 'Customer Identification and background analysis'
    },
    {
        title: '3. Solution Customisation',
        desc: 'Tailored data solutions for custom data requirements'
    },
    {
        title: '5. Data Processing',
        desc: 'Accurate, efficient, and secure data processing'
    },
    {
        title: '7. Result Delivery',
        desc: 'Quality data service with minimal delays'
    }
]
const iconList2 = [
    {
        title: '2. Demand Interpretation',
        desc: 'Customer data request interpretation'
    },
    {
        title: '4. Task Distribution',
        desc: 'Targeted task distribution for optimal data output'
    },
    {
        title: '6. Quality Assessment',
        desc: 'Pre-delivery sample evaluation for data integrity and consistency'
    }
]


const handleFormSubmit = async (formData) => {
    console.log(formData,'formData')
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
    <div style="height: 47px;"></div>
    <div class="annotation_container">
        <h1 class="annotation_title">YOUR GATEWAY TO THE<br>
            WORLD OF WEB3 AI</h1>
        <div class="annotation_content" style="text-align: center;">
            Alaya Al's distributed data platform combines proven data labelling service models from Web2 providers with<br>
            organic Web3 incentives and community networks for superior user traction.<br>
            Our platform allows users to contribute data and earn rewards through a simple gamified user interface,<br>
            enabling anyone, anywhere, to contribute Al data and monetise their spare time.
        </div>
        <div class="annotation_list">
            <div class="annotation_list_title">Simple and intuitive task access</div>
            <div class="annotation_list_content">
                <div class="annotation_list_item" style="position: relative;">
                    <div class="annotation_list_item_txt">Tackle a diverse variety of
                        multiple-choice questions and
                        ean various token revards
                        through a simple gamified Ul.</div>
                    <img class="annotation_list_arrow" src="@/assets/annotation/arrow.png" alt="">
                    <img class="annotation_list_zhuzhi" src="@/assets/annotation/zhuzi.png" alt="">
                   
                </div>
                <video class="annotation_list_item_img" ref="videoPlayer" @play="onPlay" @pause="onPause" @ended="onEnded" controls>
                        <source src="/video/plat_video_one.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>
            </div>
            <div class="annotation_list_content_mobile">
                <video class="annotation_list_item_img_small" ref="videoPlayer" @play="onPlay" @pause="onPause" @ended="onEnded" controls :poster="coverImageOne">
                        <source src="/video/plat_video_one.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>
               <div style="display: flex; align-items: center; flex-direction: column;">
                <div class="annotation_list_item">
                    <div class="annotation_list_item_txt">Monetise your spare time by
                        accessing a wide range of Al
                        training tasks and challenges
                        anywhere, anytime.</div>
                    <img class="annotation_list_arrow" src="@/assets/annotation/arrow.png" alt="">
                    <img class="annotation_list_zhuzhi" src="@/assets/annotation/zhuzi.png" alt="">
                   
                </div>
               </div>
            </div>
        </div>
        <div class="annotation_list">
            <div class="annotation_list_title">Contribute data anywhere, anytime</div>
            <div class="annotation_list_content">
                <div class="annotation_list_item">
                    <div class="annotation_list_item_txt">Monetise your spare time by
                        accessing a wide range of Al
                        training tasks and challenges
                        anywhere, anytime.</div>
                    <img class="annotation_list_arrow" src="@/assets/annotation/arrow.png" alt="">
                    <img class="annotation_list_zhuzhi" src="@/assets/annotation/zhuzi.png" alt="">
                   
                </div>
                <video class="annotation_list_item_img" ref="videoPlayer" @play="onPlay" @pause="onPause" @ended="onEnded" controls :poster="coverImageTwo">
                        <source src="/video/plat_video_two.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>
            </div>
            <div class="annotation_list_content_mobile">
                <video class="annotation_list_item_img_small" ref="videoPlayer" @play="onPlay" @pause="onPause" @ended="onEnded" controls :poster="coverImageTwo">
                        <source src="/video/plat_video_two.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                </video>
                <div class="annotation_list_item">
                    <div class="annotation_list_item_txt">Monetise your spare time by
                        accessing a wide range of Al
                        training tasks and challenges
                        anywhere, anytime.</div>
                    <img class="annotation_list_arrow" src="@/assets/annotation/arrow.png" alt="">
                    <img class="annotation_list_zhuzhi" src="@/assets/annotation/zhuzi.png" alt="">
                   
                </div>
            </div>
        </div>
        <div class="annotation_icon">
            <div class="annotation_icon_list">
                <div class="annotation_icon_list_item" v-for="item in iconList" :key="item">
                    <div class="annotation_icon_title">{{ item.title }}</div>
                    <div class="annotation_icon_desc">{{ item.desc }}</div>
                </div>
            </div>
            <div style="width: 100%; display: flex; justify-content: center; ">
                <img class="annotation_icon_img" src="@/assets/annotation/anno-icon.png" alt="">
            </div>
            <div class="annotation_icon_list_two">
                <div class="annotation_icon_list_two_item" v-for="item in iconList2" :key="item">
                    <div class="annotation_icon_title">{{ item.title }}</div>
                    <div class="annotation_icon_desc">{{ item.desc }}</div>
                </div>
            </div>
        </div>
        <div class="annotation_icon_mobile_box">
        <div class="annotation_icon_mobile">
            <div class="annotation_icon_mobile_item" style=" ">
                <div class="annotation_icon_mobile_title" >1. Customer Identification</div>
                <div class="annotation_icon_mobile_desc" >Customer identification and<br>
                    background analysis</div>
            </div>
            <div class="annotation_icon_mobile_item">
                <div class="annotation_icon_mobile_title" >2. Demand Interpretation</div>
                <div class="annotation_icon_mobile_desc" style="font-size: 10px;">Customer data request<br>
                    interpretation</div>
            </div>
                <div class="annotation_icon_mobile_item">
                <div class="annotation_icon_mobile_title" >3. Solution Customisation</div>
                <div class="annotation_icon_mobile_desc" style="font-size: 10px;">Tailored data solutions for<br>
                    custom data requirements</div>
            </div>
            <div class="annotation_icon_mobile_item">
                <div class="annotation_icon_mobile_title" >4. Task Distribution</div>
                <div class="annotation_icon_mobile_desc" >Targeted task distribution for<br>
                    optimal data output</div>
            </div>
            <div class="annotation_icon_mobile_item">
                <div class="annotation_icon_mobile_title" >5. Data Processing</div>
                <div class="annotation_icon_mobile_desc" >Accurate, efficient, and secure<br>
                    data processing</div>
            </div>
            <div class="annotation_icon_mobile_item">
                <div class="annotation_icon_mobile_title" >6. Quality Assessment</div>
                <div class="annotation_icon_mobile_desc" >Pre-delivery sample evaluation<br>
                    for data integrity and consistency</div>
            </div>
            <div class="annotation_icon_mobile_item">
                <div class="annotation_icon_mobile_title" >7. Result Delivery</div>
                <div class="annotation_icon_mobile_desc" >Quality data service with<br>
                    minimal delays</div>
            </div>
        </div>
        </div>
    </div>
    <div class="annotation_form">
        <FromBox 
            submit-text="Submit" 
            @submit="handleFormSubmit"
        />
    </div>
</template>

<style scoped>
.annotation_container {
    padding: 0 200px;
    /* max-width: 1200px; */
    /* margin: 0 auto; */
    /* text-align: center; */
}
.annotation_content {
    font-size: 21px;
    padding-bottom: 50px;
}
.annotation_title {
    font-family: 'Arial Black';
    font-weight: 700;
    padding-top: 109px;
    text-align: center;
    line-height: 1.5;
    font-size: 72px;
    color: rgba(33, 220, 140, 1);
}
.annotation_list {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding: 30px;
}
.annotation_list_title {
    font-family: 'Arial';
    font-size: 36px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
}
.annotation_list_content {
    width: 100%;
    display: flex;
    /* justify-content: center; */
    padding-top: 30px;
    box-sizing: border-box;
    gap: 22px;
}
.annotation_list_content_mobile {
    display: none;
}
.annotation_list_arrow {
    margin-top: 60px;
    max-width: 80px;
}
.annotation_list_zhuzhi {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
}
.annotation_list_item {
    position: relative;
    width: 340px;
    height: 320px;
    background-color:  rgba(224, 224, 224, 0.05);
    border-radius: 8px 8px 0 8px;
    padding: 20px 0 0 20px;
    font-size: 20px;
    box-sizing: border-box;
}
.annotation_list_item_txt {
    padding-right: 20px;
}
.annotation_list_item_img {
    width: 620px;
    height: 320px;
}
.annotation_list_item_img_small {
    width: 100%;
    margin: 20px 0;
}
.annotation_icon {
    margin: 0 auto;
    padding: 100px 30px;
}
.annotation_icon_img {
    /* width: 100%; */
    min-width: 521px;
    max-width: 1043px;
}
.annotation_icon_list {
    display: flex;
    gap: 80px;
}
/* .annotation_icon_list_item {
    min-width: 300px;
} */
.annotation_icon_list_two {
    display: flex;
    gap: 80px;
    padding: 0 100px;
}
.annotation_icon_list_two_item {
    text-align: center;
    width: 380px; 
    height: 80px;
}
.annotation_icon_title {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #1ae28e;
}
.annotation_icon_desc {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    padding: 10px 0;
}
.annotation_icon_mobile_box {
    display: none;
    padding: 50px 0;
}
.annotation_icon_mobile {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 100%;
    height: 648px;
    background-image: url('@/assets/x2/annotation.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.annotation_icon_mobile_item {
    padding: 26px 0;
    /* height: 100px; */
}

.annotation_icon_mobile_item:nth-child(odd) {
  align-self: flex-end;
}


.annotation_icon_mobile_item:nth-child(even) {
  align-self: flex-start;
}
.annotation_icon_mobile_two {
    padding-left: 20px; 
    height: 100px;
}
.annotation_icon_mobile_title {
    color: #1ae28e;
    font-size: 10px;
}

.annotation_icon_mobile_desc {
    font-size: 10px;
}



@media screen and (max-width: 1440px) {
    .annotation_container {
        padding: 0 100px;
    }
}
@media screen and (max-width: 1200px) {
    .annotation_list_item_txt {
        font-size: 12px;
    }
    .annotation_title {
        font-size: 34px;
    }
    .annotation_icon_desc {
        font-size: 12px;
    }
    .annotation_icon_list {
        gap: 20px;
    }
    .annotation_icon_list_two {
        gap: 10px;
        padding: 0;
    }
    .annotation_list_title {
        font-size: 18px;
    }
    .annotation_list_arrow {
        margin-top: 0;
    }
    .annotation_list_item_img {
        width: 310px;
        height: 160px;
    }
    .annotation_list_item {
        width: 240px;
        height: 160px;
    }
}
@media screen and (max-width: 768px) {
    .annotation_container {
        padding: 0 30px;
    }
    
    .annotation_title {
        font-size: 32px;
    }
    .annotation_content {
        font-size: 18px;
    }
    .annotation_list {
        padding: 20px 0;
        .annotation_list_title {
            padding-top: 10px;
            font-size: 16px;
        }
        .annotation_list_item_txt {
            font-size: 12px;
        }
    }
    .annotation_icon_list {
        gap: 5px;
    }
    .annotation_icon_title {
        font-size: 9px;
    }
    .annotation_icon_desc {
        font-size: 10px;
    }
    .annotation_icon_list_two {
        padding: 0 20px;
        gap: 10px;
    }
    .annotation_list_content {
       display: none;
    }
    .annotation_list_content_mobile {
        display: block;
    }
    .annotation_icon {
        display: none;
    }
    .annotation_icon_mobile_box {
        display: block;
    }
    .annotation_list_item {
       width: 100%;
    }
    .annotation_list_zhuzhi {
       width: 80px;
    }
}
@media screen and (max-width: 440px) {
    .annotation_title {
        font-size:24px;
    }
    .annotation_content {
        font-size: 11px;
    }
    .annotation_list {
        padding: 0;
        
    }
    .annotation_list_content {
       display: none;
    }
    .annotation_list_content_mobile {
        display: block;
    }
    .annotation_icon {
        display: none;
    }
    .annotation_icon_mobile_box {
        display: block;
    }
}

.annotation_form {
    width: 100%;
    /* padding: 50px 0; */
     padding-top: 50px;
}

@media screen and (max-width: 440px) {
    .annotation_form {
        padding-top: 30px;
    }
}
</style>
