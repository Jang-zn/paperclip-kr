<p align="center">
  <img src="doc/assets/header.png" alt="Paperclip — runs your business" width="720" />
</p>

<p align="center">
  <a href="#빠른-시작"><strong>빠른 시작</strong></a> &middot;
  <a href="https://paperclip.ing/docs"><strong>Docs</strong></a> &middot;
  <a href="https://github.com/paperclipai/paperclip"><strong>GitHub (원본)</strong></a> &middot;
  <a href="https://discord.gg/m4HZY7xNG3"><strong>Discord</strong></a>
</p>

<p align="center">
  <a href="https://github.com/paperclipai/paperclip/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT License" /></a>
  <a href="https://github.com/Jang-zn/paperclip-kr/stargazers"><img src="https://img.shields.io/github/stars/Jang-zn/paperclip-kr?style=flat" alt="Stars" /></a>
</p>

<br/>

> **이 저장소는 [paperclipai/paperclip](https://github.com/paperclipai/paperclip)의 한국어 포크입니다.**
> UI 텍스트와 AI 에이전트 응답이 한국어로 제공됩니다.

<br/>

<div align="center">
  <video src="https://github.com/user-attachments/assets/773bdfb2-6d1e-4e30-8c5f-3487d5b70c8f" width="600" controls></video>
</div>

<br/>

## Paperclip이란?

# 사람 없이 돌아가는 회사를 위한 오픈소스 오케스트레이션

**OpenClaw이 _직원_이라면, Paperclip은 _회사_입니다**

Paperclip은 AI 에이전트 팀을 조율해 비즈니스를 운영하는 Node.js 서버 + React UI입니다. 에이전트를 연결하고, 목표를 지정하고, 하나의 대시보드에서 작업과 비용을 추적하세요.

겉으로는 태스크 매니저처럼 보이지만, 내부에는 조직도, 예산, 거버넌스, 목표 정렬, 에이전트 조율이 갖춰져 있습니다.

**pull request가 아닌 비즈니스 목표를 관리하세요.**

|        | 단계            | 예시                                                               |
| ------ | --------------- | ------------------------------------------------------------------ |
| **01** | 목표 설정       | _"AI 메모 앱으로 MRR $1M 달성"_                                    |
| **02** | 팀 구성         | CEO, CTO, 엔지니어, 디자이너, 마케터 — 어떤 봇, 어떤 프로바이더든 |
| **03** | 승인 후 실행    | 전략 검토, 예산 설정, 실행. 대시보드에서 모니터링.                 |

<br/>

> **출시 예정: Clipmart** — 클릭 한 번으로 완성된 회사를 다운로드하고 실행하세요. 조직 구조, 에이전트 설정, 스킬이 포함된 회사 템플릿을 탐색하고 몇 초 만에 Paperclip에 가져오세요.

<br/>

<div align="center">
<table>
  <tr>
    <td align="center"><strong>연동<br/>지원</strong></td>
    <td align="center"><img src="doc/assets/logos/openclaw.svg" width="32" alt="OpenClaw" /><br/><sub>OpenClaw</sub></td>
    <td align="center"><img src="doc/assets/logos/claude.svg" width="32" alt="Claude" /><br/><sub>Claude Code</sub></td>
    <td align="center"><img src="doc/assets/logos/codex.svg" width="32" alt="Codex" /><br/><sub>Codex</sub></td>
    <td align="center"><img src="doc/assets/logos/cursor.svg" width="32" alt="Cursor" /><br/><sub>Cursor</sub></td>
    <td align="center"><img src="doc/assets/logos/bash.svg" width="32" alt="Bash" /><br/><sub>Bash</sub></td>
    <td align="center"><img src="doc/assets/logos/http.svg" width="32" alt="HTTP" /><br/><sub>HTTP</sub></td>
  </tr>
</table>

<em>하트비트를 받을 수 있다면, 채용된 겁니다.</em>

</div>

<br/>

## 이런 분께 맞습니다

- ✅ **자율 AI 회사**를 만들고 싶은 분
- ✅ 하나의 목표를 향해 **여러 에이전트(OpenClaw, Codex, Claude, Cursor)를 조율**하고 싶은 분
- ✅ **Claude Code 터미널을 20개** 열어두고 뭘 하는지 파악이 안 되는 분
- ✅ 에이전트를 **24/7 자율 실행**하되, 작업을 감사하고 개입할 수 있길 원하는 분
- ✅ **비용을 모니터링**하고 예산을 적용하고 싶은 분
- ✅ **태스크 매니저처럼** 에이전트를 관리하고 싶은 분
- ✅ **모바일에서도** 자율 비즈니스를 관리하고 싶은 분

<br/>

## 기능

<table>
<tr>
<td align="center" width="33%">
<h3>🔌 에이전트 자유 연결</h3>
어떤 에이전트든, 어떤 런타임이든 하나의 조직도로. 하트비트를 받을 수 있다면 채용된 겁니다.
</td>
<td align="center" width="33%">
<h3>🎯 목표 정렬</h3>
모든 태스크는 회사 미션까지 추적됩니다. 에이전트는 <em>무엇을</em> 해야 하는지, <em>왜</em> 하는지 압니다.
</td>
<td align="center" width="33%">
<h3>💓 하트비트</h3>
에이전트는 일정에 따라 깨어나 작업을 확인하고 행동합니다. 위임은 조직도를 따라 흐릅니다.
</td>
</tr>
<tr>
<td align="center">
<h3>💰 비용 관리</h3>
에이전트별 월간 예산. 한도에 도달하면 멈춥니다. 예산 초과 없음.
</td>
<td align="center">
<h3>🏢 멀티 컴퍼니</h3>
하나의 배포, 여러 회사. 완전한 데이터 격리. 포트폴리오를 하나의 컨트롤 플레인에서 관리.
</td>
<td align="center">
<h3>🎫 티켓 시스템</h3>
모든 대화 추적. 모든 결정 설명. 전체 도구 호출 추적과 불변 감사 로그.
</td>
</tr>
<tr>
<td align="center">
<h3>🛡️ 거버넌스</h3>
당신이 이사회입니다. 채용 승인, 전략 수정, 에이전트 일시정지 또는 종료 — 언제든지.
</td>
<td align="center">
<h3>📊 조직도</h3>
계층 구조, 역할, 보고 라인. 에이전트에게는 상사, 직책, 직무 설명이 있습니다.
</td>
<td align="center">
<h3>📱 모바일 지원</h3>
어디서든 자율 비즈니스를 모니터링하고 관리하세요.
</td>
</tr>
</table>

<br/>

## Paperclip이 해결하는 문제

| Paperclip 없이                                                                                                        | Paperclip과 함께                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ❌ Claude Code 탭 20개를 열어두고 어느 게 뭘 하는지 파악이 안 됩니다. 재부팅하면 모든 게 사라집니다.                | ✅ 태스크는 티켓 기반, 대화는 스레드로 정리, 세션은 재부팅에도 유지됩니다.                                                   |
| ❌ 봇에게 지금 뭘 하는지 상기시키려고 여러 곳에서 직접 컨텍스트를 모읍니다.                                         | ✅ 컨텍스트는 태스크에서 프로젝트, 회사 목표까지 자동으로 흐릅니다. 에이전트는 항상 무엇을, 왜 해야 하는지 압니다.          |
| ❌ 에이전트 설정 폴더가 뒤죽박죽이고 태스크 관리, 소통, 에이전트 간 조율을 직접 만들어야 합니다.                    | ✅ Paperclip이 조직도, 티켓팅, 위임, 거버넌스를 제공합니다. 스크립트 더미가 아닌 회사를 운영하세요.                          |
| ❌ 루프가 폭주해 수백 달러의 토큰을 낭비하고 알아채기도 전에 할당량을 소진합니다.                                    | ✅ 비용 추적으로 토큰 예산을 파악하고 한도 초과 시 에이전트를 제어합니다.                                                    |
| ❌ 반복 작업(고객 지원, SNS, 리포트)이 있는데 매번 직접 수동으로 실행해야 합니다.                                    | ✅ 하트비트가 일정에 따라 정기 작업을 처리합니다.                                                                             |
| ❌ 아이디어가 생기면 repo를 찾아 Claude Code를 켜고 탭을 열고 계속 들여다봐야 합니다.                                | ✅ Paperclip에 태스크를 추가하면 코딩 에이전트가 완료될 때까지 알아서 합니다.                                                |

<br/>

## Paperclip이 특별한 이유

Paperclip은 어려운 오케스트레이션 세부사항을 올바르게 처리합니다.

|                                   |                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **원자적 실행**                   | 태스크 체크아웃과 예산 집행이 원자적으로 처리되어 중복 작업과 예산 초과가 없습니다.                          |
| **에이전트 상태 유지**            | 에이전트는 하트비트 간에 같은 태스크 컨텍스트를 유지하며 처음부터 다시 시작하지 않습니다.                    |
| **런타임 스킬 주입**              | 에이전트는 재학습 없이 런타임에 Paperclip 워크플로우와 프로젝트 컨텍스트를 학습할 수 있습니다.               |
| **롤백이 가능한 거버넌스**        | 승인 게이트가 적용되고, 설정 변경은 버전 관리되며, 잘못된 변경은 안전하게 롤백됩니다.                        |
| **목표 인식 실행**                | 태스크에 전체 목표 계보가 포함되어 에이전트는 제목뿐 아니라 "왜"를 일관되게 파악합니다.                      |
| **이식 가능한 회사 템플릿**       | 시크릿 스크러빙과 충돌 처리를 포함해 조직, 에이전트, 스킬을 내보내고 가져올 수 있습니다.                    |
| **완전한 멀티 컴퍼니 격리**       | 모든 엔티티는 회사 범위로 지정되므로 하나의 배포로 별도 데이터와 감사 추적이 있는 여러 회사를 운영합니다.    |

<br/>

## Paperclip이 아닌 것

|                              |                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **챗봇이 아닙니다**          | 에이전트에게는 채팅창이 아닌 직무가 있습니다.                                                                        |
| **에이전트 프레임워크가 아닙니다** | 에이전트를 어떻게 만드는지 알려주지 않습니다. 에이전트로 구성된 회사를 어떻게 운영하는지 알려줍니다.           |
| **워크플로우 빌더가 아닙니다** | 드래그앤드롭 파이프라인이 없습니다. Paperclip은 조직도, 목표, 예산, 거버넌스를 갖춘 회사를 모델링합니다.          |
| **프롬프트 매니저가 아닙니다** | 에이전트는 자체 프롬프트, 모델, 런타임을 가져옵니다. Paperclip은 그들이 일하는 조직을 관리합니다.                 |
| **단일 에이전트 도구가 아닙니다** | 팀을 위한 것입니다. 에이전트가 하나라면 Paperclip이 필요 없을 수 있습니다. 스물이라면 — 반드시 필요합니다.    |
| **코드 리뷰 도구가 아닙니다** | Paperclip은 pull request가 아닌 작업을 조율합니다. 리뷰 프로세스는 직접 가져오세요.                               |

<br/>

## 빠른 시작

오픈소스. 셀프 호스팅. Paperclip 계정 불필요.

```bash
git clone https://github.com/Jang-zn/paperclip-kr.git
cd paperclip-kr
pnpm install
pnpm dev
```

API 서버가 `http://localhost:3100`에서 시작됩니다. PostgreSQL 데이터베이스는 자동으로 생성되며 별도 설정이 필요 없습니다.

> **요구사항:** Node.js 20+, pnpm 9.15+

<br/>

## 자주 묻는 질문

**일반적인 설정은 어떻게 생겼나요?**
로컬에서는 단일 Node.js 프로세스가 내장 Postgres와 로컬 파일 스토리지를 관리합니다. 프로덕션에서는 자체 Postgres를 연결하고 원하는 방식으로 배포하세요. 프로젝트, 에이전트, 목표를 설정하면 에이전트가 나머지를 처리합니다.

1인 창업자라면 Tailscale을 사용해 외출 중에도 Paperclip에 접근할 수 있습니다. 이후 필요할 때 Vercel 등에 배포하면 됩니다.

**여러 회사를 동시에 운영할 수 있나요?**
네. 하나의 배포로 완전한 데이터 격리를 갖춘 무제한 회사를 운영할 수 있습니다.

**Paperclip은 OpenClaw이나 Claude Code 같은 에이전트와 어떻게 다른가요?**
Paperclip은 그 에이전트들을 _사용_합니다. 조직도, 예산, 목표, 거버넌스, 책임 구조를 갖춘 회사로 조율합니다.

**OpenClaw을 Asana나 Trello에 연결하는 것과 무엇이 다른가요?**
에이전트 오케스트레이션에는 작업 체크아웃 조율, 세션 유지, 비용 모니터링, 거버넌스 수립 등 미묘한 부분이 있습니다. Paperclip이 이 모든 걸 대신 처리합니다.

(자체 티켓 시스템 연동은 로드맵에 있습니다)

**에이전트는 계속 실행되나요?**
기본적으로 에이전트는 예약된 하트비트와 이벤트 기반 트리거(태스크 배정, @멘션)로 실행됩니다. OpenClaw 같은 지속형 에이전트도 연결할 수 있습니다. 에이전트를 가져오면 Paperclip이 조율합니다.

<br/>

## 개발

```bash
pnpm dev              # 전체 개발 서버 (API + UI, watch 모드)
pnpm dev:once         # 전체 개발 서버 (watch 없음)
pnpm dev:server       # 서버만 실행
pnpm build            # 전체 빌드
pnpm typecheck        # 타입 체크
pnpm test:run         # 테스트 실행
pnpm db:generate      # DB 마이그레이션 생성
pnpm db:migrate       # 마이그레이션 적용
```

전체 개발 가이드는 [doc/DEVELOPING.md](doc/DEVELOPING.md)를 참고하세요.

<br/>

## 로드맵

- ✅ 플러그인 시스템 (지식 베이스, 커스텀 트레이싱, 큐 등)
- ✅ OpenClaw / claw 스타일 에이전트 직원
- ✅ companies.sh - 전체 조직 내보내기/가져오기
- ✅ 간편한 AGENTS.md 설정
- ✅ Skills Manager
- ✅ 예약 루틴
- ✅ 향상된 예산 관리
- ⚪ Artifacts & Deployments
- ⚪ CEO Chat
- ⚪ MAXIMIZER MODE
- ⚪ 다중 사용자 지원
- ⚪ 클라우드 / 샌드박스 에이전트 (Cursor / e2b 에이전트)
- ⚪ 클라우드 배포
- ⚪ 데스크탑 앱

<br/>

## 커뮤니티 & 플러그인

플러그인 등은 [awesome-paperclip](https://github.com/gsxdsm/awesome-paperclip)에서 찾아보세요.

## 텔레메트리

Paperclip은 제품 개선을 위해 익명 사용 텔레메트리를 수집합니다. 개인 정보, 이슈 내용, 프롬프트, 파일 경로, 시크릿은 절대 수집되지 않습니다. 비공개 저장소 참조는 설치별 salt로 해시된 후 전송됩니다.

텔레메트리는 **기본적으로 활성화**되어 있으며 다음 방법으로 비활성화할 수 있습니다:

| 방법 | 설정 |
|---|---|
| 환경 변수 | `PAPERCLIP_TELEMETRY_DISABLED=1` |
| 표준 규칙 | `DO_NOT_TRACK=1` |
| CI 환경 | `CI=true`이면 자동으로 비활성화 |
| 설정 파일 | Paperclip 설정에서 `telemetry.enabled: false` |

## 기여

기여를 환영합니다. 자세한 내용은 [기여 가이드](CONTRIBUTING.md)를 참고하세요.

<br/>

## 커뮤니티

- [Discord](https://discord.gg/m4HZY7xNG3) — 커뮤니티 참여
- [GitHub Issues](https://github.com/paperclipai/paperclip/issues) — 버그 및 기능 요청
- [GitHub Discussions](https://github.com/paperclipai/paperclip/discussions) — 아이디어 및 RFC

<br/>

## 라이선스

MIT &copy; 2026 Paperclip

## Star History

[![Star History Chart](https://api.star-history.com/image?repos=Jang-zn/paperclip-kr&type=date&legend=top-left)](https://www.star-history.com/?repos=Jang-zn%2Fpaperclip-kr&type=date&legend=top-left)

<br/>

---

<p align="center">
  <img src="doc/assets/footer.jpg" alt="" width="720" />
</p>

<p align="center">
  <sub>MIT 오픈소스. 에이전트를 돌보는 게 아니라 회사를 운영하고 싶은 사람들을 위해 만들어졌습니다.</sub>
</p>
