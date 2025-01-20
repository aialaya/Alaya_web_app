<script setup>
import imageLable from '@/assets/x2/image-lable.png';
import audioLable from '@/assets/x2/audio-lable.png';
import videoLable from '@/assets/x2/video-lable.png';
import textLable from '@/assets/x2/text-lable.png';
import autoLable from '@/assets/x2/auto-lable.png';
import defaultGoogel from '@/assets/x2/googel_normal.png'
import hoverGoogel from '@/assets/x2/googel_hover.png'

import arbitrum_logo from '@/assets/logo_lunbo/arbitrum_logo.png'
import binance_logo from '@/assets/logo_lunbo/binance_logo.png'
import bitget_logo from '@/assets/logo_lunbo/bitget_logo.png'
import bitmain_logo from '@/assets/logo_lunbo/bitmain_logo.png'
import btok_logo from '@/assets/logo_lunbo/btok_logo.png'
import cgvfof_logo from '@/assets/logo_lunbo/cgvfof_logo.png'
import chaincatcher_logo from '@/assets/logo_lunbo/chaincatcher_logo.png'
import cinbureau_logo from '@/assets/logo_lunbo/cinbureau_logo.png'
import dwf_labs_logo from '@/assets/logo_lunbo/dwf_labs_logo.png'
import kucoin_logo from '@/assets/logo_lunbo/kucoin_logo.png'
import okx_logo from '@/assets/logo_lunbo/okx-logo.png'

import coverImage from '@/assets/x2/home_cover.png'
import { ref, onMounted, onUnmounted } from 'vue';


const threeImg = [{ img: imageLable, txt: 'Image', desc: 'Labelling' },
{ img: audioLable, txt: 'Audio', desc: 'Identification' },
{ img: autoLable, txt: 'Auto driving', desc: 'Annotation' },
{ img: textLable, txt: 'Text', desc: 'Analysis' },
{ img: videoLable, txt: 'Video', desc: 'Annotation' }];


const currentImage = ref(defaultGoogel)
const changeImage = (isHover) => {
    currentImage.value = isHover ? hoverGoogel : defaultGoogel;
}

const goToGoogle = () => {
    window.open('https://play.google.com/store/apps/details?id=com.alaya.quiz.challenge', '_blank');
}
const goAialaya = () => {
    window.open('https://www.aialaya.io/web/alaya/game.html', '_blank');
}


const logos = ref([
    arbitrum_logo,
    binance_logo,
    bitget_logo,
    bitmain_logo,
    btok_logo,
    cgvfof_logo,
    chaincatcher_logo,
    cinbureau_logo,
    dwf_labs_logo,
    kucoin_logo,
    okx_logo
])


const containerWidth = ref(0)
const logoContainer = ref(null)

const position = ref(0)
const animationRef = ref(null)

const animate = () => {
    if (logoContainer.value) {
        position.value -= 1
        if (Math.abs(position.value) >= containerWidth.value / 2) {
            position.value = 0
        }
        logoContainer.value.style.transform = `translateX(${position.value}px)`
        animationRef.value = requestAnimationFrame(animate)
    }
}

const goOne = () => {
    window.open('https://alaya-ai.gitbook.io/alaya-ai/core-features/distributed-data-ecosystem', '_blank');
}
const goTwo = () => {
    window.open('https://alaya-ai.gitbook.io/alaya-ai/core-features/open-data-platform', '_blank');
}
const goThree = () => {
    window.open('https://alaya-ai.gitbook.io/alaya-ai/core-features/data-auto-labelling-toolset', '_blank');
}

onMounted(() => {
    if (logoContainer.value) {
        animate()
    }
})

onUnmounted(() => {
    if (animationRef.value) {
        cancelAnimationFrame(animationRef.value)
    }
})

</script>

