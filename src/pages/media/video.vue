<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Carousel from '@/components/carousel.vue';
import btnNormal from '@/assets/x2/video_normal.png';
import btnHover from '@/assets/x2/video_hover.png';
import videoBannerOne from '@/assets/x2/video_banner_one.png';


const btnImgs = ref(Array(6).fill(btnNormal));


const isHover = (index, show) => {
  btnImgs.value[index] = show ? btnHover : btnNormal;
}

const slidesArr = [
  { 
    title: 'Open Data Platform (ODP) — Alaya AI’s Vision for The Future of Web3 AI', 
    description: 'As we wrap up an exciting and fruitful August for Alaya AI, we are proud to announce our newest innovation for the Web3 AI landscape: Alaya AI’s Open Data Platform (Alaya ODP).', 
    image: videoBannerOne,
    video: 'https://www.youtube.com/embed/gEojUe2f70g',
    link: 'https://www.youtube.com/embed/gEojUe2f70g'
  },

  
];
const videoList = [
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20REVIEW%20-A%20DISTRIBUTED%20AI%20DETA%20PLATFORM%20THAT%20INTEGRATES%20COLLECTION%20&%20LABELING/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "ALAYA AI REVIEW -A DISTRIBUTED AI DETA PLATFORM THAT INTEGRATES COLLECTION & LABELING",
        "link": "https://www.youtube.com/watch?v=7pE1m1PmirM",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20REVIEW%20-A%20DISTRIBUTED%20AI%20DETA%20PLATFORM%20THAT%20INTEGRATES%20COLLECTION%20&%20LABELING/%F0%9F%92%A5ALAYA%20AI%20REVIEW%20%F0%9F%92%A5%20A%20DISTRIBUTED%20AI%20DETA%20PLATFORM%20THAT%20INTEGRATES%20COLLECTION%20&%20LABELING%20%F0%9F%92%A5.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20-%20Kripto%20Piyasas%C4%B1nda%20Yeni%20Bir%20Do%CC%88nem%20Bas%CC%A7l%C4%B1yor/maxresdefault.jpg",
        "time": "December 20, 2024",
        "title": "ALAYA AI - Kripto Piyasasında Yeni Bir Dönem Başlıyor",
        "link": "https://www.youtube.com/watch?v=f1jxi6dzHXA",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20-%20Kripto%20Piyasas%C4%B1nda%20Yeni%20Bir%20Do%CC%88nem%20Bas%CC%A7l%C4%B1yor/ALAYA%20AI%20-%20Kripto%20Piyasas%C4%B1nda%20Yeni%20Bir%20Do%CC%88nem%20Bas%CC%A7l%C4%B1yor.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/%F0%9D%90%80%F0%9D%90%8B%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80%20%F0%9D%90%80%F0%9D%90%88%20%F0%9D%90%81%F0%9D%90%84%F0%9D%90%92%F0%9D%90%93%20%F0%9D%90%86%F0%9D%90%80%F0%9D%90%8C%F0%9D%90%84%20%F0%9D%90%91%F0%9D%90%84%F0%9D%90%95%F0%9D%90%88%F0%9D%90%84%F0%9D%90%96%20%7C%7C%20%F0%9D%9F%90%F0%9D%9F%8E%F0%9D%9F%90%F0%9D%9F%92%20%F0%9D%90%81%F0%9D%90%84%F0%9D%90%92%F0%9D%90%93%20%F0%9D%90%83%F0%9D%90%80%F0%9D%90%93%F0%9D%90%80%20%F0%9D%90%8F%F0%9D%90%91%F0%9D%90%8E%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93%20%7C%7C%20%F0%9D%90%89%F0%9D%90%8E%F0%9D%90%88%F0%9D%90%8D%20%F0%9D%90%8D%F0%9D%90%8E%F0%9D%90%96/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "𝐀𝐋𝐀𝐘𝐀 𝐀𝐈 𝐁𝐄𝐒𝐓 𝐆𝐀𝐌𝐄 𝐑𝐄𝐕𝐈𝐄𝐖 || 𝟐𝟎𝟐𝟒 𝐁𝐄𝐒𝐓 𝐃𝐀𝐓𝐀 𝐏𝐑𝐎𝐅𝐈𝐓 || 𝐉𝐎𝐈𝐍 𝐍𝐎𝐖",
        "link": "https://www.youtube.com/embed/8kFjhWfh750",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/%F0%9D%90%80%F0%9D%90%8B%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80%20%F0%9D%90%80%F0%9D%90%88%20%F0%9D%90%81%F0%9D%90%84%F0%9D%90%92%F0%9D%90%93%20%F0%9D%90%86%F0%9D%90%80%F0%9D%90%8C%F0%9D%90%84%20%F0%9D%90%91%F0%9D%90%84%F0%9D%90%95%F0%9D%90%88%F0%9D%90%84%F0%9D%90%96%20%7C%7C%20%F0%9D%9F%90%F0%9D%9F%8E%F0%9D%9F%90%F0%9D%9F%92%20%F0%9D%90%81%F0%9D%90%84%F0%9D%90%92%F0%9D%90%93%20%F0%9D%90%83%F0%9D%90%80%F0%9D%90%93%F0%9D%90%80%20%F0%9D%90%8F%F0%9D%90%91%F0%9D%90%8E%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93%20%7C%7C%20%F0%9D%90%89%F0%9D%90%8E%F0%9D%90%88%F0%9D%90%8D%20%F0%9D%90%8D%F0%9D%90%8E%F0%9D%90%96/%F0%9D%90%80%F0%9D%90%8B%F0%9D%90%80%F0%9D%90%98%F0%9D%90%80%20%F0%9D%90%80%F0%9D%90%88%20%F0%9D%90%81%F0%9D%90%84%F0%9D%90%92%F0%9D%90%93%20%F0%9D%90%86%F0%9D%90%80%F0%9D%90%8C%F0%9D%90%84%20%F0%9D%90%91%F0%9D%90%84%F0%9D%90%95%F0%9D%90%88%F0%9D%90%84%F0%9D%90%96%20%7C%7C%20%F0%9D%9F%90%F0%9D%9F%8E%F0%9D%9F%90%F0%9D%9F%92%20%F0%9D%90%81%F0%9D%90%84%F0%9D%90%92%F0%9D%90%93%20%F0%9D%90%83%F0%9D%90%80%F0%9D%90%93%F0%9D%90%80%20%F0%9D%90%8F%F0%9D%90%91%F0%9D%90%8E%F0%9D%90%85%F0%9D%90%88%F0%9D%90%93%20%7C%7C%20%F0%9D%90%89%F0%9D%90%8E%F0%9D%90%88%F0%9D%90%8D%20%F0%9D%90%8D%F0%9D%90%8E%F0%9D%90%96.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/AI%20Alaya%20Project%20Review%20%F0%9F%8C%9F%20-%20Integrated%20DataCollection%20and%20Labeling%20%7C%7C%20Earn%20Daily%20Income%20-%20JOIN%20NOW/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "AI Alaya Project Review 🌟 - Integrated DataCollection and Labeling || Earn Daily Income - JOIN NOW",
        "link": "https://www.youtube.com/watch?v=7pE1m1PmirM",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/AI%20Alaya%20Project%20Review%20%F0%9F%8C%9F%20-%20Integrated%20DataCollection%20and%20Labeling%20%7C%7C%20Earn%20Daily%20Income%20-%20JOIN%20NOW/AI%20Alaya%20Project%20Review%20%F0%9F%8C%9F%20-%20Integrated%20DataCollection%20and%20Labeling%20%7C%7C%20Earn%20Daily%20Income%20-%20JOIN%20NOW.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20%7C%20EARN%20NFT%20TOKENS%20BY%20ANSWERING%20SIMPLE%20TASK%20%7C%20BEST%20PROJECT%20AND%20GAMING%20SITE%20REVIEW/maxresdefault.jpg",
        "time": "December 20, 2024",
        "title": "ALAYA AI | EARN NFT TOKENS BY ANSWERING SIMPLE TASK | BEST PROJECT AND GAMING SITE REVIEW",
        "link": "https://www.youtube.com/watch?v=oM1962Fqc0I",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20%7C%20EARN%20NFT%20TOKENS%20BY%20ANSWERING%20SIMPLE%20TASK%20%7C%20BEST%20PROJECT%20AND%20GAMING%20SITE%20REVIEW/ALAYA%20AI%20%7C%20EARN%20NFT%20TOKENS%20BY%20ANSWERING%20SIMPLE%20TASK%20%7C%20BEST%20PROJECT%20AND%20GAMING%20SITE%20REVIEW.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20An%20open%20Web3%20AI%20data%20platforminspired%20by%20swarm%20intelligence%20ecosystems/maxresdefault.jpg",
        "time": "December 20, 2024",
        "title": "ALAYA An open Web3 AI data platforminspired by swarm intelligence ecosystems",
        "link": "https://www.youtube.com/watch?v=gEojUe2f70g",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20An%20open%20Web3%20AI%20data%20platforminspired%20by%20swarm%20intelligence%20ecosystems/ALAYA%20An%20open%20Web3%20AI%20data%20platforminspired%20by%20swarm%20intelligence%20ecosystems.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%21%20An%20open%20Web3%20AI%20data%20platform%20inspired%20by%20intelligence%20ecosystems%20cooperation%20with%20Turkey/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "ALAYA AI! An open Web3 AI data platform inspired by intelligence ecosystems cooperation with Turkey",
        "link": "https://www.youtube.com/watch?v=eGu82F1lWm4&t=1s",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%21%20An%20open%20Web3%20AI%20data%20platform%20inspired%20by%20intelligence%20ecosystems%20cooperation%20with%20Turkey/ALAYA%20AI%21%20An%20open%20Web3%20AI%20data%20platform%20inspired%20by%20intelligence%20ecosystems%20cooperation%20with%20Turkey.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20Project%20Review/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "ALAYA AI Project Review",
        "link": "https://www.youtube.com/watch?v=cnSemKfhNNU",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20Project%20Review/null.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA+AI+-+Be+a+part+of+the+future+of+the+Web3+%2B+AI+revolution+-+Enhanced+Privacy/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "ALAYA AI - Be a part of the future of the Web3 + AI revolution - Enhanced Privacy",
        "link": "https://www.youtube.com/watch?v=medXoLSOUoY",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA+AI+-+Be+a+part+of+the+future+of+the+Web3+%2B+AI+revolution+-+Enhanced+Privacy/ALAYA+AI+-+Be+a+part+of+the+future+of+the+Web3+%2B+AI+revolution+-+Enhanced+Privacy.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20BEST%20GAME%20REVIEW%20JOIN%20AND%20GET%20HUGE%20REWARDS/maxresdefault.jpg",
        "time": "December 20, 2024",
        "title": "ALAYA AI BEST GAME REVIEW JOIN AND GET HUGE REWARDS",
        "link": "https://www.youtube.com/watch?v=hqPrXk7E3cU",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20BEST%20GAME%20REVIEW%20JOIN%20AND%20GET%20HUGE%20REWARDS/ALAYA%20AI%20BEST%20GAME%20REVIEW%20JOIN%20AND%20GET%20HUGE%20REWARDS.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%CC%87%20PROJESI%CC%87%20I%CC%87NCELEME%20%21%20%F0%9F%94%A5-%20WEB%203%20VE%20YAPAY%20ZEKA%20DESTEKLI%CC%87%20OYUN%20JETONU/maxresdefault.webp",
        "time": "December 20, 2024",
        "title": "ALAYA Aİ PROJESİ İNCELEME ! 🔥- WEB 3 VE YAPAY ZEKA DESTEKLİ OYUN JETONU",
        "link": "https://www.youtube.com/watch?v=g15TGYb8vUY",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%CC%87%20PROJESI%CC%87%20I%CC%87NCELEME%20%21%20%F0%9F%94%A5-%20WEB%203%20VE%20YAPAY%20ZEKA%20DESTEKLI%CC%87%20OYUN%20JETONU/ALAYA%20AI%CC%87%20PROJESI%CC%87%20I%CC%87NCELEME%20%21%20%F0%9F%94%A5-%20WEB%203%20VE%20YAPAY%20ZEKA%20DESTEKLI%CC%87%20OYUN%20JETONU%20%F0%9F%9A%80.mp4"
    },
    {
        "image": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20GET%20STARTED%20WITH%20ALAYA%20%20COMMUNITY%20ECONOMY/maxresdefault.jpg",
        "time": "December 20, 2024",
        "title": "ALAYA AI GET STARTED WITH ALAYA  COMMUNITY ECONOMY",
        "link": "https://www.youtube.com/watch?v=zUGXyxsHt48",
        "video": "https://object-aialaya-new.s3.ap-southeast-1.amazonaws.com/web_static/video/ALAYA%20AI%20GET%20STARTED%20WITH%20ALAYA%20%20COMMUNITY%20ECONOMY/%F0%9F%94%A5%20ALAYA%20AI%20%F0%9F%94%A5%20GET%20STARTED%20WITH%20ALAYA%20%F0%9F%94%A5%20COMMUNITY%20ECONOMY.mp4"
    }
]


