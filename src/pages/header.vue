<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import aiaLogo from '@/assets/x2/aia_logo.png'
import arrowDown from '@/assets/arrow-right.svg'
import alayaPro from '@/assets/x2/aia_pro_normal.png'
import alayaProHover from '@/assets/x2/aia_pro_hover.png'
import menu from '@/assets/small/menu.png'
import close from '@/assets/small/close.png'

import { useRouter } from 'vue-router';

const router = useRouter();

const platformShow = ref(false)

const isHovered = ref(false)
const toggleHover = (show) => {
    isHovered.value = show
}

const togglePlatform = (show) => {
  platformShow.value = show;
};

const mediaShow = ref(false)
const toggleMedia = (show) => {
    mediaShow.value = show
}

const communityShow = ref(false)

const toggleCommunity = (show) => {
    communityShow.value = show
}
const currentImage = ref(alayaPro);

const changeImage = (isHover) => {
    currentImage.value = isHover ? alayaProHover : alayaPro;
}

const goAialaya = () => {
    // window.open('https://www.aialaya.io/web/alaya/game.html', '_blank');
}

const toggleDoc = () => {
     window.open('https://alaya-ai.gitbook.io/alaya-ai', '_blank');
}

const goX = () => {
    window.open('https://x.com/Alaya_AI', '_blank');
}
const goTelegram = () => {
    window.open('https://t.me/Alaya_AI', '_blank');
}

const goAgt = () => {
    window.open('https://alaya-ai.gitbook.io/alaya-ai/user-manual/usdagt-token', '_blank');
}

const menuShow = ref(false)
const toggleMenu = () => {
    menuShow.value = !menuShow.value
    toggleMenuItem('')
}


const menuStates = ref({
  platform: false,
  media: false,
  doc: false
})


const toggleMenuItem = (item) => {
  for (const key in menuStates.value) {
    if (key === item) {
      menuStates.value[key] = !menuStates.value[key];
    } else {
      menuStates.value[key] = false;
    }
  }
  
}

const selectedIndex = ref(0); 
const selectItem = (index) => {
    if(index === 2) {
        router.push('/annotation')
    }
    if(index === 3) {
        router.push('/platform')
    }
    if(index === 5) {
        router.push('/media')
    }
    if(index === 6) {
        router.push('/video')
    }
    if(index === 7) {
        window.open('https://x.com/Alaya_AI', '_blank');
    }
    if(index === 8) {
        window.open('https://t.me/Alaya_AI.com/', '_blank');
    }
    toggleMenuItem('')
    menuShow.value = false;
    selectedIndex.value = index;
};


const handleContentClick = (e) => {

  if (!e.target.closest('.menu_box') && !e.target.closest('.logo_end_small')) {
    menuShow.value = false
    toggleMenuItem('')
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
  document.addEventListener('click', handleContentClick)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
  document.removeEventListener('click', handleContentClick)
})
</script>

