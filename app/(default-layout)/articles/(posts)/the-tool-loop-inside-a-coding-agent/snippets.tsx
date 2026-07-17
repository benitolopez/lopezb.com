const snippets = [
  {
    snippet: `
\`\`\`ts {4} 
history.push(userMessage)

while (true) {
  const response = await model(history, tools)
  history.push(response)

  if (response.toolCalls.length === 0) return response.text

  for (const call of response.toolCalls) {
    const result = await execute(call)
    history.push(result)
  }
}
\`\`\`
`,
  },

  {
    snippet: `
\`\`\`ts {4} 
interface Tool {
  name: string
  description: string
  parameters: Record<string, unknown>
}
\`\`\`
`,
  },

  {
    snippet: `
\`\`\`text {4} 
{
  "name": "read",
  "arguments": "{\"path\":\"packages/engine/src/index.ts\",\"offset\":1,\"limit\":80}",
  "call_id": "call_123"
}
\`\`\`
`,
  },
];

export default snippets;
