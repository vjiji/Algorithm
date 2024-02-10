/*
문제 설명
머쓱이는 큰 종이를 1 x 1 크기 로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

스크린샷 2022-07-25 오후 4.49.44.png

정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < M, N < 100
종이를 겹쳐서 자를 수 없습니다.
*/

// main start!

M = 2; // TC no.1
N = 2; // TC no.1
// M = 2;		// TC no.2
// N = 5;		// TC no.2
// M = 1;		// TC no.3
// N = 1;		// TC no.3
console.log(solution(M, N));

// main end!

function solution(M, N) {
  return M > N ? M - 1 + (M * N - 1) : N - 1 + N * (M - 1);
}
