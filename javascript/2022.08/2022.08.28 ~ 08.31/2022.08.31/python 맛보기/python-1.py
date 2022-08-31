pokemon_list = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀']
# python에서는 키워드 없이 배열을 초기화 할 수 있다.
# python 은 배열을 list라고 칭한다.

print(type(pokemon_list))
# print() '함수'는  REPL 환경에서 원하는 데이터를 출력 할 수 있는 방식이다.
# type() '함수'는 해당 데이터의 '타입'을 검사 할 수 있다.

for index in pokemon_list:
  print(index)

  # list(배열)을 순회(loop)하는 작성법(syntax)은 위와 같다.
  # for 매개변수 in 배열이름: <-- 세미콜론이 아닌 콜론(:)이 명령을 종료하는 python 작성법
  #print() 부분이 실행부 영역이다.
  # 들여쓰기(indent)를 4칸 하는 것 자체가 작성법이므로 엄격하게 준수하여야 한다.

  # 실행방법
  # python 파일명

