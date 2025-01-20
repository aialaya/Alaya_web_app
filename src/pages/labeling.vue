<script setup>
import { ref, onMounted, onUnmounted } from 'vue'




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
    <div class="box_top">  </div>
    <div class="labeling_box">
        <div class="labeling_one">
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div class="labeling_one_title">HUMAN + AI</div>
                <div class="labeling_one_title_mobile_box" style="position: relative;">
                    <div class="labeling_one_title_mobile">HUMAN + AI</div>
                    <img class="labeling_one_bot_mobile" src="@/assets/x2/labeling_bot.png" alt="">
                </div>
                <div class="labeling_one_txt_mobile">
                    Data auto-labelling is the next stage of
                    self-supervised Al evolution-Unlock the
                    true potential of Al and turbocharge
                    your data efficiency with our proprietary
                    Al auto-labelling technologies.
                </div>
                <div class="labeling_one_txt">Data auto-labelling is the next stage of
                    self-supervised Al evolution-Unlock the
                    true potential of Al and turbocharge
                    your data efficiency with our proprietary
                    Al auto-labelling technologies.
                </div>
                
            </div>
            <div  class="labeling_bot_box">
            <img class="labeling_bot" src="@/assets/x2/labeling_bot.png" alt="">
            </div>
        </div>
        
        <div class="labeling_two">
            <div class="labeling_two_container">
                <div class="labeling_two_title">How is auto-labelling achieved?</div>
                <img class="labeling_two_img" src="@/assets/x2/labeling_two.png" alt="">
                <div class="labeling_two_card">
                   <span> Alaya Al's auto-labelling toolset automatically
                    processes data through a three-step process by
                    applying custom machine learning models to
                    human labelled datasets. Al labelled data is
                    validated by expert human auditors and applied
                    for model fine-tuning through HITL to deliver
                    superior auto-labelling results.</span>
                    <div class="blue_line"></div>
                </div>
                <img class="labeling_two_icon" src="@/assets/x2/labeling_icon.png" alt="">
            </div>
        </div>
        <div class="labeling_three">
            <div class="labeling_three_container">
                <div class="labeling_three_title">Case example: Automatic facial recognition</div>
                <img class="labeling_three_img" src="@/assets/x2/labeling_three.png" alt="">
                <div class="labeling_three_title">Dynamic visual data segmentation and discrete object tracking</div>
                <img class="labeling_three_img" src="@/assets/x2/labeling_three_two.png" alt="">
                <div class="labeling_three_txt">
                    <span>Our model is capable of identifying and continuously tracking
                            segmented regions of interest (ROls) based on initial object annotation
                            results provided by human labellers. Automatic ROI tracking and
                            association can be maintained by leveraging Al algorithms with minimal
                            human intervention for vastly superior annotation efficiency.
                    </span>
                </div>
                <div class="blue_line" style="background-color: #1ae28e;"></div>
                <div class="labeling_three_title">Stay tuned for additional model support</div>
                <div class="labeling_last_txt">
                    <span>Additional auto-labelling models and features, such as </span>
                    <span style="color: #1ae28e;"> automatic document classification and social media NLP classification for real-time</span>
                    <span> sentiment analysis are under development...</span>
                </div>
                <img class="labeling_last_img" src="@/assets/x2/labrling_last.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>  

