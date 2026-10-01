# SwarmCore

**Multi-Agent AI & Swarm Intelligence**

> Building the coordination layer for autonomous AI.

SwarmCore is an early-stage independent research initiative exploring how autonomous AI agents can collaborate, distribute tasks, verify decisions and act collectively across cloud and edge environments.

## Research areas

- Multi-Agent Coordination
- Swarm Intelligence
- Agent-to-Agent Communication
- Collective Verification
- Edge AI
- Autonomous Systems

## Status

**Research Phase — Experimental — Not yet a commercial platform**

## Contact

aiagentquantum@gmail.com

## Local development

```bash
npm install
npm run dev
```

The project is designed for deployment on Vercel.


## SwarmCore Bounty Hunter — Stage 1

The first working integration targets **Superteam Earn agent-eligible listings**.

Current flow:

`Superteam Agent API → SwarmCore scanner → normalized listings`

Stage 1 deliberately does **not**:
- use a wallet or private key;
- sign transactions;
- submit bounties automatically;
- spend entry fees.

### Configure the Superteam agent

1. Register an agent at the official Superteam Earn Agent interface.
2. Keep the returned `apiKey` private.
3. Copy `.env.example` to `.env.local`.
4. Set:

```env
SUPERTEAM_AGENT_API_KEY=sk_...
```

5. Start the app:

```bash
npm install
npm run dev
```

6. Test:

```
http://localhost:3000/api/bounties?type=bounty&take=20
```

The next stage will add programmatic filtering for crypto/Web3 bounties and **$0 entry cost**, before introducing the LLM layer.
