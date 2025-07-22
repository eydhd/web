<template>
  <Tuo :data="someData"></Tuo>
  <Return></Return>
  <div class="con">
    <div class="come"></div>
    <div class="left-tree-btn">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>

    <!-- 评论输入区 -->
    <div class="com">
      <input
        type="text"
        placeholder="  请输入评论内容"
        v-model="newComment"
        @keyup.enter="addComment"
      />
      <button @click="addComment">提交</button>
    </div>

    <!-- 评论显示区域 -->
    <div class="comment-list">
      <h3>评论区 ({{ comments.length }})</h3>
      <div
        class="comment-item"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <div class="comment-header">
          <span class="user-avatar">{{ comment.author.charAt(0) }}</span>
          <span class="user-name">{{ comment.author }}</span>
          <span class="comment-time">{{ formatTime(comment.time) }}</span>
        </div>
        <div class="comment-content">{{ comment.content }}</div>
        <div class="comment-actions">
          <button class="like-btn" @click="toggleLike(index)">
            {{ comment.liked ? "已点赞" : "点赞" }} {{ comment.likeCount }}
          </button>
          <button class="reply-btn" @click="showReply(index)">回复</button>

          <!-- 回复输入框 -->
          <div class="reply-input" v-if="comment.showReply">
            <input
              type="text"
              placeholder="输入回复内容..."
              v-model="comment.replyContent"
            />
            <button @click="addReply(index)">发送</button>
          </div>

          <!-- 回复列表 -->
          <div class="replies" v-if="comment.replies.length">
            <div
              class="reply-item"
              v-for="(reply, rIndex) in comment.replies"
              :key="rIndex"
            >
              <span class="reply-author">{{ reply.author }}：</span>
              <span class="reply-content">{{ reply.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./scss/ibex.scss";
import as from "../../../utils/Stabilization";
import Tuo from "@/components/tuo.vue";
import Return from "@/components/return.vue";

export default {
  data() {
    return {
      msg: "Welcome to the About Page",
      someData: "评论区",
      newComment: "",
      comments: [
        // 示例评论数据
        {
          author: "用户1",
          content: "这是一条示例评论",
          time: new Date().getTime() - 3600000,
          likeCount: 2,
          liked: false,
          showReply: false,
          replyContent: "",
          replies: [{ author: "用户2", content: "这是一条回复" }],
        },
      ],
    };
  },
  components: {
    Tuo,
    Return,
  },
  methods: {
    // 添加评论
    addComment() {
      if (!this.newComment.trim()) return;

      this.comments.unshift({
        author: "当前用户",
        content: this.newComment,
        time: new Date().getTime(),
        likeCount: 0,
        liked: false,
        showReply: false,
        replyContent: "",
        replies: [],
      });

      this.newComment = "";
    },

    // 切换点赞状态
    toggleLike(index) {
      const comment = this.comments[index];
      if (comment.liked) {
        comment.likeCount--;
      } else {
        comment.likeCount++;
      }
      comment.liked = !comment.liked;
    },

    // 显示/隐藏回复框
    showReply(index) {
      this.comments[index].showReply = !this.comments[index].showReply;
    },

    // 添加回复
    addReply(index) {
      const comment = this.comments[index];
      if (!comment.replyContent.trim()) return;

      comment.replies.push({
        author: "当前用户",
        content: comment.replyContent,
      });

      comment.replyContent = "";
      comment.showReply = false;
    },

    // 格式化时间
    formatTime(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
  },
};
</script>