.labeling_one {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/x2/labeling_one.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: calc(50px * v-bind(scale)) 0 calc(200px * v-bind(scale)) 0;
}
.labeling_bot_box {
    position: relative;
    width: calc(200px * v-bind(scale));
    height: calc(500px * v-bind(scale));
}
.labeling_bot {
    position: absolute;
    top: 10px;
    left: calc(-100px * v-bind(scale));
    width: calc(500px * v-bind(scale));
    object-fit: contain;
}
.labeling_one_title {
    font-family: 'Arial Black';
    font-weight: bold;
    font-size: calc(90px * v-bind(scale));
    color: #1ae28e;
}
.labeling_one_txt {
    width: calc(600px * v-bind(scale));
    font-size: calc(28px * v-bind(scale));
    color: #fff;
    background-color: rgba(255,255,255,.1);
    border-radius: 18px;
    padding: calc(20px * v-bind(scale)) calc(100px * v-bind(scale)) calc(20px * v-bind(scale)) calc(20px * v-bind(scale));
}
.labeling_two {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fbfbfb;
    color: #0a091c;
    padding-bottom: calc(100px * v-bind(scale));
    background-image: url('@/assets/x2/labeling_btm.png');
    background-size: calc(400px * v-bind(scale));
    background-position: bottom right;
    background-repeat: no-repeat;
}
.labeling_two_container {
    position: relative;
    width: 80%; 
    padding: calc(40px * v-bind(scale)) 0;
}
.labeling_two_title {
    font-family: 'Arial';
    font-size: calc(40px * v-bind(scale));
    font-weight: bold;
    padding: calc(40px * v-bind(scale)) 0;
}
.labeling_two_img {
    width: 100%;
    object-fit: contain;
}
.labeling_two_card {
    position: absolute;
    bottom: calc(-50px * v-bind(scale));
    left: 0;
    width: calc(500px * v-bind(scale));
    padding: calc(9px * v-bind(scale)) calc(7px * v-bind(scale)) calc(13px * v-bind(scale)) calc(11.5px * v-bind(scale));
    border-radius: 4px;
    box-shadow: 5px 5px 17px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    font-size: calc(18px * v-bind(scale));
}
.blue_line {
    width: calc(50px * v-bind(scale));
    height: calc(5px * v-bind(scale));
    background-color: #5150e7;
    border-radius: 50px;
    margin: calc(15px * v-bind(scale)) 0;
}
.labeling_two_icon {
    position: absolute;
    bottom: calc(-20px * v-bind(scale));
    left: calc(500px * v-bind(scale));
    width: calc(100px * v-bind(scale));
    object-fit: contain;
}
.labeling_three {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.labeling_three_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
}
.labeling_three_title {
    font-family: 'Arial';
    padding: calc(100px * v-bind(scale)) 0;
    font-size: calc(63px * v-bind(scale));
    font-weight: bold;
    color: #1ae28e;
}
.labeling_three_img {
    width: 90%;
}
.labeling_three_txt {
    width: 85%;
    font-size: calc(24px * v-bind(scale));
    border-radius: 18px;
    box-sizing: border-box;
    padding: calc(20px * v-bind(scale)) calc(20px * v-bind(scale)) calc(100px * v-bind(scale)) calc(20px * v-bind(scale));
}
.labeling_last_txt {
    font-size: calc(44px * v-bind(scale));
}
.labeling_last_img {
    width: 50%;
    object-fit: contain;
    margin: 100px 0;
}
.labeling_one_title_mobile_box {
    display: none;
    position: relative;
}

.labeling_one_title_mobile {
    font-size: 40px; 
    font-family: Arial; 
    font-weight: bold; 
    color: #1ae28e;
}
.labeling_one_bot_mobile {
    position: absolute; 
    top: 0; 
    left: -50px; 
    width: 170px;
}
.labeling_one_txt_mobile {
    display: none;
    margin-left: 150px; 
    margin-top: 20px; 
    width: 170px;
    background-color: rgba(255, 255, 255, .2); 
    border-radius: 5px; 
    padding: 10px; 
    font-size: 10px; 
    font-family: Arial;
}

@media screen and (max-width: 1440px) {
  
}

@media screen and (max-width: 1200px) {
    .labeling_bot_box {
        width: calc(150px * v-bind(scale));
    }
    
  
}

@media screen and (max-width: 719px) {
  
}

@media screen and (max-width: 480px) {
  .labeling_last_img {
    width: 90%;
    margin: 50px 0;
  }

  .labeling_bot_box,
  .labeling_one_txt,
  .labeling_one_title {
    display: none;
  }

  .labeling_one_title_mobile_box {
    display: block;
  }
  .labeling_one_txt_mobile {
    display: block;
  }
}

</style>