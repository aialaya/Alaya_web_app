<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Carousel from '@/components/carousel.vue';
import btnNormal from '@/assets/x2/medio_nomal.png';
import btnHover from '@/assets/x2/medio_hover.png';
import videoBannerOne from '@/assets/x2/video_banner_one.png';
import imgOne from '@/assets/x2/media_one.webp';
import imgTwo from '@/assets/x2/media_two.webp';
import imgThree from '@/assets/x2/media_three.webp';
import imgFour from '@/assets/x2/media_four.webp';
import imgFive from '@/assets/x2/media_five.webp';
import imgSix from '@/assets/x2/media_six.webp';


const btnImgs = ref(Array(6).fill(btnNormal));


const isHover = (index, show) => {
  btnImgs.value[index] = show ? btnHover : btnNormal;
}

const slidesArr = [
  { 
    title: 'ALAYA An open Web3 AI data platforminspired by swarm intelligence ecosystems', 
    description: '', 
    image: videoBannerOne,
    link: 'https://medium.com/@alaya-ai/open-data-platform-odp-alaya-ais-vision-for-the-future-of-web3-ai-ced7d57b946a'
  },
];


const videoList = [
  {
    title: 'Alaya AI Announces 7.6M $AGT Airdrop Allocation for BNB Chain Chapter 3 Airdrop Alliance Program',
    time: 'Jun 18, 2024',
    image: imgOne,
    link:'https://medium.com/@alaya-ai/alaya-ai-announces-7-6m-agt-airdrop-allocation-for-bnb-chain-chapter-3-airdrop-alliance-program-577e6252532b'
  },
  {
    title: 'Revolutionizing AI: ALAYA AI’s Vision for a Sustainable Community Business Ecosystem',
    time: 'Dec 11, 2023',
    image: imgTwo,
    link:'https://medium.com/@alaya-ai/revolutionizing-ai-alaya-ais-vision-for-a-sustainable-community-business-ecosystem-b8e36291bf2f'
  },
  {
    title: 'Alaya: The Pioneer of Artificial Intelligence Data',
    time: 'Oct 8, 2023',
    image: imgThree,
    link:'https://medium.com/@alaya-ai/alaya-the-pioneer-of-artificial-intelligence-data-6dcf0723568b'
  },
  {
    title: 'Alaya’s NFT System',
    time: 'Aug 16, 2023',
    image: imgFour,
    link:'https://medium.com/@alaya-ai/alayas-nft-system-a43a2ffc6e90'
  },
  {
    title: 'Alaya：High-quality data is the future of AI',
    time: 'Jul 9, 2023',
    image: imgFive,
    link:'https://medium.com/@alaya-ai/alaya-high-quality-data-is-the-future-of-ai-e41b8623d364'
  },
  {
    title: 'Alaya — A Decentralised Alternative For AI Data',
    time: 'Jun 21, 2023',
    image: imgSix,
    link:'https://medium.com/@alaya-ai/alaya-integrated-solution-for-data-collection-and-labeling-services-d2f4d05710d8'
  },
  
]


const currentPage = ref(1)
const pageSize = 6
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return videoList.slice(start, end)
})


const handleCurrentChange = (val) => {
  currentPage.value = val
  window.scrollTo({
    top: document.querySelector('.carousel_wrapper').offsetTop,
    behavior: 'smooth'
  })
}

const toLink = (link) => {
  if (!link) return
  window.open(link, '_blank')
}


const baseWidth = 1440
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
  <div class="box_top"></div>
  <div class="media_box">
      <div class="media_one">
        <div class="media_one_title">MEDIUM</div>
        <div class="media_one_desc">Stay informed with our latest industry<br> news and project updates</div>
        <div class="carousel_wrapper">
          <Carousel class="carousel_box" :slides="slidesArr" />
        </div>
      </div>
      <div class="media_two">
        <div class="media_two_content">
          <div class="media_two_item" v-for="(item,index) in currentPageData" :key="index">
            <img style="width: 100%; height: 200px;" :src="item.image" alt="">
            <div style="padding: 0 20px 20px 20px;">
              <div class="media_two_item_date">{{ item.time }}</div>
              <div class="media_two_item_title text_two_container">{{ item.title }}</div>
               <div style="display: flex; justify-content: flex-end;">
                <img 
                  style="width: 40%; object-fit: contain; cursor: pointer;" 
                  :src="btnImgs[index]" 
                  alt=""
                  @click="toLink(item.link)"
                >
               </div>
            </div>
          </div>
          <div class="page_box">
            <el-pagination
              background="#f1f1f1"
              layout="prev, pager, next"
              :total="videoList.length"
              :page-size="pageSize"
              :current-page="currentPage"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>  
.media_box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  overflow: hidden;
}

.scale_box {
  width: 1200px;
  transform-origin: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.media_one {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px 0;
}
.media_one_title {
  font-family: 'Arial';
  font-size: 72px;
  font-weight: 700;
  color: #1ae28e;
}

.media_one_desc {
  text-align: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
}

.carousel-wrapper {
 display: flex;
 justify-content: center;
 align-items: center;
}
.carousel_box {
  width: calc(1200px * v-bind(scale));
}

.media_two {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background-color: #f1f1f1;
  padding-bottom: 50px;
}
.media_two_content {
  width: 80%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: calc(100vh - 200px);

}
.media_two_item {
  width: 32%;
  background-color: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.media_two_item:hover {
  border: 1px solid #1ae28e;
}
.media_two_item_title {
  margin: 20px 0;
  font-size: 20px;
  font-family: 'Arial';
  font-weight: 700;

}
.media_two_item_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 18px;
  background-color: #f1f1f1;
  border-radius: 10px;
}
.page_box {
  width: 100%; 
  display: flex; 
  justify-content: center;
}

@media screen and (max-width: 1410px) {
  .media_two_content {
    width: 90%;
  }
}

@media screen and (max-width: 719px) {
  .media_one {
    width: 90%;
  }

  .media_one_title {
    font-size: 48px;
  }

  .media_one_desc {
    font-size: 18px;
  }
  .media_box {
    padding-top: 0;
  }
}

@media screen and (max-width: 440px) {
  .scale_box {
    width: 100%;
    transform: none !important;
  }

  .media_one_title {
    font-size: 36px;
  }

  .media_one_desc {
    font-size: 16px;
  }



  .media_two_content {
    width: 90%;
    gap: 15px;
  }

  .media_two_item {
    width: calc(50% - 8px);
  }

  .media_two_item_title {
    font-size: 14px;
    /* padding: 10px 0; */
  }

  .media_two_item_date {
    font-size: 12px;
  }

  .media_two_item_btn {
    font-size: 12px;
    padding: 8px;
  }
  .page_box {
    display: none;
  }
  
}
</style>