<template>
    <div class="header_container" :class="{ 'active': isHovered, 'mobile_active': menuShow, 'active_height': platformShow || mediaShow || communityShow }" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)" >
        <div class="header_box" >
        <div style="display: flex; align-items: center; justify-content: center;height: 100%;">
            <img class="logo" :src="aiaLogo" alt="" @click="router.push('/')" >
        </div>
        <div class="item_box">
            <div class="platform margin_right pointer_txt" style="position: relative;">
                <div class="platform_wrapper"
                     @mouseenter="togglePlatform(true)"
                     @mouseleave="togglePlatform(false)">
                    <span :style="{ color: platformShow ? '#1ae28e' : '' }">Platform</span>
                    <img class="platform_arrow" :class="{ 'arrow_rotate': platformShow }" :src="arrowDown" alt="">
                    <div class="platform_bottm" v-show="platformShow">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                            <img class="tree" src="@/assets/tree.png" alt="">
                            <div class="line" ></div>
                        </div>
                        <div class="pla_botom_txt_box">
                            <div class="pla_botom_one pointer_txt">Frontier Data</div>
                            <div class="pla_btm_two pointer_txt" @click="router.push('/annotation')" >Data Annotation</div>
                            <div class="pla_btm_two pointer_txt" @click="router.push('/platform')">Open Data Platform</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
       
        <div class="ai-auto-labelling margin_right pointer_txt" @click="router.push('/labeling')">AI Auto-Labelling</div>
        <div class="media margin_right pointer_txt" style="position: relative;">
            <div class="media_wrapper"
                 @mouseenter="toggleMedia(true)"
                 @mouseleave="toggleMedia(false)">
                <span :style="{ color: mediaShow ? '#1ae28e' : '' }">Media</span>
                <img class="media_arrow" :class="{ 'arrow_rotate': mediaShow }" :src="arrowDown" alt="">
                <div class="media_bottm" v-show="mediaShow">
                    <div style="display: flex; align-items: center;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                        <img class="tree" src="@/assets/small/qizhi.png" alt="">
                        <div class="line" ></div>
                    </div>
                    <div class="pla_botom_txt_box">
                        <div class="pla_botom_one pointer_txt">latest information</div>
                        <div class="pla_btm_two pointer_txt" @click="router.push('/media')" >Medium</div>
                        <div class="pla_btm_two pointer_txt" @click="router.push('/video')">Video Tutorials</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="doc margin_right pointer_txt" @click="toggleDoc">Doc</div>
        <div class="community margin_right pointer_txt" style="position: relative;">
            <div class="community_wrapper"
                 @mouseenter="toggleCommunity(true)"
                 @mouseleave="toggleCommunity(false)">
                <span :style="{ color: communityShow ? '#1ae28e' : '' }">Community</span>
                <img class="community_arrow" :class="{ 'arrow_rotate': communityShow }" :src="arrowDown" alt="">
                <div class="community_bottm" v-show="communityShow">
                    <div style="display: flex; align-items: center;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <img class="tree" src="@/assets/x2/jiangbei.png" alt="">
                            <div class="line"></div>
                        </div>
                        <div class="pla_botom_txt_box">
                            <div class="pla_botom_one pointer_txt">Follow us</div>
                            <div class="pla_btm_two pointer_txt" @click="goX">Twitter/X</div>
                            <div class="pla_btm_two pointer_txt" @click="goTelegram">Telegram</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="agt margin_right pointer_txt" @click="goAgt">$AGT</div>
        </div>
        <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
            <img class="logo_end" :src="currentImage" alt="" @mouseover="changeImage(true)" @mouseout="changeImage(false)"  @click="goAialaya">
             <img class="logo_end_small" :src="menuShow ?  close : menu" alt="" @click="toggleMenu">
        </div>
        </div>
        <div class="menu_box pointer_txt" v-if="menuShow" @click.stop>
            <div class="menu_item ">
                <div class="menu_item_box" @click="toggleMenuItem('platform')">
                    <div>Platform</div>
                    <img :class="{ 'rotate': menuStates.platform }" src="@/assets/small/arrow_right.png" alt="">
                </div>
                <div class="menu_content" v-show="menuStates.platform">
                    <div class="menu_sub_item" style="display: flex; align-items: center;">
                        <img style="width: 20px;" src="@/assets/small/tree.png" alt="">
                        <span style="margin-left: 10px; color: #0a091c;">Frontier Data</span>
                    </div>
                   <div style="margin-left: 10px; border-left: 1px solid #1ae28e; padding-left: 20px;">
                    <div class="menu_sub_item" @click="selectItem(2)" :class="{ active: selectedIndex === 2 }">Data Annotation</div>
                    <div class="menu_sub_item" @click="selectItem(3)" :class="{ active: selectedIndex === 3 }">Open Data Platform</div>
                   </div>
                </div>
            </div>
            <div class="menu_item" @click="router.push('/labeling')">AI Auto-Labelling</div>
            <div class="menu_item">
                <div class="menu_item_box" @click="toggleMenuItem('media')">
                    <div>Media</div>
                    <img :class="{ 'rotate': menuStates.media }" src="@/assets/small/arrow_right.png" alt="">
                </div>
                <div class="menu_content" v-show="menuStates.media">
                    <div class="menu_content" v-show="menuStates.media">
                    <div class="menu_sub_item" style="display: flex; align-items: center;">
                        <img style="width: 20px;" src="@/assets/small/qizhi.png" alt="">
                        <span style="margin-left: 10px; color: #0a091c;">latest information</span>
                    </div>
                   <div style="margin-left: 10px; border-left: 1px solid #1ae28e; padding-left: 20px;">
                        <div class="menu_sub_item" @click="selectItem(5)" :class="{ active: selectedIndex === 5 }">Medium</div>
                        <div class="menu_sub_item" @click="selectItem(6)" :class="{ active: selectedIndex === 6 }">Video Tutorials</div>
                    </div>

                    </div>
                </div>
            </div>
            <div class="menu_item" @click="toggleDoc">Doc</div>
            <div class="menu_item">
                <div class="menu_item_box" @click="toggleMenuItem('doc')">
                    <div> Community</div>
                    <img class="" :class="{ 'rotate': menuStates.doc }" src="@/assets/small/arrow_right.png" alt="">
                </div>
                <div class="menu_content" v-show="menuStates.doc">
                    <div class="menu_sub_item" style="display: flex; align-items: center;">
                        <img style="width: 20px;" src="@/assets/x2/jiangbei.png" alt="">
                        <span style="margin-left: 10px; color: #0a091c;">Follow us</span>
                    </div>
                   <div style="margin-left: 10px; border-left: 1px solid #1ae28e; padding-left: 20px;">
                        <div class="menu_sub_item" @click="selectItem(7)" :class="{ active: selectedIndex === 7 }">Twitter/X</div>
                        <div class="menu_sub_item" @click="selectItem(8)" :class="{ active: selectedIndex === 8 }">Telegram</div>
                    </div>
                </div>
            </div>
            
            <div class="" style="display: flex; align-items: center; justify-content: center; padding: 30px 0;">
                <img style="width: 100px;" :src="alayaPro" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.item_box {
    display: flex; 
    align-items: center; 
    justify-content: center;
    height: 100%;
    width: calc(800px * v-bind(scale));
}
.header_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(88px * v-bind(scale));
    display: flex; 
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    background-color: #121022;
    z-index: 1000;
    transition: all 0.2s ease;
}

