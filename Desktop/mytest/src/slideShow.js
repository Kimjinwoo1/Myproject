export function slidShow() {

    const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
    // 갯수에 대비해서 슬라이드 너비를 맞추기위해쓴코든데.
    const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
    let currentIdx = 0; //현재 슬라이드 index

    // 나누기 5를 넣음 슬라이드 갯수는 이미지 갯수가 한줄에 5개니깐 /5한 갯수만큼 나올꺼라 6-6일
    // 슬라이 개수를 /5한걸 지워봄
    const slideCount = (slideImg.length) ; // 슬라이드 개수
    const prev = document.querySelector('.prev'); //이전 버튼
    const next = document.querySelector('.next'); //다음 버튼
    const slideWidth = "100%"; //한개의 슬라이드 넓이
    const slideMargin = 16; //슬라이드간의 margin 값

    //전체 슬라이드 컨테이너 넓이 설정
    // 슬라이드 마진값을뺏다.- slideMargin
    slides.style.width = "100%";

    function moveSlide(num) {
      // 400에서 925 -> 989로 변경 -> 1100 - > 1080
      slides.style.left = -num * 1080 + 'px';
      currentIdx = num;
    }

    prev.addEventListener('click', function () {
      /*첫 번째 슬라이드로 표시 됐을때는 
      이전 버튼 눌러도 아무런 반응 없게 하기 위해 
      currentIdx !==0일때만 moveSlide 함수 불러옴 */

      if (currentIdx !== 0) moveSlide(currentIdx - 1);
    });

    next.addEventListener('click', function () {
      /* 마지막 슬라이드로 표시 됐을때는 
      다음 버튼 눌러도 아무런 반응 없게 하기 위해
      currentIdx !==slideCount - 1 일때만 
      moveSlide 함수 불러옴 */
      if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
      }
    });
  }

