// 2.여기 새로한부분 싹다

export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

  // divImg -> slides 바꿧다 -> slideShow로 바꾸니깐 사진은 나오긴하는데...
  // 이렇게하니 span이 밖으로나가네..
  // slideshow를 어디안으로 멀집어넣을껀지 생각
  const slidesImageList = document.querySelector(".slides");
  slidesImageList.innerHTML = movies

    // 이부분이 왜안될까..? 불러와서 쫘라락..
    // movie로하니 사진이 안나오고 element로 하니 사진이나온다.
    // 근데 나는 이미지를 하나의 div안에서 나오게하고싶은데 ul에 나오는거같네
    .map(
      // div class에 divImg추가를 해봣다 -> slides도 추가함
      // li태그로 ul태그의 직속자식이 되어야된다.
      (element) => `
      
        <li><img class = "movieImg" src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="img">
        <p class = "title">${element.original_title}</p>
        </li>
        
        `
    )
    .join(" ");

  // slidesImageList.addEventListener("clik" , handleClickCard);

  // function handleClickCard(event){

  // }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDUyMTZiMDM2NmIzMzM2NmNkNjNhZDlmMmY3M2Q1ZCIsInN1YiI6IjY0NzA4OGI5YzVhZGE1MDBkZWU2ZGE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBCFdvYiL8pkLL-igIfHPU7qUK0IHVsuskq25bvKNhI",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );

  if (!response.ok) {
    throw new Error(`HTTP error! : ${response.status}`);
  }
  console.log(response);

  const data = await response.json();
  console.log(data);
  return data.results;
}

// div 태그 안에서 클릭하면 handleClickCard라는 이벤트핸들러함수 실행하겠다.
// imageList.addEventListener("clik",handleClickCard);
