import { Request, Response, NextFunction } from "express";
import rankService from "../services/rankService";

//todo 코드 스타일을 통일하는게 좋지 않을까요? 함수 표현식으로 통일하거나 클래스를 이용한 정적메서드 방식으로 통일하거나
// (현재 서버 아키텍쳐가 함수표현식을 사용한다는 전제하에 구현한 상태이고 어차피 정적메서드를 사용한다면 굳이 클래스를 사용할 필요가 있을까요?)

export const getUsersRankList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rankingChange = await rankService.getUsersRankList;
    res.json(rankingChange);
  } catch (error) {
    console.error("랭킹을 불러올 수 없습니다.", error);
    res.status(500).json({ error: "랭킹 변화 조회 오류" });
  }
};

export const getUserGapRank = async () => {
  const userGapRank = await rankService.getUserGapRank;
  return userGapRank;
};