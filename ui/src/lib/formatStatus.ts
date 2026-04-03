const statusLabels: Record<string, string> = {
  // Issue statuses
  backlog: "백로그",
  todo: "할 일",
  in_progress: "진행 중",
  in_review: "검토 중",
  done: "완료",
  blocked: "차단됨",
  cancelled: "취소됨",
  // Agent statuses
  active: "활성",
  paused: "일시정지",
  error: "오류",
  // Approval statuses
  pending: "대기 중",
  approved: "승인됨",
  rejected: "거절됨",
  revision_requested: "수정 요청됨",
  // Run statuses
  running: "실행 중",
  succeeded: "성공",
  failed: "실패",
  timed_out: "시간초과",
  cancelled_by_user: "사용자 취소",
};

export function formatStatus(status: string): string {
  return statusLabels[status] ?? status.replace(/_/g, " ");
}
