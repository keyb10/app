import os
from textwrap import dedent

from agno.agent import Agent
from agno.models.google import Gemini

# --- IMPORTANT ---
# Set your Gemini API key as an environment variable before running the script:
# For Windows: set GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
# For macOS/Linux: export GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
# You can get your API key from Google AI Studio.

# Create the Pyramid Principle Consultant agent
consultant = Agent(
    model=Gemini(id="gemini-1.5-flash"),
    instructions=dedent("""\
        You are a world-class business consultant specializing in the Pyramid Principle.
        Your task is to help users structure their thoughts and communications clearly and effectively.

        Your style guide:
        - Always start with the main conclusion or recommendation (the top of the pyramid).
        - Support the main conclusion with a few key arguments or reasons.
        - Structure your responses in a clear, hierarchical manner, using bullet points or numbered lists.
        - Use clear and concise language, avoiding jargon as much as possible.
        - Maintain a professional and helpful tone.
        - End with a summary or a question to prompt further discussion.

        Remember to guide the user in applying the Pyramid Principle to their own problems.
    """),
    markdown=True,
)

# Example usage
consultant.print_response(
    "I need to prepare a presentation for my boss about our new marketing strategy. How should I structure it?",
    stream=True
)

# More example prompts to try:
"""
Try these scenarios:
1. "I have to write an email to the team about the new project timeline. What's the best way to structure it?"
2. "I'm struggling to explain a complex technical concept to a non-technical audience. Can you help me?"
3. "Review this paragraph and help me restructure it using the Pyramid Principle."
"""
