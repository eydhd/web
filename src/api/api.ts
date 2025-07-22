import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

interface Comment {
  id: string;
  content: string;
  author: string;
  timestamp: string;
  [key: string]: any;
}

interface CommentInput {
  content: string;
  author: string;
  [key: string]: any;
}

interface CommentsResponse {
  data: Comment[];
  total: number;
  page: number;
  limit: number;
}

interface ApiError {
  message: string;
  status: number;
  details?: any;
}

export async function submitComment(comment: CommentInput): Promise<Comment> {
  try {
    const response: AxiosResponse<Comment> = await apiClient.post(
      "api/commentsinput",
      {
        ...comment,
        timestamp: new Date().toISOString(),
      }
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw {
      message: axiosError.response?.data?.message || "提交评论失败",
      status: axiosError.response?.status || 500,
      details: axiosError.response?.data?.details,
    };
  }
}

export async function getComments(
  page: number = 1,
  limit: number = 10,
  sort: "newest" | "oldest" = "newest"
): Promise<CommentsResponse> {
  try {
    const config: AxiosRequestConfig = {
      params: {
        page,
        limit,
        sort,
      },
    };

    const response: AxiosResponse<CommentsResponse> = await apiClient.get(
      "api/commentsoutput",
      config
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw {
      message: axiosError.response?.data?.message || "获取评论失败",
      status: axiosError.response?.status || 500,
      details: axiosError.response?.data?.details,
    };
  }
}
