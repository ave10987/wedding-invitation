<template>
  <div></div>
</template>
<script>
export default {
  name: 'Share',
  mounted() {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '윤정현♥최정민의 모바일 초대장입니다.',
        imageUrl: 'https://lh5.googleusercontent.com/N-aij1Kbey5FEAEVTXZynM1A8cKdySt4WdZoNaopOERlpVy93nBTtvH1GG32yqyqmuwMlJVDybjvdrtn9EVQ=w1920-h960',
        link: {
          mobileWebUrl: 'https://invitation-ec422.firebaseapp.com',
          webUrl: 'https://invitation-ec422.firebaseapp.com',
        },
        imageWidth: 500,
        imageHeight: 357,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://invitation-ec422.firebaseapp.com',
            webUrl: 'https://invitation-ec422.firebaseapp.com',
          },
        },
        {
          title: '공유하기',
          link: {
            mobileWebUrl: 'https://invitation-ec422.firebaseapp.com/share',
            webUrl: 'https://invitation-ec422.firebaseapp.com/share',
          },
        },
      ],
    });

    this.$router.push('/');
  }
}
</script>

