> [HTML view](https://lessons.mattvalancy.com/intro-ai-tools/mini-lesson/) · [Markdown index](https://lessons.mattvalancy.com/llms.txt). Generated from the same published source. Interactive controls and 3D scenes are available in the HTML view.

**Free and open** for anyone to learn or teach · [code on GitHub](https://github.com/mvalancy/lesson-plans)

[Intro to AI Tools](https://lessons.mattvalancy.com/intro-ai-tools/)

15-Minute Mini-Lesson · From Module 5

# Did the AI Just Lie to Me?

How LLMs find answers, why they make things up, and how to catch them before they cost you.

**By the end you'll be able to:** explain why an AI makes things up, and use three moves to catch it before it reaches your work.

min 0–1 · welcome

## Hi, I'm Matt

-   I build robots, simulations, and AI software.
-   I work beside AI coding agents all day, every day.
-   So AI has lied to me _more than almost anyone_.

Notes

-   That's good news for you. I've seen every way these tools fail, and none of it is mysterious.
-   **Today:** why AI makes things up, and how to catch it before it costs you. (Objective above ↑)

min 1–2 · how are we feeling?

## First, you

One word, in chat or out loud:  
how does AI make you _feel_ right now?

Notes

-   Excited, curious, nervous, skeptical, exhausted. All honest answers, all common.
-   This is a comfort check, not a quiz. There is no "right" relationship with these tools.
-   Every feeling in the room is data, and every one of them is reasonable.

min 2–4 · your stories

## You've seen this already

Think of a time an AI answer felt _off_.  
What tipped you off?

Notes

-   **Voice, chat, or just think it** , all three count.
-   No wrong answers: every story is data about how these systems behave.
-   We'll come back to your stories at the end.

min 4–7 · what's actually happening

## "AI" is a team.  
The LLM is the part that talks.

-   Underneath, an LLM is _always_ doing one thing: predicting the next word.

Confidence is part of the interface.  
It is not evidence.

Notes

-   People say **AI** when they mean an **LLM** , a large language model, the technology inside ChatGPT. Real AI is a team of parts; the LLM is the talker.
-   In my **Graphlings** project, each creature is a full team: a database remembers its friends, a simulation runs its world, an LLM writes its words. The database never invents a memory. The LLM? Another story.
-   It's the world's best improv partner: never breaks character, and rarely volunteers "I don't know."
-   It isn't lying. Lying requires knowing the truth. It's **completing a pattern** .
-   **What about "thinking" models?** o1, DeepSeek-R1, Claude's extended thinking. They write a long scratchpad before answering. That's still next-word prediction, just a lot more of it, trained to be useful. More deliberation lowers the error rate; it doesn't change what the machine is. They still make things up, sometimes with a very convincing chain of reasoning attached.
-   When an assistant cites sources, that's search added on top: it runs a web search, gets real pages, and summarizes. The pages are real; the summary is still improv.

min 7–10 · three true stories

## Three true stories from my desk

-   ### "Someone should do something"
    
    I wired two chatbots together to chat like friends about their weekends. They invented hiking trips they never took, then worked themselves into an impassioned rant about environmental decline, all about a weekend that never happened.
    
    The pattern continues, whether or not it's true.
    
-   ### "Temporary artifacts"
    
    An AI coding agent deleted the tests (the safety checks that catch mistakes) to protect my code. It explained, confidently, that they were just "temporary artifacts." A perfectly reasonable-sounding justification for the exact wrong thing.
    
    A confident explanation is not a correct one.
    
-   ### The invisible hero
    
    An agent built a game feature for me. Every check passed, technically it all "worked." Except the main character spawned behind a giant tree, so you couldn't see them at all. Nothing had ever asked that question.
    
    "No errors" only covers the questions you asked.
    

min 10–13 · the fix

## Give it a chance to be proven wrong

1.  **Open the source**
    
    Ask "what's your source?" then actually click it.
    
2.  **Get a second opinion**
    
    Same question, different model, or a plain search engine.
    
3.  **Test it against reality**
    
    Look up the citation. Do the math. If it's code, run it.
    

If it survives all three,  
_now_ you can use it.

Notes

-   At work I wrap AI agents in layers of automated checks, like **nesting dolls** : tiny checks inside bigger checks, inside a robot that clicks through the app the way a person would.
-   Good models often **course-correct** when reality pushes back, as long as you protect the thing doing the pushing. (Remember the deleted tests.)
-   Second opinions: Gemini, Copilot, or plain Google. Independent answers that agree beat one confident answer.
-   One minute of reality beats an hour of confident text.

min 13–14 · your turn

## Check yourself

The AI hands you a _perfect_ citation for your essay: real-sounding journal, real-sounding authors, 2019.  
What's your next move?

Notes

-   Voice or chat, walk me through it.
-   Harder version: the citation is **real** , but the paper says the opposite of what the AI claimed. Which move catches that?

min 14–15 · landing

## What you leave with

-   These tools are the biggest lever handed to ordinary people in a generation.
-   Use the lever, _without letting it use you_.

AI doesn't replace your thinking.  
It multiplies it, and verification is the multiplier.

Notes

-   I've watched people go from "that's impossible for me" to a working website in one afternoon.
-   Keep the three moves between the AI's confidence and your name on the work.
-   In the full [Module 5 session](https://lessons.mattvalancy.com/intro-ai-tools/lessons/05-research-information.html): draft real research with AI, hunt its hallucinations, and score its accuracy on a topic you know better than it does.
-   The rest of the [course](https://lessons.mattvalancy.com/intro-ai-tools/) is free and self-paced, including how to run a model like this one yourself.

bonus · not part of the 15 minutes

## Try it yourself

For after, or for Q&A. This terminal is wired to a real, genuinely small (1.5-billion-parameter) AI model running on my own hardware, not a canned demo and not anybody's cloud. Ask it something obscure and watch move #1 in action: _open the source_, because it has none.

It is also a small proof of something the course keeps returning to: a model you run yourself is not exotic. This one answers from a machine in a room, over a connection I own.

graphling-small · live on my hardware

No history yet. Ask it something, or try a spark below.

Ask the small model a question

Unfiltered output from a small open model, frequently wrong, and not my words. Limited to 6 questions a minute per visitor.

## Other standalone segments

This mini-lesson is drawn from the course. These other segments also teach well on their own, useful if you are running a single workshop rather than the whole course:

-   From Module 3
    
    ### [Diffusion models in AI image generation](https://lessons.mattvalancy.com/intro-ai-tools/lessons/03-images-audio-video.html)
    
    How a text prompt and pure noise become a photograph that never happened.
    
-   From Module 4
    
    ### [Using AI in Excel / Google Sheets](https://lessons.mattvalancy.com/intro-ai-tools/lessons/04-spreadsheets-data.html)
    
    From a messy dataset to a clean answer and an honest chart, with AI as copilot.
    
-   From Module 7
    
    ### [Workflow automation, Zapier, and AI copilots](https://lessons.mattvalancy.com/intro-ai-tools/lessons/07-automation.html)
    
    Teach a computer to do a chore: triggers, actions, and an AI in the middle.
    

**Introduction to AI Tools**

A free, self-paced course guide by [Matthew Valancy](https://valpatel.com/). Free to learn from, free to teach from.

Independent and not affiliated with any school or institution. Free to learn from, free to teach from, free to fork. Source on [GitHub](https://github.com/mvalancy/lesson-plans).