.active {
    background-color: #fff;
    color: #191933;
    border-radius: 0 0 18px 18px;
}
.active_height {
    height: calc(180px * v-bind(scale));
    transition: height 0.1s ease;
}
.header_box {
    width: 100%;
    padding: 0 calc(200px * v-bind(scale));
    height: calc(88px * v-bind(scale));
    font-size: calc(18px * v-bind(scale));
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border: none;
}

.margin_right {
    margin-right: calc(30px * v-bind(scale));
}
.logo {
    width: calc(150px * v-bind(scale));
    margin-right: calc(80px * v-bind(scale));
    cursor: pointer;
}
.platform {
    cursor: pointer;
}
.platform:hover {
    color: #1ae28e;
}
.platform_arrow {
    margin-left: calc(5px * v-bind(scale));
    width: calc(8px * v-bind(scale));
    transition: transform 0.2s ease;
}

.ai-auto-labelling:hover {
    color: #1ae28e;
}
.doc:hover {
    color: #1ae28e;
}
.media:hover {
    color: #1ae28e;
}
.media_arrow {
    margin-left: calc(5px * v-bind(scale));
    width: calc(8px * v-bind(scale));
    transition: transform 0.2s ease;
}
.community:hover {
    color: #1ae28e;
}
.agt:hover {
    color: #1ae28e;
}
.community_arrow {
    width: calc(8px * v-bind(scale))    ;
    transition: transform 0.3s ease;
}
.arrow_rotate {
    transform: rotate(90deg);
    transition: transform 0.3s ease;
}
.arrow_rotate_media {
    transform: rotate(90deg);
}
.arrow_rotate_community {
    transform: rotate(90deg);
}
.logo_end {
    width: calc(112px * v-bind(scale));
    height: calc(32px * v-bind(scale));
    margin-left: calc(60px * v-bind(scale));
    cursor: pointer;
}
.logo_end_small {
    display: none;
    width: 32px;
    height: 32px;
    /* margin-left: 60px; */
    cursor: pointer;
}
.tree {
    height: calc(28px * v-bind(scale));
}
.line {
    width: calc(1px * v-bind(scale)); 
    height: calc(40px * v-bind(scale)); 
    background-color: #1ae28e; 
    margin-top: calc(5px * v-bind(scale));
}
.pla_botom_txt_box {
    padding-left: calc(20px * v-bind(scale));
}
.pla_botom_one {
    font-family: 'Arial';
    font-size: calc(16px * v-bind(scale));
    font-weight: 700;
}
.pla_btm_two {
    padding-top: calc(10px * v-bind(scale));
    font-size: calc(14px * v-bind(scale));
}
.pla_btm_two:hover {
    color: #45da95;
}