const baseWidth = 1440 
const scale = ref(1)

const updateScale = () => {
  const width = window.innerWidth
  scale.value = Math.min(width / baseWidth, 1) 
}


const dialogVisible = ref(false)
const currentVideo = ref('')


const handleClick = (index) => {
  window.open(videoList[index].link, '_blank')
 
}
const playVideo = (video) => {

}


const handleClose = () => {
  currentVideo.value = ''
  dialogVisible.value = false
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})

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

</script>

<template>
  <div class="box_top"></div>
  <div class="media_box">
      <div class="media_one">
        <div class="media_one_title">VIDEO</div>
        <div class="media_one_desc">Featured events, user guides, AMAs and more...</div>
        <div class="carousel_wrapper">
          <Carousel class="carousel_box" style="" :slides="slidesArr" />
        </div>
      </div>
      <div class="media_two">
        <div class="media_two_content">
          <div class="media_two_item" v-for="(item, index) in currentPageData" :key="index">
            <img style="width: 100%;" :src="item.image" alt="" @click="playVideo(item.video)">
            <div style="padding: 0 20px 20px 20px;">
              <div class="media_two_item_date">{{ item.time }}</div>
              <div class="media_two_item_title text_two_container">{{ item.title }}</div>
              <div style="display: flex; justify-content: center;">
                <img 
                  style="width: 80%; object-fit: contain; cursor: pointer;" 
                  :src="btnImgs[index]" 
                  alt=""
                  @click="handleClick((currentPage - 1) * pageSize + index)"
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

  <el-dialog
    v-model="dialogVisible"
    width="60%"
    :before-close="handleClose"
    class="video-dialog"
    :show-close="true"
    :append-to-body="true"
    :destroy-on-close="true"
  >
    <div class="video-container">
      <iframe
        v-if="currentVideo"
        :src="currentVideo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </el-dialog>
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
  flex-wrap: wrap;
  /* gap: 25px; */
  justify-content: space-between;
  min-height: calc(100vh - 200px);
}
.media_two_item {
  width: 32%;
  /* width: calc(360px * v-bind(scale)); */
  background-color: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
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
  margin-top: 30px;
}

@media screen and (max-width: 1410px) {
  .media_two_content {
    width: 90%;
  }
}

@media screen and (max-width: 719px) {
  .media_one {
    width: 100%;
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

  /* .carousel_wrapper {
    width: 100%;
  } */

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


.video-dialog :deep(.el-dialog) {
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 10vh !important;
}

.video-dialog :deep(.el-dialog__header) {
  padding: 0;
  margin: 0;
}

.video-dialog :deep(.el-dialog__headerbtn) {
  z-index: 10;
  font-size: 24px;
}

.video-dialog :deep(.el-dialog__headerbtn .el-dialog__close) {
  color: #fff;
}

.video-dialog :deep(.el-dialog__body) {
  padding: 0;
  margin: 0;
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 440px) {
  .video-dialog :deep(.el-dialog) {
    width: 90% !important;
    margin: 20vh auto !important;
  }
}
</style>