# 🌿 Visit Jeju — 제주 관광정보 홈페이지 리뉴얼

> **제주의 매력을 더 가까이, 여행을 더 편리하게**
> 
> 제주도의 다양한 관광 정보와 여행 콘텐츠를 쉽고 편리하게 탐색할 수 있도록 제작한 비짓제주 홈페이지 리뉴얼 프로젝트입니다.
> PC, 태블릿, 모바일 등 다양한 기기 환경에 대응하는 반응형 웹을 구현하여 화면 크기에 관계없이 일관된 사용자 경험을 제공하고자 했습니다.

🔗 [Visit Jeju 웹사이트 바로가기](https://seoyeonkang12.github.io/visit_jeju/)

## 📌 프로젝트 개요

Visit Jeju는 제주도의 관광 정보와 여행 콘텐츠를 직관적으로 탐색할 수 있도록 기획한 홈페이지 리뉴얼 프로젝트입니다.
기존 사이트의 정보 구조와 디자인을 분석하고, 콘텐츠의 시각적 전달력을 높이는 동시에 다양한 디바이스에 최적화된 반응형 레이아웃을 구현했습니다.

- **프로젝트 유형 :** 팀 기획 · 개인 개발
- **개발 기간 :** 2026.07 ~ 2026.08 (4주)
- **담당 역할 :** 기획(자료조사, UI 디자인), 퍼블리싱, 인터랙션 구현
- **작업 환경 :** PC · 태블릿 · 모바일 반응형 웹
- **주요 기술 :** HTML5, SCSS, JavaScript, jQuery

## 🛠️ 기술 스택

- **Markup :** HTML5
- **Styling :** SCSS
- **Interaction :** JavaScript, jQuery
- **Slider :** Swiper

## 🎯 프로젝트 목표

- 제주 관광 정보를 직관적으로 탐색할 수 있도록 정보 접근성 개선
- 디바이스별 환경에 대응하는 반응형 레이아웃 구현
- 콘텐츠 특성에 맞는 인터랙션으로 정보 탐색 편의성 향상

## ✨ 주요 기능

### 1. 반응형 웹 구현

- PC·태블릿·모바일 환경에 맞춘 레이아웃 구성
- 디바이스별 콘텐츠 배치 및 가독성 최적화

<!-- PC·태블릿·모바일 화면 캡처 이미지 삽입 -->

### 2. AI 추천 콘텐츠 레이아웃

- 모바일 환경에 맞춘 AI 추천 콘텐츠 레이아웃 재구성
- 화면 크기에 따른 콘텐츠 구조 전환

<!-- PC·태블릿과 모바일 AI 추천 화면 비교 이미지 삽입 -->

### 3. 오름길 코스 아코디언 UI

- 코스 선택 시 해당 지도 영역이 펼쳐지는 인터랙션 구현
- 모바일 화면 공간을 고려한 선택형 콘텐츠 구성

<!-- 코스 선택 전후 동작 GIF 삽입 -->

### 4. 콘텐츠 인터랙션

- 탭 선택에 따른 콘텐츠 전환
- Swiper 자동 슬라이드 및 페이지네이션
- `IntersectionObserver`를 활용한 스크롤 진입 애니메이션 구현

<!-- 탭 전환 및 슬라이드 동작 GIF 삽입 -->

## 💻 핵심 코드 구현

### 1. 반응형 콘텐츠 레이아웃

디바이스별 사용 환경에 맞춰 모바일과 태블릿·PC의 콘텐츠 구조를 분리하고, 화면 너비에 따른 레이아웃 전환을 구현했습니다.

**💡 셀프 코드 리뷰**

- 미디어 쿼리로 화면별 콘텐츠 구조 전환
- 디바이스별 레이아웃 구성
- PC 이미지 호버 확대 효과 적용

~~~css
.ai_mobile {
  display: block;
}

.ai_tablet {
  display: none;
}

/* tablet: 601px 이상 */
@media all and (min-width: 601px) {
  .ai_mobile {
    display: none;
  }

  .ai_tablet {
    display: block;
  }
}

/* PC: 1025px 이상 */
@media all and (min-width: 1025px) {
  .ai_tablet {
    .tab_sheet {
      .ai {
        &:hover {
          .img_box {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
~~~

### 2. 오름길 코스 아코디언 UI

코스 선택 시 해당 코스의 지도 영역이 펼쳐지도록 구현했습니다.

**💡 셀프 코드 리뷰**

- `:checked`로 선택한 코스의 지도 표시
- 코스별 활성화 스타일 적용
- HTML과 CSS만으로 아코디언 구현

~~~css
/* 코스별 지도 표시 */
#chk_map01:checked ~ .path .course_box .sheet_box .sheet01,
#chk_map02:checked ~ .path .course_box .sheet_box .sheet02,
#chk_map03:checked ~ .path .course_box .sheet_box .sheet03,
#chk_map04:checked ~ .path .course_box .sheet_box .sheet04 {
  display: flex;
}

/* 기본 지도 숨김 */
#chk_map01 ~ .path .course_box .sheet_box .sheet01,
#chk_map02 ~ .path .course_box .sheet_box .sheet02,
#chk_map03 ~ .path .course_box .sheet_box .sheet03,
#chk_map04 ~ .path .course_box .sheet_box .sheet04 {
  display: none;
}
~~~

### 3. 탭 전환 및 스크롤 애니메이션

탭 선택에 따라 해당 콘텐츠가 활성화되도록 구현하고, 콘텐츠가 화면에 진입할 때 스크롤 애니메이션이 실행되도록 구성했습니다.

**💡 셀프 코드 리뷰**

- 클릭 이벤트로 탭 전환
- classList로 활성화 상태 관리
- `IntersectionObserver`로 스크롤 애니메이션 구현

<!-- IntersectionObserver의 threshold: 0.5는 관찰 대상 요소의 약 50%가 뷰포트에 들어왔을 때 콜백이 실행되도록 설정한 값 -->

~~~javascript
tabs.forEach((tab, index) => {
  tab.addEventListener('click', function() {
    tabs.forEach(item => item.classList.remove('on_tab'));
    sheets.forEach(item => item.classList.remove('on_sheet'));
  
    tab.classList.add('on_tab');
    sheets[index].classList.add('on_sheet');
  });
}); //ai_mobile_tablet_tab
~~~
~~~javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold: 0.5});
picks.forEach(pick => {
  observer.observe(pick);
}) // pick_slide
~~~

## 📂 프로젝트 폴더 구조

```text
visit_jeju/
├── css/
│   ├── header.scss
│   ├── login.scss
│   ├── main.scss
│   ├── sub.scss
├── images/
├── js/
│   ├── header.js
│   ├── main.js
│   ├── sub.js
├── sub/
│   ├── login.html
│   ├── sub.html
└── index.html
```

## 📝 프로젝트 회고

이번 프로젝트에서는 기획한 디자인을 실제 웹 화면으로 구현하며 반응형 웹 개발 과정을 경험했습니다. 특히 디바이스별 콘텐츠 구조를 다르게 구성하고, CSS 기반 아코디언 UI와 JavaScript를 활용한 탭 전환 및 스크롤 애니메이션을 구현하며 기능에 적합한 개발 방식을 고민했습니다.

이를 통해 화면의 시각적인 완성도뿐 아니라 콘텐츠의 특성과 사용 환경에 따라 적절한 구현 방식을 선택하는 것이 중요하다는 점을 배웠습니다.