.fade-enter-active {
    transition: opacity 0.8s ease;
    transition-delay: 0.1s; 
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}


.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-leave-from {
    opacity: 1; 
}

.fade-leave-to {
    opacity: 0; 
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.menu_box {
    display: none;
    position: absolute; 
    top: 60px; 
    left: 0; 
    width: 100%; 
    background-color: #fff; 
    color: #191933;
    z-index: 1000;
}
.menu_item_box {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
}
.menu_item {
    padding: 10px 50px;
    border-bottom: 1px solid #e0e0e0; 
    font-size: 18px;
    transition: all 0.3s ease;
}

.menu_item_box {
    display: none;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
}

.menu_item_box img {
    transition: transform 0.3s ease;
}

.menu_item_box img.rotate {
    transform: rotate(90deg);
}

.menu_content {
    overflow: hidden;
    margin-top: 15px;
    padding-left: 20px;
    transition: all 0.3s ease;
}

.menu_sub_item {
    font-size: 18px;
    padding: 10px 0;
}
.menu_sub_item.active {
  color: #1ae28e; 
}

.menu_content-enter-active,
.menu_content-leave-active {
    transition: all 0.3s ease;
}

.menu_content-enter-from,
.menu_content-leave-to {
    height: 0;
    opacity: 0;
}


@media screen and (max-width: 1220px) { 
    .header_box {
       padding: 0 100px;
    }
    .item_box {
        width: calc(700px * v-bind(scale));
    }
}
@media screen and (max-width: 719px) {
    .header_box {
       padding: 0 50px;
    }
    .active {
        background-color: #fff;
        border-radius: 0 0 0 0;
    }

  .platform_bottm {
    width: 250px;
  }
  .logo {
    height: 32px;
    width: 113px;
    object-fit: contain;
    margin-right: 0;
  }
  .logo_end {
    margin-left: 0;
    display: none;
  }
  .logo_end_small {
    display: block;
  }
  .menu_box {
        display: block;
        top: 88px;
    }
    .item_box {
        display: none;
    }
}

@media screen and (max-width: 440px) {
    .item_box {
        display: none;
    }
    .active {
        background-color: transparent;
        border-radius: 0 0 0 0;
    }
    .mobile_active {
        background-color: #fff;
    }
    .header_box {
       padding: 0 26px;
       height: 60px;
    }
    .logo {
        width: 113px;
    }
    .menu_arrow {
        width: 32px;
    }

    .header_container {
        height: 60px;
    }
    .menu_box {
        display: block;
        top: 60px;
    }
 
}


.platform_menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #fff;
    transition: height 0.3s ease;
}

.platform_wrapper,
.media_wrapper {
  position: relative;
  /* padding: 10px 0; */
}

.platform_wrapper::after,
.media_wrapper::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 20px; 
  background: transparent;
}

.platform_bottm,
.media_bottm {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  color: #000;
  width: 300px;
  background-color: #fff;
  padding-top: 10px;
  opacity: 1;
  transition: opacity 0.2s ease;
}


.fade-enter-active,
.fade-leave-active,
.fade-enter-from,
.fade-leave-to {
  display: none;
}

.community_wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
}

.community_bottm {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  color: #000;
  width: 180px;
  background-color: #fff;
  padding-top: 10px;
  opacity: 1;
  transition: opacity 0.2s ease;
}

.community_wrapper::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 20px;
  background: transparent;
}

@media screen and (max-width: 440px) {
  .community_bottm {
    width: 250px;
  }
}
</style>
