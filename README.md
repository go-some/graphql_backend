# crowlnews graphql server

## Usage
그래프큐엘 플레이그라운드에 접속 후 쿼리 입력
- 기본적으로는 우측 메뉴를 통해 스키마 확인 가능
- Schema 클릭시 나오는 Query 형식으로 쿼리 호출이 가능하다.
```
query {
  news(filter:"{\"origin\":\"Reuters\"}", skip: 0, limit:3){
    title
  }
}
```

## Query
- filter ; 쌍따옴표 안에 제이슨 형식의 필터를 입력해서 전달. 원하지 않을 경우 "{}" 만 전달.
- skip ; 데이터를 몇 번째 부터 가져올지 설정
- limit ; skip 으로 부터 몇 개를 가져올지 설정

## Select
- 쿼리 작성 후 { } 안에 어떤 필드를 가져올지 반드시 명시 해야한다.
- Schema에 나와 있는 필드들을 나열 할 수 있고, 원하는 것만 적으면 된다.
