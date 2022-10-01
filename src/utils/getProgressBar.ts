/* 규칙에 따라 수를 반복해서 추가 */
const addRepeatNum = (totalStage: number[], num: number, quotient: number, remainder: number) => {
    for (let i = 0; i < quotient; i++) {
        totalStage.push(num);

        if (i === quotient - 1 && num <= remainder) {
            totalStage.push(num);
        }
    }
};

/* 진행단계 배열 생성 - 4 페이지 미만 */
const setProgressUnderFour = (page: number, totalStage: number[]) => {
    if (page === 1) {
        totalStage.push(4);
    } else if (page === 2) {
        totalStage.push(1, 4);
    } else if (page === 3) {
        totalStage.push(1, 3, 4);
    }
}

/* 진행단계 배열 생성 - 4 페이지 이상 */
const setProgressManyFour = (totalStage: number[], quotient: number, remainder: number) => {
    const stage: number[] = [1, 2, 3, 4];
    stage.forEach((num: number) => addRepeatNum(totalStage, num, quotient, remainder));
}

/* 각 페이지에 따른 진행단계를 배열로 반환 */
export const getProgressArray = (page: number): number[] => {
    const totalStage: number[] = [];
    const quotient: number = Math.floor(page / 4);
    const remainder: number = page % 4;

    if (page < 4) {
        setProgressUnderFour(page, totalStage)
    } else {
        setProgressManyFour(totalStage, quotient, remainder)
    }

    return totalStage;
};