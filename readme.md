<p align="center"><img src="src/fe_test.gif" width="500" height="350" alt="preview"/></p>

### Skills
- react
- redux 
- redux-form
- styled-components
- lodash (debouncing에 적용)

### 구현한 기능
+ webpack으로 react 환경 설정
+ 각 필드별 오름차순, 내림차순 정렬됨 
+ 검색창으로 통합 검색됨(부분일치, 대소문자 구분x)
+ 각 데이터는 삭제 가능함
+ 새로운 나라 정보 추가 가능함
+ Redux로 모든 상태를 저장함
+ 쓰로틀링으로 무한 스크롤 적용함
+ 검색은 디바운싱 적용함
+ 입력하지 않은 값에 대한 validation구현


### 실행

- npm install
- npm start

### 폴더 folder

- modules: redux file 리덕스 파일
- components: presentational 컴포넌트 (UI)
- containers: container 컴포넌트 (데이터 처리)
- customHooks: 무한 스크롤 처리 함수, redux 데이터 처리 함수

### 폼 정보 form information

- AddForm: 나라 정보 추가 관련 폼
- SearchForm: 검색 폼 (lodash debounce 함수 활용)
- sortingForm: 정렬 버튼 폼

### 기능 function

#### 검색 search

- 중간 공백 문자를 무시하고 통합검색이 됩니다 (ex. 입력: korea( => 결과: korea (D...) 검색됨)
- 입력 도중 디바운스로 검색 필터링된 정보를 보여줍니다
- 엔터를 치면 최종 검색 결과를 보여주고 입력창을 지웁니다
- 아무것도 입력하지 않고 엔터를 치면 다시 전체 데이터를 보여줍니다

#### 삭제 delete

- 필터링된 데이터에서 삭제하면 전체 데이터에서도 삭제됩니다
- 전체 데이터에서도 그대로 삭제됩니다

#### 추가 add

- 아무것도 입력하지 않는 부분만 validation 검사 추가했습니다.
- 검색 필터링 된 상태에서 새로운 나라를 추가할 때 필터링 키워드에 해당하면 해당 정보를 볼 수 있습니다
- 검색 필터링 된 상태에서 새로운 나라를 추가할 때 필터링된 키워드에 해당하지 않으면 보이지 않습니다. 해당 키워드로 다시 검색하거나 전체 데이터에서 볼 수 있습니다.

#### 정렬 sort

- 국가 코드 정렬시 1 340 은 공백 삭제하고 1340으로 처리했습니다.
- 국가 코드 공백인 나라들은 0으로 처리했습니다.