<template>
    <div class="home">
        <div class="home_one">
            <div class="home_one_title">
                <span class="home_one_title_span">Open, Composable Web3 Al Data Infrastructure</span> <br><span
                    class="home_one_title_span">Empowering the Web3 AI Revolution</span>
            </div>
            <div class="home_one_title_small">
                <span class="home_one_title_span">Open, Composable Web3 Al Data Infrastructure Empowering the Web3 AI
                    Revolution</span>
            </div>
            <div class="home_one_txt">
                Distributed Al Data Ecosystems <span class="txt_green">/</span> Web3 Custom Data Pools <span
                    class="txt_green">/</span> Tokenised Al Models <span class="txt_green">/</span> Data Auto-labelling
                Toolsets
            </div>
            <div class="home_one_txt_small">
                <span class="txt_green">/</span>Distributed Al Data Ecosystems <br>
                <span class="txt_green">/</span> Web3 Custom Data Pools <br>
                <span class="txt_green">/</span> Tokenised Al Models <br>
                <span class="txt_green">/</span> Data Auto-labelling Toolsets
            </div>
            <div class="home_one_btn">
                <div class="home_btn" @click="goAialaya">START</div>
                <img class="home_btn" :src="currentImage" @mouseover="changeImage(true)" @mouseout="changeImage(false)"
                    @click="goToGoogle">
            </div>
            <div class="home_num_box">
                <div style="display: flex; align-items: center;">
                    <img class="home_num_box_icon" src="@/assets/x3/registered.png" alt="">
                    <div style="text-align: left;">
                        <div class="home_num_box_title">2,760,000 +</div>
                        <div class="home_num_box_txt">Registered Users</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center;">
                    <img class="home_num_box_icon" src="@/assets/x3/user.png" alt="">
                    <div style="text-align: left;">
                        <div class="home_num_box_title">218,000 +</div>
                        <div class="home_num_box_txt">Daily active users</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center;">
                    <img class="home_num_box_icon" src="@/assets/x3/chain.png" alt="">
                    <div style="text-align: left;">
                        <div class="home_num_box_title">193,000 +</div>
                        <div class="home_num_box_txt">Daily on-chain transactions</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home_two">
            <div class="two_logo">
                <div class="logo_track">
                    <div class="logo_wrapper">
                        <div class="logo_container" ref="logoContainer">
                            <img v-for="(logo, index) in logos" :key="`first-${index}`" :src="logo" class="logo-item"
                                alt="partner logo">
                            <img v-for="(logo, index) in logos" :key="`second-${index}`" :src="logo" class="logo-item"
                                alt="partner logo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="home_two_contain">
                <div class="two_txt">
                    <span class="txt_green">Alaya Al </span> is an open, composable Web3 data sampling and
                    auto-labelling Al infrastructure.
                </div>
                <div class="two_video">
                    <video class="two_video_img" ref="videoPlayer" @play="onPlay" @pause="onPause"
                     @ended="onEnded" controls
                     :poster="coverImage"
                     >
                        <source src="https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/site/Alaya-AI-V.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="two_txt_two">
                    Inspired by swarm intelligence systems, <span class="txt_green">Alaya Al</span> provides tailored
                    data sampling for enterprise applications and small-medium developers through
                    customisable Web3 incentives and RLHF/HITL precision sampling.
                </div>
            </div>
        </div>
        <div class="home_four">
            <div class="four_item_box distributed_img">
                <div class="four_item_box_content">
                    <div class="four_title">Distributed Al Data Ecosystem</div>
                    <div class="four_txt" style="">Distributed data ecosystems combine the best of Web2 and Web3 into a
                        universal platform that allows anyone to monetise idle time by contributing AI data. </div>
                    <div class="four_more pointer_txt" @click="goOne">More →</div>
                    <div class="four_img_one" style="">
                        <img class="four_img_one_img" src="@/assets/four-aia.png" alt="">
                    </div>
                </div>
            </div>
            <div class="four_item_box four_two_img">
                <div class="four_item_box_content">
                    <div class="four_title">Open Data Platform</div>
                    <div class="four_txt" style="">An open data marketplace to support organic Web3 dataset
                        bootstrapping through custom reward pools, directly on-chain or off-chain.</div>
                    <div class="four_more pointer_txt" @click="goTwo">More →</div>
                    <div class="four_img_two">
                        <img class="four_img_two_img" src="@/assets/four-two-aia.png" alt="">
                    </div>
                </div>
            </div>
            <div class="four_item_box four_three_img">
                <div class="four_item_box_content">
                    <div class="four_title">Al-assisted auto-labelling toolset</div>
                    <div class="four_txt" style="">Unlock the true potential of AI and turbocharge your data efficiency
                        with our proprietary AI auto-labelling technologies.
                    </div>
                    <div class="four_more pointer_txt" @click="goThree">More →</div>
                    <div class="four_img_three">
                        <img class="four_img_three_img" src="@/assets/x2/four-three-aia.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="home_three">
            <div class="three_content">
                <div class="three_title">Multimodal Datasets</div>

                <div class="three_content_title">
                    Alaya Al is the first Web3-native Al data platform to support a wide range of Al<br>
                    data to satisfy diverse model training requirements for a global customer base.
                </div>
                <div class="three_content_img_box">
                    <div class="three_content_img" v-for="item in threeImg">
                        <img class="three_content_img_img" :src="item.img" alt="">
                        <span class="three_content_img_txt">{{ item.txt }} {{ item.desc }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="home_five">
            <div class="home_five_content">
                <div class="home_five_title">Why choose <span class="five_color_green">ALAYA AI</span> </div>
                <div class="five_img_box">
                    <img class="five_img" src="@/assets/five-one.png" alt="">
                    <img class="five_img" src="@/assets/five-two.png" alt="">
                    <img class="five_img" src="@/assets/five-four.png" alt="">
                    <img class="five_img" src="@/assets/five-three.png" alt="">
                </div>
                <div class="five_img_box_small">
                    <img class="five_img" src="@/assets/five-one.png" alt="">
                    <img class="five_img" src="@/assets/five-two.png" alt="">
                    <img class="five_img" src="@/assets/five-three.png" alt="">
                    <img class="five_img" src="@/assets/five-four.png" alt="">
                </div>
            </div>
        </div>
       
        <div class="home_seven">
            <img class="home_seven_img" src="@/assets/seven-img.jpg" alt="">
            <img class="home_seven_img_small" src="@/assets/x2/plan.png" alt="">
        </div>
        <div class="home_eight">
            <div class="home_eight_bgi">
                <div class="home_eight_content" style="">
                    <img class="eight_small_bgi_one" style="" src="@/assets/small/eight-bot-bgi.svg" alt="">
                    <img class="eight_small_bgi_two" style="" src="@/assets/small/eight-bot.svg" alt="">
                    <div class="home_eight_title" style="text-align: left;">
                        <div class="home_eight_title_top">
                            <span class="home_eight_title_top_txt">To Become a </span>
                            <span class="color_green">Knowledge Provider</span>
                        </div>
                        <div class="eight_txt">• Do you have an email address?</div>
                        <div class="eight_txt">• Do you have a wallet?</div>
                        <div class="eight_txt">• Do you have social media?</div>
                        <div class="eight_btn pointer_txt" @click="goAialaya">
                            <span class="eight_btn_txt">Claim your Alaya NFT now →</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.home {
    width: 100%;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 88px;
    transition: padding-top 0.3s ease;
}

.home.expanded {
    padding-top: 188px;
}

.home_one {
    padding-top: 100px;
    /* height: 634px; */
    /* background: linear-gradient(to bottom right, #0a091c, #17153b); */
    background-image: url('@/assets/home-one-bgi.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.home_one_title {
    font-family: 'Arial';
    /* font-family: 'Lexend'; */
    text-align: center;
    font-size: 56px;
    line-height: 1.5;
    font-weight: 700;

}

.home_one_title_small {
    display: none;
    font-size: 32px;
    line-height: 1.5;
    font-weight: 700;
}

.home_one_title_span {
    background: var(--banner, linear-gradient(179deg, #F1F1F2 .72%, #9B9B9B 85.23%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.home_one_txt {
    font-size: 20px;
    padding-top: 68px;
}

.home_one_txt_small {
    font-size: 20px;
    padding-top: 68px;
    display: none;
}

.txt_green {
    color: #1ae28e;
}

.home_one_btn {
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 100px 0 120px 0;
}

.home_btn {
    font-family: 'Arial';
    width: 180px;
    height: 56px;
    background-color: #1ae28e;
    /* background: linear-gradient(to bottom right, #00ff99, #00ff99); */
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #191933;
    margin-left: 26px;
    cursor: pointer;
    transition: background-color .15s ease;
}

.home_btn:hover {
    /* transform: scale(1.05); */
    background-color: #14E990;
    /* background: linear-gradient(to bottom right, #00ff99, #00ff99); */
    /* background-color: #43DD9B; */
}

.home_btn_google {
    margin-left: 20px;
    width: 180px;
    height: 56px;
}

.home_num_box {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 40px;
}

.home_num_box_icon {
    width: 40px;
    margin-right: 20px;
}

.home_num_box_title {
    font-family: 'Arial';
    font-weight: 700;
    font-size: 36px;
    color: #1ae28e;
}

.home_num_box_txt {
    font-size: 18px;
    padding-top: 5px;

}

.home_two {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #0a091c;
    box-sizing: border-box;
    background-color: #fff;
    /* height: 634px; */
}



.home_two_contain {
    width: 80%;
}

.two_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f9f9f9;
    height: 130px;
    overflow: hidden;
}

.logo_track {
    width: 100%;
    overflow: hidden;
}

.logo_wrapper {
    width: 100%;
    overflow: hidden;
}

.logo_container {
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 0 30px;
    animation: marquee 30s linear infinite;
    width: max-content;
}

.logo-item {
    height: 30px;
    object-fit: contain;
    flex-shrink: 0;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.logo_container:hover {
    animation-play-state: paused;
}

@media screen and (max-width: 768px) {
    .logo-item {
        height: 30px;
    }

    .logo_container {
        gap: 30px;
    }
}

.home_two_contain {
    padding: 0 200px;
}

.two_video {
    width: 100%;
}

.two_txt {
    text-align: left;
    padding: 150px 0 50px 0;
    font-family: 'Arial';
    font-size: 40px;
    font-weight: 700;
}

.two_txt_two {
    text-align: left;
    padding-top: 50px;
    font-size: 28px;
    color: #0a091c;
    padding-bottom: 200px;
}

.two_video_img {
    width: 100%;
}

.home_three {
    position: relative;
    background-color: rgba(15, 15, 29, 1);
    background-image: url('@/assets/home-three.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.home_three_border_left {
    position: absolute;
    width: 230px;
    top: -350px;
    right: 0;
}

.three_title {
    font-family: 'Arial';
    font-weight: 700;
    padding-top: 100px;
    background: var(--logo, linear-gradient(to bottom, #38f3c1, #1ae28e));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-size: 80px;

}

.three_content {
    /* width: 1080px; */
    padding-bottom: 200px;
}

.three_content_title {
    padding-top: 50px;
    font-size: 22px;
}

.three_content_img_box {
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    gap: 50px;
    padding-top: 150px;
    margin: 0 auto;
    box-sizing: border-box;
}

.three_content_img_txt {
    font-size: 20px;
    line-height: 1.5;
    padding-top: 10px;
    color: #f1f1f1;
}

.three_content_img_img {
    height: 150px;
    margin-bottom: 30px;
}

.three_content_img {
    /* width: 200px;  */
    /* background-color: palegoldenrod; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home_four {
    background-color: #fff;
    position: relative;
    color: #515151;
}

.four_border_left {
    width: 120px;
    position: absolute;
    top: -250px;
    left: 0;
}

.four_txt {
    font-size: 25px;
    padding-top: 20px;
}

.four_more {
    width: 80px;
    background-color: #00ff99;
    color: #191933;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 80px;
    /* transition: background-color 0.15s ease-in-out; */
}

.four_more:hover {
    /* transform: scale(1.05); */
    background: #38f3c1
}

.four_img_one {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
}

.four_img_one_img {
    width: 800px;
}

.four_img_two {
    display: flex;
    justify-content: end;
}

.four_img_two_img {
    height: 550px;
    padding-right: 150px;
    padding-bottom: 150px;
}

.four_img_three {
    display: flex;
    justify-content: end;
}

.four_img_three_img {
    width: 650px;
    padding-right: 150px;
    padding-bottom: 50px;
}

.distributed_img {
    background-image: url('@/assets/four-img-one.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.four_item_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    box-sizing: border-box;
    color: #0a091c;
}

.four_item_box_content {
    width: 80%;
    padding-bottom: 100px;
}

.four_title {
    font-family: 'Arial';
    color: #0a091c;
    font-size: 50px;
    padding-top: 20px;
}

.four_two_img {
    background-image: url('@/assets/four-two.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.four_three_img {
    background-image: url('@/assets/four-three.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.home_five {
    padding-bottom: 100px;
}

.five_img_box {
    max-width: 1280px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    margin: 0 auto;
}

.five_img_box_small {
    max-width: 1280px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    margin: 0 auto;
    display: none;
}

.home_five_title {
    font-family: 'Arial';
    font-weight: 700;
    font-size: 60px;
    padding-bottom: 100px;
    /* padding: 100px 0; */
}

.five_color_green {
    color: #1ae28e;
}

.five_img {
    width: 240px;
}
.home_six_content {
    width: 980px;
    margin: 0 auto;
}
.grey_txt {
    font-size: 60px;
    background: linear-gradient(179deg, #F1F1F2 .72%, #9B9B9B 85.23%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}



.home_six_txt {
    padding: 50px 0;
    /* font-family: 'Lexend'; */
    line-height: 1.5;
    font-size: 20px;
    color: #fff;
}

.six_content_one {
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
}

.gezi_box {
    margin-top: 20px;
    height: 220px;
    width: 220px;
    border: 2px solid #43ffb0;
    border-radius: 18px;
}

.gezi_txt {
    font-size: 25px;
    padding-bottom: 20px;
}

.arrow_txt {
    font-size: 12px;
    color: #bebebe;
}

.six_jiantou_img {
    width: 250px;
}

.six_bottom {
    padding: 100px 0;
}

.six_bottom_content {
    display: flex;
    gap: 50px;
    justify-content: center;
    padding: 30px;
    align-items: center;
}

.six_bottom_item {
    transition: all .15s linear;
    cursor: pointer;
    background: linear-gradient(to bottom, #7eaaff, #41e2a6);
    padding: 3px;
    border-radius: 18px;
    box-sizing: border-box;
}

.six_bottom_item_one {
    transition: all .15s linear;
    cursor: pointer;
    background: linear-gradient(to bottom, #7eaaff, #41e2a6);
    padding: 3px;
    border-radius: 18px;
}

.six_bottom_item_img {
    width: 100px;
}

.six_bottom_item_content {
    background-color: #1A1B23;
    padding: 70px 90px;
    border-radius: 18px;
}

.six_bottom_item_content_one {
    background-color: #1A1B23;
    padding: 50px;
    border-radius: 18px;
}

.six_bottom_center_title {
    font-size: 30px;
    /* font-family: 'Lexend';  */
    padding: 20px 0;
}

.six_bottom_desc {
    font-size: 18px;
    padding: 20px 0;
}

.home_seven {
    padding: 100px 200px;
}

.home_seven_img {
    width: 100%;
}

.home_seven_img_small {
    width: 100%;
    display: none;
}

.color_green {
    font-family: 'Lexend';
    font-size: 45px;
    background: var(--logo, linear-gradient(223deg, #67DC57 8.77%, #4DC972 46.71%, #43DD9B 74.79%, #41E2A6 91.22%));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}

.home_eight {
    background-color: #fff;
    color: #000;

    .home_eight_bgi {
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
    }

    .home_eight_content {
        width: 100%;
        display: flex;
        position: relative;
        margin: 0 auto;
        padding: 0 30px;
        box-sizing: border-box;
    }

    .eight_small_bgi_one {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 520px;
    }

    .eight_small_bgi_two {
        position: absolute;
        bottom: 0;
        right: 100px;
        width: 400px;
    }

    .home_eight_content {
        width: 1280px;
        margin: 0 auto;
        padding-bottom: 100px;
    }

    .eight_txt {
        /* font-family: 'Lexend'; */
        font-size: 30px;
        line-height: 2;
    }

    .home_eight_title_top {
        padding-top: 50px;
        padding-bottom: 20px;
    }

    .home_eight_title_top_txt {
        font-family: 'Lexend';
        font-size: 43px;
        font-weight: 700;
        color: #000;
    }

    .eight_btn_txt {
        font-size: 30px;
    }

    .eight_btn {
        margin-top: 45px;
        width: 480px;
        height: 72px;
        border-radius: 18px;
        background: var(--Linear, linear-gradient(180deg, #7EAAFF 0%, #59FFB9 100%));
        box-sizing: border-box;
        padding: 0 20px;
        color: #fff;
        font-family: Lexend;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        cursor: pointer;
        box-sizing: border-box;
    }

}


@media screen and (max-width: 1440px) {
    .home_seven {
        padding: 0 100px 50px 100px;
        /* width: 100%; */
    }
}

@media screen and (max-width: 1220px) {
    .four_item_box_content {
        padding: 0 100px;
    }

    .home_two_contain {
        padding: 0 100px;

        .two_txt {
            /* font-size: 40px; */
            padding: 100px 0 50px 0;
        }
    }

    .home_seven {
        padding: 0 100px 50px 100px;
        /* width: 100%; */
    }
}

@media screen and (max-width: 768px) {

    .home_one_title {
        display: none;
    }

    .home_one_title_small {
        font-family: 'Arial';
        display: block;
        font-size: 32px;
        padding: 0 50px;
    }

    .home_one_txt {
        display: none;
    }

    .home_one_txt_small {
        line-height: 2;
        display: block;
    }

    .home_one_txt {
        font-size: 16px;
        padding: 30px 20px;
    }

    .home_num_box {
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 20px;
    }

    .home_num_box_icon {
        width: 20px;
        margin-right: 10px;
    }

    .home_num_box_title {
        font-size: 14px;
    }

    .home_num_box_txt {
        padding-top: 5px;
        font-size: 10px;
    }

    .home_btn {
        width: 140px;
        height: 46px;
        font-size: 16px;
    }

    .home_two_contain {
        padding: 0 30px;

        .two_txt {
            font-size: 28px;
            padding: 100px 0 50px 0;
        }

        .two_txt_two {
            font-size: 26px;
            padding: 20px 0 100px 0;
        }
    }

    .four_item_box_content {
        padding: 0 30px;

        .four_more {
            margin-top: 20px;
            padding: 10px 20px;
        }

        .four_img_one {
            margin-top: 40px;
        }

        .four_img_two_img {
            width: 100%;
            padding-right: 0;
            padding-top: 20px;
            padding-bottom: 40px;
        }

        .four_img_three_img {
            width: 100%;
            padding-right: 0;
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .four_title {
            padding-top: 50px;
            font-size: 36px;
        }

        .four_txt {
            font-size: 16px;
        }

        .four_img_one_img {
            width: 100%;

        }
    }

    .three_content {
        padding-bottom: 100px;

        .three_title {
            font-size: 58px;
        }

        .three_content_title {
            padding-left: 30px;
            padding-right: 30px;
        }

        .three_content_img_box {
            padding: 0 30px;
            padding-top: 80px;
            gap: 10px;
        }

        .three_content_img {
            width: 160px;
        }

        .three_content_img_img {
            width: 120px;
        }

        .three_content_img_txt {
            font-size: 14px;
        }
    }

    .home_five_content {
        .five_img_box {
            display: none;
        }

        .five_img_box_small {
            display: block;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0 0px;
            gap: 50px;
        }

        .home_five_title {
            font-size: 46px;
        }
    }

    .home_seven {
        width: 100%;
        padding: 0;
        /* padding: 0 50px 20px 50px; */
    }

    .home_eight {
        width: 100%;
        padding: 0 50px;

        .home_eight_content {
            height: 100%;
            width: 100%;
            padding: 0 20px;
        }

        .home_eight_title_top {
            padding-top: 16px;
        }

        .home_eight_title_top_txt {
            font-size: 24px;
        }

        .color_green {
            font-size: 26px;
        }

        .eight_txt {
            font-size: 16px;
        }

        .eight_btn {
            width: 260px;
            height: 30px;
            font-size: 10px;
            padding: 20px 10px;
            margin: 20px 0;
        }

        .eight_btn_txt {
            font-size: 16px;
        }

        .eight_small_bgi_one {
            position: absolute;
            bottom: 0;
            right: 90px;
            width: 240px;
        }

        .eight_small_bgi_two {
            position: absolute;
            bottom: 0;
            right: 120px;
            width: 190px;
        }
    }
}

@media screen and (max-width: 440px) {
    .home_one {
        padding-top: 20px;

        .home_one_title_small {
            font-size: 17px;
        }

        .home_one_txt_small {
            padding-top: 30px;
            font-size: 13px;
        }

        .home_one_btn {
            padding: 50px 0;
        }

        .home_num_box {
            display: flex;
            justify-content: space-evenly;
            padding-bottom: 10px;
        }

        .home_num_box_icon {
            width: 15px;
            margin-right: 10px;
        }

        .home_num_box_title {

            font-size: 12px;
            color: #1ae28e;
        }

        .home_num_box_txt {
            font-size: 7px;
            padding-top: 5px;
        }

    }

    .home_one_title {
        font-size: 24px;
    }

    .two_video_img {
        width: 100%;
    }

    .home_one_txt {
        font-size: 14px;
    }

    .home_btn {
        width: 120px;
        height: 40px;
        font-size: 14px;
    }

    .home_two_contain {
        padding: 0 30px;

        .two_txt {
            font-size: 16px;
            padding: 50px 0 50px 0;
        }

        .two_txt_two {
            font-size: 16px;
            padding: 20px 0 20px 0;
        }
    }

    .home_four {
        .four_title {
            font-size: 18px;
        }

        .four_more {
            padding: 10px 0 10px 15px;
            font-size: 16px;
        }

        .four_item_box_content {
            .four_img_two_img {
                height: 250px;
                padding-right: 0;
                padding-top: 20px;
                padding-bottom: 40px;
                object-fit: contain;
            }
        }
    }

    .three_content {
        .three_title {
            font-size: 30px;
        }

        .three_content_title {
            font-size: 12px;
        }

        .three_content_img {
            width: 106px;
        }

        .three_content_img_box {
            padding: 10px 0;
        }

        .three_content_img_img {
            width: 70px;
            height: 72px;
            margin: 0;
            object-fit: contain;
        }

        .three_content_img_txt {
            font-size: 9px;
        }
    }

    .home_five {
        .five_img_box_small {
            gap: 20px;
        }

        .home_five_title {
            font-size: 25px;
            padding-bottom: 50px;
        }

        .five_img {
            width: 136px;
        }
    }

    .home_seven {
        display: flex;
        flex-direction: column;
        align-items: center;

        .home_seven_img {
            display: none;
        }

        .home_seven_img_small {
            width: 80%;
            display: block;
        }
    }

    .home_eight {
        padding: 0;

        .home_eight_content {
            height: 100%;
            width: 100%;
            padding: 0 20px;


        }

        .home_eight_title_top {
            padding-top: 20px;
        }

        .home_eight_title_top_txt {
            font-size: 7px;
        }

        .color_green {
            font-size: 12px;
        }

        .eight_txt {
            font-size: 10px;
        }

        .eight_btn {
            width: 150px;
            height: 30px;
            font-size: 10px;
            padding: 0 10px;
            margin: 20px 0;
        }

        .eight_btn_txt {
            font-size: 9px;
        }

        .eight_small_bgi_one {
            position: absolute;
            bottom: 0;
            right: 60px;
            width: 100px;
        }

        .eight_small_bgi_two {
            position: absolute;
            bottom: 0;
            right: 60px;
            width: 100px;
        }
    }

}

.logo-item {
    transition: all 0.5s ease;
}

.logo-slide-enter-active,
.logo-slide-leave-active {
    transition: all 0.5s ease;
}

.logo-slide-enter-from {
    transform: translateX(100%);
    opacity: 0;
}

.logo-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.logo-slide-move {
    transition: transform 0.5s ease;
}



.eight_btn_txt {
    font-size: 8px;
}
</style>
