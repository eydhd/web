import axios from "axios";

// 评论类型定义
export interface Comment {
  id: number;
  content: string;
  nickname?: string;
  avatar?: string;
  createdAt: string;
}

// 评论列表响应类型
export interface CommentListResponse {
  data: Comment[];
  total: number;
  page: number;
  pageSize: number;
}

// 评论请求类型
export interface CommentRequest {
  content: string;
  nickname?: string;
  userId?: number;
}

// 获取评论列表
export const fetchComments = async (
  page: number = 1,
  pageSize: number = 10
) => {
  const response = await axios.get<CommentListResponse>("/api/Comment", {
    params: {
      page,
      pageSize,
    },
  });
  return response.data;
};

// 提交评论
export const submitComment = async (data: CommentRequest) => {
  await axios.post("/api/Comment", data);
};
