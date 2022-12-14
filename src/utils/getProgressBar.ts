/* 규칙에 따라 수를 반복해서 추가 */
const addRepeatNum = (progress: number[], num: number, page: number) => {
    const quotient: number = Math.floor(page / 4);
    const remainder: number = page % 4;

    for (let i = 0; i < quotient; i++) {
        progress.push(num);

        if (i === quotient - 1 && num <= remainder) {
            progress.push(num);
        }
    }
};

/* 진행단계 배열 생성 - 4 페이지 미만 */
const setProgressUnderFour = (page: number, progress: number[]) => {
    if (page === 1) {
        progress.push(4);
    } else if (page === 2) {
        progress.push(1, 4);
    } else if (page === 3) {
        progress.push(1, 3, 4);
    }
};

/* 진행단계 배열 생성 - 4 페이지 이상 */
const setProgressManyFour = (page: number, progress: number[]) => {
    const stage: number[] = [1, 2, 3, 4];

    stage.forEach((num: number) => addRepeatNum(progress, num, page));
};

/* 각 페이지에 따른 진행단계를 배열로 반환 */
export const getProgressBar = (page: number): number[] => {
    const progress: number[] = [];

    if (page < 4) {
        setProgressUnderFour(page, progress);
    } else {
        setProgressManyFour(page, progress);
    }

    return progress;
};
